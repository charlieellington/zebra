Thanks. I'll inspect the codebase in your `zebra` repository to confirm the project structure (App Router vs Pages), how and where `vanta-trunk.tsx` is imported, and if it's used inside server or layout-level components.

I'll then provide a clean, reliable build plan to fix the Vanta setup and prevent the `window is not defined` error and related client-side rendering issues.

Getting Vanta.js to Work in a Next.js App (Fixing SSR Integration Issues)
=========================================================================

Understanding the Errors and SSR Issues
---------------------------------------

The errors you encountered -- **`ReferenceError: window is not defined`** and **`[VANTA] "Init error" TypeError: ... is not a constructor`** -- are symptoms of loading Vanta (and its dependencies like p5 or Three.js) in a server-side context. Next.js (App Router) attempts to render pages on the server first, where browser globals like `window` don't exist. Vanta's effects rely on Web APIs (via **p5.js** or **Three.js**), so if they run during server-side rendering, you get a `window is not defined` error. The "not a constructor" errors indicate that the Vanta effect couldn't initialize, often because a required library (p5 or Three) wasn't available, causing Vanta to *"fall back to backgroundColor"* (i.e., it failed to render the effect).

**Key point:** We need to ensure Vanta's code only runs on the **client-side** (in the browser) *after* all dependencies (p5 or Three.js) are loaded. Below is a step-by-step plan to achieve this using best practices for Next.js 13+.

Step 1: Install Vanta and its Required Dependencies
---------------------------------------------------

Make sure you have the Vanta library and whichever graphics library its effect needs:

-   **Install Vanta:** `npm install vanta` (if not already installed).

-   **Determine the engine (Three.js vs p5.js):** Vanta effects are built on either Three.js (WebGL) or p5.js (Canvas). For example, **"Trunk"** and **"Topology"** effects use **p5.js**, while effects like **"Waves," "Net," "Birds,"** etc., use **Three.js**. Check the Vanta docs or README to know which engine your chosen effect needs.

-   **Install the engine:** If your effect needs Three.js, install it (`npm install three`). If it needs p5, install that (`npm install p5`). For instance, the *Trunk* effect requires **p5** instead of Three.js -- using Three.js for Trunk will not work.

**Why this is important:** Vanta does **not** bundle Three.js/p5.js by default; it expects them globally. The official usage notes that you must include the appropriate library (Three or p5) before initializing the effect. In our case, including the correct one will prevent the "not a constructor" init errors.

Step 2: Create a Client-Only Vanta Component
--------------------------------------------

Next, create a React component that sets up the Vanta background. This component must only run on the client:

1.  **Use a Client Component:** At the top of your component file, add **`"use client"`**. This ensures the component (and anything inside it) is only rendered in the browser, not on the server.

2.  **Import Vanta and the engine locally:** Inside this client component file, import the specific Vanta effect and the engine. For example, if using the *Trunk* effect, do:

    ```
    "use client";
    import { useEffect, useRef } from 'react';
    import p5 from 'p5';
    import TRUNK from 'vanta/dist/vanta.trunk.min';
    // (If using a Three.js-based effect like Waves, you'd import three instead of p5, e.g. import * as THREE from 'three', and the corresponding vanta.waves.min)

    ```

    Here we import `p5` and the `TRUNK` effect. Importing them in a client-only module is safe because Next.js won't try to execute this on the server. (If this import still triggers an error during build, you can alternatively perform the import dynamically inside the effect -- but marking the file as a client component usually suffices.)

3.  **Initialize Vanta in a `useEffect`:** Use the React `useEffect` hook to initialize the Vanta effect **after** the component mounts (so it runs only in the browser). For example:

    ```
    export default function VantaBackground() {
      const vantaRef = useRef(null);
      useEffect(() => {
        // Initialize Vanta on the client
        const vantaEffect = TRUNK({
          el: vantaRef.current,
          p5: p5,              // pass p5 instance for Trunk effect
          // ... plus any Vanta effect options (colors, etc.)
        });
        return () => {
          // Cleanup on unmount to stop animation and free resources
          if (vantaEffect) vantaEffect.destroy();
        };
      }, []);

      return <div ref={vantaRef} className="your-bg-class" style={{ width: '100%', height: '100%' }} />;
    }

    ```

    A few things to note in this snippet:

    -   We pass `el: vantaRef.current` so Vanta attaches the animated canvas to that div.

    -   **For p5-based effects** (like Trunk), pass the `p5` object in the options: `p5: p5`. This ensures Vanta uses the imported p5 instance instead of expecting a global `window.p5`. (The Vanta docs show using `p5: p5` when initializing Trunk.)

    -   **For Three.js-based effects**, you would similarly ensure a Three instance. Either include Three globally (e.g. via a `<Script>` tag) or import it and pass it as `THREE: THREE` in the config. For example, `BIRDS` or `WAVES` could be initialized with `{ el: ..., THREE: THREE }` if not using a global script. (Including a script tag for Three.js is another option, but using the module import and passing the object is a common practice in React/Vanta integration.)

    -   We return a cleanup function in `useEffect` to destroy the effect on component unmount, as recommended by Vanta's docs, to prevent memory leaks.

By doing the above in a client-only component, we avoid any `window` usage on the server. The `useEffect` will run only in the browser, satisfying the "React way" to handle window-dependent code.

Step 3: Load the Vanta Component on the Client Side in Next.js
--------------------------------------------------------------

Now, integrate this `VantaBackground` component into your Next.js page without triggering server-side execution:

-   **Using Next Dynamic Import:** The safest approach is to import the component dynamically with SSR disabled. Next.js provides `next/dynamic` for this. For example, in your page (or wherever you want the background):

    ```
    import dynamic from 'next/dynamic';
    const VantaBackground = dynamic(() => import('@/components/VantaBackground'), { ssr: false });

    export default function SomePage() {
      return (
        <main>
          {/* Other page content */}
          <VantaBackground />  {/* This will only render on the client */}
        </main>
      );
    }

    ```

    The option `{ ssr: false }` tells Next.js not to include this component during server-side rendering. This means the module (and thus the Vanta code within) will load only on the client side. By doing this, you ensure that even if your page is mostly server-rendered, the Vanta section is skipped until it can run in the browser.

-   **OR, Make the Page a Client Component:** If it's acceptable for the entire page to be client-side, you could alternatively put `"use client"` at the top of the page file and use `VantaBackground` directly. This is simpler but means none of that page's content is SSR'd. A more fine-grained approach is the dynamic import above (so only the heavy animation is client-only). In either case, **the key is that the Vanta code does not execute during SSR**.

The maintainers and community have suggested this pattern for Next.js. For example, one solution was: add `"use client"` to the top of the file and import the Vanta background with `next/dynamic` and `{ ssr: false }`. This matches what we've done.

At this point, if you rebuild and run your app, the Vanta effect should load without the earlier errors. The `window is not defined` issue will be gone because we never touch `window` on the server -- the effect runs inside `useEffect` on the client. And the "not a constructor" init error for Trunk should be resolved by including and passing the **p5** library (for Three.js-based effects, including Three globally or via config would similarly resolve any missing reference errors).

Step 4: Verify the Setup and Tweak as Needed
--------------------------------------------

After implementing the above:

-   **Run your Next.js app** and navigate to the page with the Vanta background. Open the browser console and ensure there are no Vanta-related errors. You should see the animated background playing as expected.

-   If you still see an error like "**Init error: ... is not a constructor**," double-check that:

    -   You passed the correct engine into the Vanta config. For example, Trunk needs `p5: p5` (not Three), whereas an effect like Waves needs `THREE: THREE` if Three.js isn't global. The Vanta README explicitly shows using the appropriate engine object when initializing effects.

    -   The dynamic import is properly set with `ssr: false` so that the component truly isn't being pre-rendered.

    -   The `<div ref>` that you provide is **mounted and has size**. Vanta will append a canvas to that element and render at its size. If the container has zero height, you might not see anything (though no error). Ensure your container div or its parent has a defined size or uses CSS to fill the screen.

-   **Cleanup on navigation:** Our component already calls `effect.destroy()` on unmount, which is important. If your background is meant to persist across route changes (e.g., a layout background), ensure you initialize it in a persistent component or re-initialize on each page as needed. Typically, you'd destroy on unmount to avoid multiple overlapping canvases if the component is removed.

(Optional) Alternative: Using Next.js `<Script>` for Vanta
----------------------------------------------------------

As an alternative to using the npm package, you can include Vanta via script tags. Next.js's `<Script>` component can load external scripts at different stages. For example, you could add in your page or layout:

```
import Script from 'next/script';

<div id="my-background" style={{ ...desired styles }} />

<Script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.6.0/p5.min.js" strategy="beforeInteractive" />
<Script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.trunk.min.js" strategy="beforeInteractive" />
<Script id="vanta-init" strategy="afterInteractive">
  {`VANTA.TRUNK({
       el: "#my-background",
       mouseControls: true,
       touchControls: true,
       gyroControls: false,
       p5: window.p5,  // using global p5 from the script
       // ...other options
     });`}
</Script>

```

Here we load p5 and the Vanta script globally before the React app hydrates (`beforeInteractive`), then run the init script after hydration. Using `strategy="beforeInteractive"` ensures that `window.VANTA` and `window.p5` are ready by the time we call `VANTA.TRUNK`. This approach was shown to work in a Next.js environment. The downside is that you're not using the React component model for Vanta, and you must manage the script ordering. However, it can be a quick fix if you prefer including scripts directly.

**In summary,** the recommended approach is to keep Vanta initialization on the client side. Use React's `useEffect` (or Next dynamic imports with `ssr:false`) to ensure no server-side code tries to access `window`. Include the appropriate engine (p5 or Three) for the effect you choose -- this is crucial for effects like **Trunk** (p5) or **Birds/Waves** (Three). By following the above steps, you should have a smooth Vanta background running on your Next.js site without build or runtime errors.

**Sources:**

-   Vanta.js Official README (usage with React hooks and engine requirements)

-   Next.js Community Q&A -- using Vanta in Next (recommendations to use `"use client"` and dynamic import with `ssr:false`)

-   Dev.to article on solving "window is not defined" in Next (useEffect and dynamic import patterns)

-   Example solution using Next's Script for external scripts (loading Three.js/Vanta before hydration)

-   GitHub issue discussion on Vanta Trunk error (importance of including p5 for p5-based effects)