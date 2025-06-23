# Zebra Design Portfolio -- Setup Task Checklist

## Phase 1: Environment Setup and Repository Fork ✅
- [x] Create new GitHub repository for Zebra Design project
- [x] Fork the Lume Studio template repository from https://github.com/haramishra/lume-studio-next
- [x] Clone the fork locally and set up Git remotes
- [x] Install Node.js (LTS version 18+) and pnpm package manager
- [x] Install project dependencies with pnpm
- [x] Verify configuration files (Next.js, TypeScript, Tailwind, PostCSS)
- [x] Start development server and confirm it runs on localhost:3000
- [x] Test navigation and verify tech stack integration
- [x] Create feature branch `zebra-site` and make initial commit

## Phase 2: Initial Cleanup and Branding Updates
- [ ] Remove unneeded pages/sections (Team, Testimonials, Portfolio, Contact)
- [ ] Update navigation links to match remaining sections
- [ ] Replace "Lume Studio" with "Zebra Design" throughout
- [ ] Update HTML metadata (title: "Zebra Design — Designers That Code with AI", description based on content)
- [ ] Set global colors:
  - Background: white
  - Card/section highlights: #FCF8F4
  - Header text: #2A2A2D
  - Secondary headers: #494868
  - Body text: #121212
  - Brand accent colors: #CDCBFF (purple), #E7BDD7 (pink), #FDA7A0 (coral)
- [ ] Verify typography and spacing consistency
- [ ] Update navigation for one-page layout with smooth scrolling
- [ ] Create Pricing page stub at `/pricing`
- [ ] Test all components and layout functions
- [ ] Commit changes to Git

---

Zebra Design Portfolio -- Setup and Initial Build Plan
=====================================================

This development plan covers the first two phases for launching the **Zebra Design** one-page portfolio site (with an additional Pricing page) using the Lume Studio Next.js template. The goal is to efficiently stand up a high-quality front end by reusing the template's components where possible and minimising bugs. Each phase is broken into clear tasks with step-by-step instructions. Developers using Cursor (AI pair-programming) should work incrementally and test at each step for smooth progress.

1\. Environment Setup and Repository Fork
-----------------------------------------

In this phase, we fork the Lume Studio template and prepare the development environment. We'll ensure the project runs locally and verify the tech stack (Next.js App Router, Tailwind CSS, Shadcn UI) is configured correctly. We also create an initial Git branch for our work and establish best practices for using Cursor AI during development.

### Creating a New GitHub Repository and Forking the Template

1.  **Create new GitHub repository:** Go to GitHub and create a new repository named `zebra` under your account. This will be the main repository for the Zebra Design project. Initialize it without a README to keep it empty for now.

2.  **Fork the Lume Studio template:** Navigate to the original Lume Studio Next.js template repository at https://github.com/haramishra/lume-studio-next. Click the **Fork** button to create your own fork of the repository under your GitHub account. This gives you a copy of the template code.

3.  **Clone your new repository locally:** On your machine, open a terminal and run `git clone <your-zebra-design-repo-url.git>` to download your new empty repository. Choose a local directory for the project.

4.  **Add the template fork as a remote:** Set up the template fork as a remote source to pull the code from:

    ```
    cd zebra-design-portfolio  # go into your project folder
    git remote add template https://github.com/<your-username>/lume-studio-next.git
    git fetch template
    git merge template/main --allow-unrelated-histories
    ```

    This pulls the template code into your new repository while maintaining separate Git histories.

5.  **Set upstream remote (optional):** As a best practice, also add the original template repo as an "upstream" remote:

    ```
    git remote add upstream https://github.com/haramishra/lume-studio-next.git
    ```

    This allows you to pull in updates from the original template in the future if needed.

### Setting Up the Local Development Environment

1.  **Install Node.js:** Ensure you have a recent LTS version of Node.js installed (e.g. Node 18 LTS). Next.js 13+ and Tailwind require modern Node versions, so update Node if needed.

2.  **Choose a package manager:** The template provides a `pnpm-lock.yaml`, indicating it uses **pnpm** for dependency management. It's recommended to use pnpm for consistency. If you don't have pnpm, install it globally (`npm install -g pnpm`). Alternatively, you can use npm or Yarn, but using pnpm will avoid potential version mismatches.

3.  **Install dependencies:** In the project folder, run the install command:

    ```
    pnpm install

    ```

    This will download all required packages as defined in the `package.json`. (If using npm, run `npm install` instead -- you may want to delete or ignore the pnpm lockfile in that case.)

4.  **Verify configuration files:** Check that critical config files are present, especially:

    -   **Next.js config:** `next.config.ts` (for any custom Next.js settings; typically minimal in a template).

    -   **TypeScript config:** `tsconfig.json` (ensures the project is using TypeScript properly).

    -   **Tailwind config:** There should be a `tailwind.config.js` or `.mjs` in the root. Open it to ensure the content paths include the project's files (e.g. `content: ["src/app/**/*.{ts,tsx}", "src/components/**/*.{ts,tsx}", ...]`) and that any theme customisations or plugins (like forms or typography) are set. This confirms Tailwind CSS is set up.

    -   **PostCSS config:** `postcss.config.mjs` should have Tailwind listed as a plugin, usually: `plugins: { tailwindcss: {}, autoprefixer: {} }`.\
        Reviewing these files gives confidence that the stack (Next.js, Tailwind) is configured as expected.

### Running and Testing the Development Server

1.  **Start the dev server:** Run the Next.js development server with:

    ```
    pnpm run dev

    ```

    (or `npm run dev` if using npm). This starts the app in development mode. By default it will be available at **[http://localhost:3000](http://localhost:3000/)**.

2.  **Open the site locally:** In your web browser, navigate to `http://localhost:3000`. You should see the Lume Studio template's landing page. Verify that the page loads without errors. The template's demo content (images, text, navigation) should appear.

3.  **Check console and terminal for errors:** Ensure the terminal shows **Compiled successfully** (or no serious warnings). In the browser's developer console, look for any errors or missing files. A clean start-up is expected since this is an unmodified template.

4.  **Verify basic functionality:** Click through the site's navigation links to see that they work. The template is likely a single-page with sections and perhaps some sub-pages or modals. For example, if there are nav links for *About*, *Services*, etc., clicking them should scroll to the respective section. Confirm that Tailwind CSS styling is applying (e.g. the layout and colors look as per the demo) and that interactive components (if any) work.

5.  **Confirm the tech stack integration:** Check that the key technologies are indeed active:

    -   Next.js App Router: Verify that the project uses the `app/` directory structure (e.g. there may be an `src/app/page.tsx` for the index page, and possibly other files like `src/app/layout.tsx`). Using the App Router means we have React Server Components and modern routing.

    -   Tailwind CSS: Inspect elements on the page to see Tailwind utility classes in action (for instance, the presence of classes like `px-`, `text-` sizes, etc., in the HTML). The styling of the page (responsive design, fonts, spacing) should match Tailwind's output.

    -   Shadcn/UI components: Look for any UI components that come from the Shadcn library. The template might include Shadcn UI elements (such as dialog, dropdowns, or styled form elements). For example, if there's a contact form or a modal, it could be using Shadcn's pre-built components. You might see imports from `@/components/ui` or usage of utility functions like `cn()` which are typical in Shadcn setups. This confirms that Shadcn/UI is integrated as expected. (According to the template's author, the stack includes Shadcn/UI.)

### Creating a New Branch for Development

1.  **Create and switch to the feature branch:** It's best not to work directly on the `main` branch of your fork. Create a new branch for the Zebra site work. For example:

    ```
    git checkout -b zebra-site

    ```

    This branch will contain all your initial development changes, keeping them separate from `main` (which still mirrors the original template code).

2.  **Make an initial commit:** Even if no files have been changed yet, consider making an initial commit on `zebra-site` to mark the starting point. For instance, you could simply update the README file to reflect the new project name ("Zebra Design Portfolio") and then commit that. Run:

    ```
    git add README.md
    git commit -m "chore: initial project setup for Zebra Design site"

    ```

    Then push the branch to your remote (`git push -u origin zebra-site`). This creates a reference in your repo for this branch and serves as a restore point if needed.

### Best Practices When Using Cursor AI Assistance

-   **Work in small iterations:** With Cursor (or any AI pair programmer), plan to implement one small change at a time. For each task (e.g. removing a page or updating a component), use the AI to assist in writing the code for that single change, then **test immediately**. This helps catch errors early. For example, after removing a page's code, run the dev server to ensure nothing broke.

-   **Review AI suggestions carefully:** Always inspect the diffs or code that the AI generates. Make sure it aligns with your intention and the project's style. The AI might not perfectly understand the project's specifics, so be ready to adjust its output.

-   **Leverage Cursor's context:** When asking Cursor for help, provide specific instructions or file context. Instead of a broad "fix the site", focus on concrete subtasks ("Remove the Team section from the homepage and its navigation link"). This ensures the AI's output is relevant.

-   **Keep version control tight:** Commit after each successful change. Frequent commits (with meaningful messages) will document the progress and make it easy to undo a specific change if the AI's suggestion introduces a bug.

-   **Maintain code consistency:** The template likely has an ESLint configuration (and possibly a code formatter). Run `pnpm run lint` or check for any lint scripts to auto-fix formatting. When AI writes code, ensure it follows the existing code style (naming conventions, component structure) so the new code blends seamlessly with the template code.

-   **Use documentation and reference:** If unsure how to do something (like updating Tailwind config or Next.js metadata), consult official docs or the template's documentation. While Cursor can help, double-checking with Next.js and Tailwind docs can prevent missteps. Remember, the Lume Studio template was built to be easily customizable, so common tasks like changing colors or text are intended to be straightforward.

By following these practices, you'll collaborate effectively with the AI assistant and maintain high code quality from the start.

2\. Initial Cleanup and Branding Updates
----------------------------------------

With the environment running, the next phase is to tailor the template to **Zebra Design's** needs. We will strip out any pages/sections that aren't needed for our one-page site, update branding (name, colours, metadata), and ensure the layout still functions correctly. The idea is to reuse existing components rather than create new ones from scratch wherever possible (the template's components are modular and meant to be repurposed). After cleanup, the site will consist of a single-page front end with the necessary sections, plus a stub for the Pricing page.

### Removing Unneeded Pages and Routes

1.  **Identify unused sections/pages:** Review the template's content and decide which sections are not required for the Zebra Design portfolio. The template likely includes sections like *Team*, *Testimonials*, *Portfolio (Projects)*, and *Contact*. For our initial one-page site, we will **remove** these to simplify the landing page. (We assume Zebra Design wants a simple landing page highlighting services, with an external Pricing page.)

2.  **Remove navigation links to these pages:** Open the header or navigation component (often in `src/components` or in `app/layout.tsx`). Find links or menu items for *Team*, *Testimonials*, *Portfolio*, and *Contact*. Remove those list items or navigation entries so they no longer appear in the menu. For example, if the nav is an array of routes, delete the objects for these sections. If the nav is hardcoded in JSX, delete the `<Link>` or `<a>` elements for these items.\
    *After this step, the nav should contain only the items we plan to keep (e.g. Home, About, Services, and a Pricing link -- we'll update Pricing shortly).*

3.  **Delete or disable page files:** If the template structured Team/Testimonials/Portfolio/Contact as separate pages or routes (e.g. `app/team/page.tsx`, `app/contact/page.tsx` or similar), delete those files and their associated components. This prevents users from navigating to URLs that we no longer support (and removes the code from the bundle). In the App Router, you might find folders under `app` named "team", "portfolio", etc. Safely delete those entire folders.\
    -- **Note:** Some templates implement these as sections on the home page rather than separate routes. If that's the case (all content is in one `page.tsx`), you will remove the JSX blocks rather than whole files. Locate the sections in the homepage code (for example, a `<TeamSection />` component usage or a `<section id="team">` block) and remove or comment them out.

4.  **Adjust any references in code:** After removal, search the codebase for any references to the removed sections. For instance, there may be footer links to Contact or a call-to-action button that anchored to the Contact section. Remove or update those references to avoid broken links. Similarly, if there was code importing those section components, remove those import lines to prevent build errors.

5.  **Preserve for future reuse (if applicable):** If you anticipate that some of these sections might be useful later (perhaps repurposed for different content), do not completely throw away the code. For example, the **Team** section layout could later be adapted to an **About Us** section; the **Testimonials** section could be reused when you have client quotes. To retain them without showing on the site, you have options:

    -   Keep the component files (e.g. `TeamSection.tsx`) but simply don't render them. You could add a comment in the code like "// TeamSection not used in one-page version, kept for future use".

    -   Alternatively, rename the components/files to a more generic or future-oriented name. For instance, rename `TeamSection` to `AboutSection` if you plan to use it to describe the founder or mission later. This way you can later fill in new content but reuse the styling and structure.

    -   If you remove them entirely now (to avoid any bloat), consider tagging a Git commit for "removed sections" so you can retrieve this code from version history when needed again.\
        The key is to **avoid reimplementing** already-built UI components later if your needs change -- the template's components are meant to be adaptable and save you time.

### Updating Site Title and Branding

1.  **Change the site title text:** Replace all instances of the template's name ("Lume Studio", etc.) with **"Zebra Design"**. Start with the primary site title: in a Next.js App Router project, this is typically set via the `metadata` in `app/layout.tsx` or a `<title>` tag in `app/head.tsx`. For example, if the template has:

    ```
    export const metadata = {
      title: "Lume Studio -- ...",
      description: "...",
    };

    ```

    update the `title` to `"Zebra Design -- [your tagline]"` (or just "Zebra Design" for now). If a `<title>` tag is hard-coded, change its content. This ensures the browser tab and search engines show the correct name.

2.  **Update branding in the layout:** Many templates include the site name or logo in the header. If the nav bar currently shows a logo or text for "Lume Studio", replace it with **"Zebra Design"**. For now, we will use a simple text logo: e.g., if the header uses a `<span className="logo">Lume Studio</span>`, change the text to "Zebra Design". If there was an SVG or image logo, you can replace it later with Zebra's logo; as a placeholder, either use the text name or swap in a temporary image if available.\
    *Tip:* It's good to also update any alt text associated with logos to say "Zebra Design Logo".

3.  **Find other occurrences:** Perform a global search in the project for the word "Lume" or any template-specific branding. This may uncover things like the footer text ("©2023 Lume Studio" etc.) or internal variables named after the project. Replace text content with "Zebra Design" and any dates or company info accordingly (e.g. "©2024 Zebra Design"). Leave internal code variables as-is unless purely cosmetic.

4.  **Verify the result:** Start the dev server and ensure that the site's visible branding now says Zebra Design wherever the template name was before -- particularly on the page title (browser tab) and the top of the page. We want the site to immediately reflect the new brand identity to users.

### Updating HTML Metadata (Title & Description)

1.  **Edit the page metadata:** As mentioned above, Next.js App Router uses a `metadata` export or a special file for setting the HTML `<head>` content. Locate where the meta title and description are defined. Commonly, in `app/layout.tsx` you might see a metadata object, or in older setups an `app/head.tsx` with a `<title>` and `<meta name="description">`. Update these to match Zebra Design:

    -   **Title:** `"Zebra Design — Designers That Code with AI"`. This appears on the browser tab and in search results.

    -   **Meta Description:** `"I help you launch a digital product—designed and coded—faster than you thought possible. Idea → tested product in weeks, not months. Design-as-a-Service for startup founders, SMEs, and product teams."` This will go into `<meta name="description" content="...">`.

2.  **Check social sharing metadata:** Some templates include Open Graph tags or similar (like meta tags for Twitter cards, etc.). If you find any (e.g. `<meta property="og:title">`, `<meta property="og:image">`), update those as well to avoid showing template info when the site is shared on social media. At minimum, ensure `og:title` is "Zebra Design — Designers That Code with AI" and `og:description` matches the new meta description. If there's a default image (og:image), you might update or remove it for now if it was template-branded.

3.  **Save and test:** After editing metadata, refresh the site in dev mode and use the browser's "View Page Source" to confirm the `<title>` tag now shows "Zebra Design..." and that the meta description content is updated. This ensures our changes took effect. (The changes might not reflect visually on the page itself, but they are important for SEO and proper page titles.)

### Setting Global Colours and Theme Styles

1.  **Brand colour palette:** Zebra Design uses a sophisticated monochromatic palette with carefully chosen accent colors. The brand colors are:
    - **Background:** White (#FFFFFF) for main areas
    - **Card/Section highlights:** #FCF8F4 (warm off-white) for cards or alternating sections
    - **Header text:** #2A2A2D (dark charcoal) for main headings
    - **Secondary headers:** #494868 (muted purple-grey) for subheadings
    - **Body text:** #121212 (near-black) for paragraph text
    - **Brand accents:** Three signature colors for CTAs and highlights:
      - #CDCBFF (soft purple)
      - #E7BDD7 (dusty pink)
      - #FDA7A0 (coral)

2.  **Update Tailwind theme (if applicable):** Open the `tailwind.config.js` (or `.mjs`). In the `theme.extend` section, define custom colours for the brand. For example:

    ```
    // tailwind.config.js
    theme: {
      extend: {
        colors: {
          background: "#FFFFFF",           // main white background
          'background-alt': "#FCF8F4",     // warm off-white for cards
          'text-primary': "#2A2A2D",       // header text
          'text-secondary': "#494868",     // secondary headers
          'text-body': "#121212",          // body text
          'accent-purple': "#CDCBFF",      // brand purple
          'accent-pink': "#E7BDD7",        // brand pink
          'accent-coral': "#FDA7A0",       // brand coral
        }
      }
    }

    ```

    These color names can be used throughout the project with Tailwind classes like `bg-background-alt`, `text-text-primary`, `bg-accent-purple`, etc.\
    *If the template already has custom colour variables (for example, some Shadcn UI integration might use CSS variables for colors), adjust those instead or as well.* For instance, the global CSS might contain `:root { --background: ..., --foreground: ... }`. Update those CSS variables to new colour values so that all components using them will update.

3.  **Apply colours to layout:** Ensure the global styles use the new colours. For example, set the `<body>` background color to white (via a Tailwind class or global CSS). If using Tailwind classes, you might add `className="bg-background text-text-body"` in the root layout (e.g. on the `<body>` or main container) to apply the white background and near-black body text globally. Update sections that need the warm off-white background to use `bg-background-alt`. For headings, apply `text-text-primary` to main headers and `text-text-secondary` to subheadings. The three accent colors should be used strategically - for example, buttons could use `bg-accent-purple`, links might use `text-accent-coral`, and highlights could use `bg-accent-pink`. If the template's buttons use a certain class (like `bg-primary`), update those to use one of the brand accent colors. Test by finding prominent CTA elements and applying different accent colors to see which works best in context.

4.  **Check contrast and appearance:** After implementing the new palette, view the site. The background should be clean white (#FFFFFF), with some sections using the warm off-white (#FCF8F4) for visual hierarchy. Text should appear in the appropriate shades - main headers in dark charcoal (#2A2A2D), secondary headers in muted purple-grey (#494868), and body text in near-black (#121212). The three accent colors (#CDCBFF purple, #E7BDD7 pink, #FDA7A0 coral) should be strategically placed on interactive elements. Verify all color combinations meet WCAG AA contrast guidelines - particularly the accent colors against white backgrounds for text readability.

5.  **Iterate if needed:** If any part of the UI now looks off (for instance, maybe the footer or navbar had a dark background in the original template that doesn't match our new scheme), adjust accordingly. You might need to remove or alter those styles (e.g. if the nav was translucent dark and now we want it light, change it to use the background colour or a different style). The goal is a consistent light-themed site with Zebra's accent color highlights.

### Confirming Typography and Spacing

1.  **Review typography scale:** The template likely comes with a default typographic scale (font sizes for h1, h2, body text, etc.). Confirm these align with Zebra Design's desired style. For instance, if Zebra's brand favours slightly larger headings or a specific font, now is a good time to adjust. Check the Tailwind config for any font family settings; you might see something like `fontFamily: {...}` or import of Google Fonts in `globals.css`. If you plan to use a custom font (and have it ready), include it now. Otherwise, ensure the default (probably something like `sans` = Inter or similar) is acceptable.

2.  **Check heading sizes:** Look at the homepage content and see if the headings and subheadings are appropriately sized and spaced. The Lume template likely uses Tailwind's default or a preset for font sizes. If Zebra's design requires changes (for example, making the main hero title bigger or smaller), adjust the classes or theme. Tailwind allows custom font sizes in the config if needed. For now, verify that `<h1>` (the hero title) stands out, that section titles (`<h2>`, `<h3>`) have a consistent hierarchy, and body text is legible.

3.  **Verify spacing and layout consistency:** Scroll through the page and inspect the spacing around sections and elements. The template probably uses margin/padding utility classes (e.g. `py-20` for section padding). Ensure that after removing some sections, the spacing still looks good. For example, if you removed a section that was between two others, you might need to adjust padding so the gap isn't too large or too small now. Each section should have enough white space to breathe, but the page shouldn't look like disjointed chunks.

4.  **Conform to a design system:** If Zebra Design has a predefined design system (specific spacing scale or type scale), integrate those values now. For instance, maybe all section top padding should be 100px -- you can standardise that by applying the same Tailwind utility to each remaining section container. Similarly, if the button border radius or other stylistic element should match branding, update those globally (Shadcn's default radius might be small; if Zebra prefers pill-shaped buttons, you'd increase the radius in CSS or Tailwind).

5.  **Test responsiveness:** Shrink the browser window or use dev tools to simulate mobile. Check that headings and text still look good on small screens (no overflow or cut-off). Tailwind's responsive utilities might already handle it, but ensure any changes you made (fonts or spacing) are mobile-friendly. For example, if you increased an h1 size, consider adding a responsive utility like `text-4xl md:text-6xl` so it doesn't overwhelm on a phone. The template was billed as fully responsive, so maintain that behavior with your custom tweaks.

### Updating the Navigation Menu for One-Page Layout

1.  **Simplify menu items:** After removing pages, the navigation should now contain only links relevant to the one-page site. Likely we have "Home", "About", "Services" (or whatever sections remain on the page) and we want to add "Pricing". Ensure that each of these corresponds either to an anchor on the page or a route:

    -   **Home** -- can simply scroll to top. Often the logo or site name serves as the Home link. If "Home" is explicitly in the menu, it should have an anchor link like `href="#home"` or just `/#` (since it's the top of the page).

    -   **About** -- link to the About section on the page (e.g. `href="#about"`). If the template sections already had IDs (e.g. a section with `id="about-us"`), use that. Otherwise, add an `id` attribute to the About section container so the link works.

    -   **Services** -- similarly, anchor to the Services section (e.g. `href="#services"`).

    -   (If you retained a section for projects/portfolio in the one-page, that could be another anchor, but per requirements we removed it.)

    -   **Pricing** -- this will be a separate page, so this link should use Next.js routing to `/pricing`. In a Next Link, it could be `<Link href="/pricing">Pricing</Link>`. If using a normal anchor, `<a href="/pricing">Pricing</a>` will also work for now.

2.  **Implement smooth scrolling (if not already):** For a one-page experience, clicking an anchor like "About" jumps to that section. To make this smooth rather than a jarring jump, enable smooth scrolling behavior via CSS. You can add to `globals.css`:

    ```
    html { scroll-behavior: smooth; }

    ```

    (Or use Tailwind's utility by adding class `scroll-smooth` to the `<html>` tag in `app/layout.tsx`.) The template might have already included this, but double-check. This provides a nicer user experience.

3.  **Add a Pricing page stub:** Since we plan for a Pricing page outside the one-page scroll, ensure that route exists. Create a new file at `src/app/pricing/page.tsx` (if not already present). In that file, set up a basic Next.js page component, for example:

    ```
    export const metadata = { title: "Pricing — Zebra Design" };
    export default function PricingPage() {
      return (
        <div className="min-h-screen px-6 py-20 bg-background text-text-body">
          <h1 className="text-4xl font-bold mb-6 text-text-primary">Pricing</h1>
          <p className="text-text-secondary">Our pricing plans will be listed here soon.</p>
        </div>
      );
    }

    ```

    This is just a placeholder with minimal styling using the Zebra Design color scheme. It ensures that when the user clicks the "Pricing" link, they see a new page (even if content is coming later) instead of a 404. You can refine this page in a later phase.

4.  **Update nav to highlight current section (optional):** One-page sites often highlight the menu item for the section currently in view (e.g. "About" is highlighted when you scroll to the About section). If the template's ScrollView or scripts handle this, verify it still works. If not, this can be a later enhancement. Just keep in mind to preserve any `active` link styling that the template might have had -- ensure it doesn't break after removing links. For now, it's acceptable if there's no active state, as long as navigation works.

5.  **Test all nav links:** Click each menu item in dev mode.

    -   "Home" should scroll to top (or reload the page to top).

    -   "About" and "Services" should smoothly scroll to their sections on the home page. (If they don't scroll at all, likely the anchor IDs don't match -- fix that by adding matching `id="about"` in the About section element, etc.)

    -   "Pricing" should navigate to the new Pricing page. On the Pricing page, ensure the navbar is still visible (the layout component should be shared, so it should be). Also verify that on the Pricing page, the menu's "Pricing" item is perhaps highlighted or at least that the page has a way to go back (the "Home" link will take back to main page).

    -   If the site uses a mobile menu (hamburger), test that toggling and clicking these links still works after the changes.

### Verifying Global Components and Layout Functions

1.  **Check ScrollView animations:** The template's ScrollView component triggers section animations when they come into view. After removing sections, ensure the remaining ones still utilize this. Typically, each section in the template might be wrapped like `<ScrollView><SectionContent/></ScrollView>` so that, as you scroll, the content fades in or moves in. Confirm that for sections like About or Services, the ScrollView wrapper is still in place. If you accidentally removed it while editing, re-wrap the section in `<ScrollView>`. The component is likely in `src/components/scroll-view.tsx` and provides context or intersection observer logic globally.\
    *How to test:* Scroll down the page and observe if the content animates as before (e.g. sliding in or fade-up effects). If the animations no longer trigger, check the console for errors related to ScrollView or intersection observers. Fix by ensuring the component is imported and used where needed. (You might also verify that the ScrollView component is still included in the project -- we didn't remove it, so it should be fine.)

2.  **Verify layout and other providers:** Next.js App Router often has a root layout that includes providers or context. For example, if there was a `<ThemeProvider>` or any context for animations, make sure it's still wrapping the app in `app/layout.tsx`. Removing pages shouldn't affect this, but double-check that we didn't delete any required import by accident. The global layout should still contain things like the `<Header>` (navbar), perhaps a `<Footer>`, and the `<main>{children}</main>` for content. Ensure the header and footer still render properly on the home page and the new Pricing page.

3.  **Test form or interactive components:** If the Contact section had a form and we removed it, there might have been some global state for it (for example, a form validation library or a modal context). Removing it could potentially produce warnings if not cleaned up. Make sure no leftover code is expecting those. For instance, if a `<ContactForm />` component was used in multiple places, removing it from one place should be fine, but if it was providing something globally, ensure that's handled. Typically, it won't be an issue, but it's worth scanning the code for any context Providers that are now unnecessary (and remove them to keep code clean).

4.  **Footer check:** If the template has a footer with links to the removed pages (common to link Contact or Portfolio in the footer), update that as well. Remove or alter those links to avoid 404s. The footer might instead contain social media or copyright text; just ensure it doesn't reference now-nonexistent pages.

5.  **General UI pass:** Do a thorough click-through and visual pass of the entire site in the browser. Ensure elements like the hero section, any carousels or sliders, and buttons still work as intended. The removal of sections shouldn't break them, but for example, if there was a "See our portfolio" button that linked to the Portfolio section, and now that's gone, make sure to update or remove that button. Perhaps you'd change it to "See our work" and in the future link it to a case studies page -- or remove it for now. No dead links or references should remain.

### Testing the Application After Changes

1.  **Run the development server:** If it's not already running, start `pnpm run dev` again. Watch the terminal output for any build errors or warnings. Resolve any errors that appear. Common issues might include import errors ("Module not found: ./TeamSection" if we forgot to delete an import) or unused variable warnings if a constant was only for a removed section.

2.  **Open the site and reload:** Visit [http://localhost:3000](http://localhost:3000/) and do a hard refresh. The page should load with the updated content (fewer sections) and new branding. Verify the following on the homepage:

    -   The navbar shows only the expected links (About, Services, Pricing, etc.) and no placeholder links.

    -   The hero section now says "Zebra Design" somewhere (either in the heading or nav) reflecting the new brand.

    -   Removed sections (Team, Testimonials, etc.) are indeed gone -- scroll down to ensure the content flows directly from About -> Services (for example) with nothing in between that shouldn't be there.

3.  **Navigate to Pricing page:** Click the Pricing link. The Pricing page should load (in dev, Next.js will do a fast transition). It should show the stub content you created. Confirm the layout is consistent -- the header and footer (if present) wrap around it properly. There should be no 404 error. If you see "404", then the page file might not be named or placed correctly (check that it's in `app/pricing/page.tsx` and that you restarted the dev server after adding it, as Next might not have picked it up on the fly).

4.  **Check console for runtime errors:** With the site running, open dev tools console. Look for red error messages or any significant warnings. Address any issues. For example, after our cleanup, there might be a warning like "Warning: Each child in a list should have a unique key" if we removed an item from an array incorrectly, or a React error if we left a component in an inconsistent state. Fix these by adjusting the code (add missing keys, remove any dangling JSX, etc.).

5.  **Cross-browser/basic device test:** Quickly check the site in another browser or an incognito window to ensure our changes don't have environment-specific issues. The site should look and behave the same. Also test the mobile menu if applicable to ensure the removal of links didn't break the toggle (for instance, if the mobile menu was expecting a certain number of items, it should still work with fewer).

6.  **Commit the changes:** Once everything is working and tested, commit your work on the `zebra-site` branch. Use a message like `"feat: initial cleanup and brand update (removed extra pages, updated styling)"`. Pushing this commit to your repository will update your project board tasks as done for this phase.

* * * * *

By the end of these two phases, the project should be running a lean one-page site with Zebra Design's name and base styling. We've established a solid foundation with the template's components (hero, about, services, etc.) intact and removed distractions. The next steps would likely involve adding Zebra-specific content to each section and any further custom features, but with the environment set up and the unnecessary parts stripped out, we have a clean slate to build on. All these tasks follow professional front-end practices: making incremental changes, testing after each, and reusing existing code to speed up development while reducing bugs.