## Vanta.js Error Fix Plan

### Identified Issues
1. **"TypeError: l is not a constructor"** - Vanta expects Three.js to be available globally, but we're importing it as ES modules
2. **"removeChild" error** - Persistent cleanup issues when component unmounts, even with improved cleanup

### Root Cause
Vanta.js is an older library that has compatibility issues with modern React and Next.js, particularly around cleanup and DOM manipulation.

### Implemented Solution ✅
Due to persistent Vanta issues, we implemented a **pure CSS/SVG tree pattern** as the primary solution:

1. **Created CSS Tree Pattern Component** (`src/components/css-tree-pattern.tsx`)
   - Pure CSS/SVG implementation with no external dependencies
   - Animated branches using CSS animations
   - Floating dots for visual interest
   - Lightweight and performant

2. **Set CSS Pattern as Default**
   - Added `USE_CSS_PATTERN = true` flag in credo-section.tsx
   - Vanta code remains but is disabled by default
   - Can easily switch back by changing the flag

3. **Benefits of CSS Solution**
   - No cleanup issues or errors
   - Better performance (no Three.js overhead)
   - Consistent rendering across all devices
   - Easier to customize and maintain

### CSS Pattern Features
- Repeating SVG pattern with trunk and branches
- Subtle pulse animations on branches with delays
- Gradient overlay for depth
- Floating dot animations
- Fully responsive and accessible

The CSS pattern provides a similar aesthetic to Vanta's trunk effect while being much more stable and performant.

---

## Implementation Steps

### Step 4.1: Setup Prerequisites
- [x] Install Shadcn Tooltip component: `npx shadcn@latest add tooltip`
- [x] Install Vanta.js library: `pnpm add vanta`
- [x] Create reusable Vanta Trunk component wrapper
- [x] Verify all Lucide icons are available (Zap, Target, Euro/Coin, Brush/Star, Monitor, Scissors)

### Step 4.2: Implement Credo Section
- [x] Create `<CredoSection>` component with Paul Graham quote
- [x] Add founder's philosophy and solo practice messaging
- [x] Style with Tailwind (centered, italic quote, proper typography)
- [x] Reuse testimonial blockquote structure from `testimonials.tsx` where applicable
- [x] Add to homepage after Hero, before Recent Builds

### Step 4.3: Implement Quick Wins Section
- [x] Create `<QuickWinsSection>` component with 6 benefits grid
- [x] Implement icon + label layout with Lucide icons
- [x] Add Tooltip functionality for desktop hover
- [x] Implement mobile-friendly solution (tap or always visible)
- [x] Add to homepage after Credo section

### Step 4.4: Polish and Integration
- [x] Integrate Vanta Trunk animation into Credo section
- [x] Fine-tune responsive behavior and spacing
- [x] Test tooltip functionality across devices
- [x] Verify smooth section transitions
- [x] Performance optimization (limit concurrent animations)

---

Developer Build Plan: Post‑Hero "Credo & Key Benefits" Section
==============================================================

Section Overview and Structure
------------------------------

The **Post‑Hero section** will immediately follow the hero on the one-page Zebra Design site, delivering a one-two punch of philosophy and value props. It comprises two main components:

1.  **Credo Section (Founder's Philosophy Quote)** -- A highlighted quote from Paul Graham with attribution, followed by a one-line founder insight. This conveys Zebra Design's guiding principle and solo-practice ethos in a concise, always-visible block.

2.  **Quick Wins Section (Key Benefits List)** -- A row of five (actually **six** in content) core benefits -- *Speed, Validation, Flat Price, Quality Design, Full‑Stack,* and *Cancel Anytime* -- each represented by an icon and a short label. On interaction (hover or tap), each reveals a one-line explanation of the benefit. This gives users an at-a-glance view of why working with Zebra Design is valuable.

By separating these into two sub-components (one for the credo quote, one for the benefits list), we maintain clear component boundaries in the Next.js codebase. In the app structure, we can create something like a `<CredoSection>` and a `<QuickWinsSection>` (or repurpose an existing template component) to render these parts. This keeps the layout modular and easier to manage.

Credo Section (Paul Graham Quote & Solo Practice Motto)
-------------------------------------------------------

**Content & Purpose:** This section will feature the famous Paul Graham quote: *"Only hire people who either write code or go out and get users."* -- **Paul Graham, *The 18 Mistakes That Kill Startups***. Directly beneath, we include the founder's take: *"That's the lens I use for every project: ship working code, talk to users, skip the fluff."*. This one-liner in first person ties the quote to Zebra Design's philosophy. We will also reinforce the **solo practice** angle here: e.g. a brief line like *"Zebra Design is my solo practice --- no middle managers. You work directly with me."* (as per provided copy). This assures clients they'll get personal, accountable service. All together, this content establishes a credo and personal touch in a compact form.

**Implementation & Component Reuse:** We will implement this as a standalone section (e.g. `<CredoSection>`) rendered below the hero. Check the Lume Studio template for any existing **quote** or **testimonial** component or styling -- if one exists, we can reuse its structure to minimize custom code. For example, the template's testimonial section (if any) might have a stylized blockquote or special typography; we can adopt that for consistency. If not, a simple custom implementation will do:

-   Use semantic markup: a `<blockquote>` for the quote text and an inline `<cite>` or `<span>` for the author (Paul Graham) and source. This ensures proper structure (though we might style it without default browser blockquote styles).

-   The founder's follow-up and "solo practice" note can be normal `<p>` text below the quote, since they are explanatory comments, not part of the quote itself. We might wrap those in a container together with the blockquote for layout purposes.

**Tailwind Styling:** Center and style this section to make it stand out without overwhelming:

-   **Layout:** Center all content within a container (e.g. `max-w-xl mx-auto text-center`) so it's easy to read. Add vertical padding (`py-12` or similar) to create separation from the hero and the next section.

-   **Typography:** Use an eye-catching style for the quote:

    -   Apply italic styling to the quote text (`italic` class) to give it a distinguished look.

    -   Set the quote text larger than body but smaller than the hero: for example, Tailwind `text-2xl md:text-3xl` for the quote line. The author attribution ("-- Paul Graham, ...") can be slightly smaller or same size but lighter weight. We can prefix the attribution with an em dash (---) for clarity.

    -   The follow-up line ("That's the lens...skip the fluff.") should be in regular font (no italic), perhaps `text-lg` or `xl` for emphasis, and maybe spaced a bit above/below to separate it. We might **bold** key phrases (like "ship working code" or "talk to users") if needed to highlight the ethos, but keep it simple to preserve the concise tone.

    -   The "Zebra Design is my solo practice..." line can be on its own line. To emphasize this promise, we could style it slightly differently -- e.g. `font-medium` or even as a callout. However, per the minimal divergence guideline, a simple approach is to make it a separate sentence or line in the same paragraph as the follow-up, and perhaps italicize or emoji-tag it for visual cue (for instance, prepend a 🔑 or 👍 emoji). At minimum, ensure it's clearly visible --- we might use a `<br>` to break it onto a new line after a dash, or make it its own `<p>` with a bit of top margin.

-   **Color:** This section will likely use the default background (light neutral) and default text color (near-black) as set by the branding. No special background color needed, but we should ensure sufficient contrast. If the template has a subtle quote icon or stylized quotation mark background for testimonials, we could reuse that as a decorative element.

**Vanta Trunk Visual (Decorative Accent):** To enrich the design, we will integrate a **Vanta "Trunk" animated visual** here as a decorative element, following the Vanta integration plan. Rather than a full-screen effect, we'll embed a small trunk animation **as if it were an image** within this section. For example, we can place a trunk canvas of ~250--300px square to the side of the quote:

-   **Placement & Layout:** On large screens, consider a two-column layout: the text quote on one side and the trunk animation on the other. For instance, a simple two-column grid (`md:grid md:grid-cols-2 md:gap-8 items-center`) could work: the quote (and follow-up text) left, and on the right, a `<div>` container of fixed size containing the trunk animation. On small screens, this should collapse to one column -- the trunk can either appear below the text, or we might hide it on very small devices to save space/performance (see Responsive notes below).

-   **Trunk Configuration:** Use the **reusable Trunk component** (as defined in the Vanta plan) with parameters tuned for a mid-page state. The hero likely used a high chaos value (chaotic lines) and the footer will use a very low chaos (calm branches). For this credo section (which is early-mid page), we'll use a **moderate chaos** setting -- e.g. slightly less chaotic than hero, symbolizing progress from the initial frenzy toward clarity. Concretely, if hero was chaos ~1.5, we might use something like `chaos={1.0}` and a moderate `spacing` (if default is 10, maybe keep 10 or slightly tighter). The idea is a dynamic but not overwhelming pattern that complements the quote. The line/color scheme should align with the site (perhaps black or dark lines on a neutral background by default, which will blend with our light section background).

-   **Fixed-Size Container:** Ensure the trunk is rendered in a fixed-size `<div>` with explicit width/height (for example, `w-[300px] h-[300px]`) so that it **behaves like an inline image** next to the text. This keeps the layout predictable and avoids the animation taking over the whole section. We can add `mx-auto` on smaller screens so it centers.

-   **Performance Optimization:** Adhere to the guidelines to not overload the page with animations. Ideally, use at most two trunk instances concurrently (the hero's and maybe this one). We should initialize this credo trunk when it enters view and consider disposing the hero trunk once the user scrolls past it (if the library and our code allow cleaning up). Alternatively, since this is immediately after hero, both might be in view initially on some screens; if performance suffers, we might opt to skip the trunk here and only use hero/footer. As a safe measure, we'll include a fallback: for mobile or very low-powered devices, the trunk component can detect and either reduce detail or not render (we could show a static SVG image of a trunk pattern as fallback). This ensures we keep the site fast and smooth on all devices.

-   **Testing:** We will verify that the trunk animation appears correctly in its container and doesn't interfere with reading the quote. It should subtly draw interest but not distract from the text (fine-tune size/opacity as needed). Also test that removing the trunk (or its canvas) doesn't break layout when hidden on small screens.

**Copy Tone & Clarity:** The text in this section is already succinct and strong. We will preserve the exact phrasing provided, making only minor tweaks for flow:

-   Keep sentences short and direct (Hemingway style). For example, the solo practice line can be split into two sentences for clarity: "Zebra Design is my solo practice. No middle managers -- you work directly with me." This maintains the tone but ensures easy readability.

-   The founder's "lens" sentence is already a tight, no-fluff statement -- we'll use it verbatim. Likewise, the Paul Graham quote stays word-for-word. If needed, we'll add quotation marks and proper em dash before the attribution to clearly mark it as a quote and source.

-   The overall tone is first-person and confident yet informal. We'll double-check grammar (e.g., ensure em dashes or semicolons are used correctly and consistently) and that each idea stands alone clearly. By centering and isolating this text, we amplify its impact.

Quick Wins Section (Key Benefits Icons & Tooltips)
--------------------------------------------------

**Content & Purpose:** The Quick Wins section showcases Zebra Design's key value propositions in a scannable format. There are five primary benefit labels given in the content (*Speed, Validation, Flat Price, Full‑stack, Cancel anytime*), with an additional emphasis on "Quality Design" (to reinforce that speed doesn't come at the expense of quality). Each benefit will be represented by an icon + label, and each has an **expandable one-line description** revealing more detail. This section gives visitors a quick overview of "what you get" by working with Zebra Design, in a visually engaging way.

**Layout & Component Reuse:** We will implement this as a horizontal icon list, leveraging Tailwind for layout and Shadcn/UI for interactivity. The Lume template likely has a "services" or "features" section component (for example, a `<ServicesSection>` that showed multiple features with icons). We should **reuse that structure** if available -- for instance, if the template's services section was a grid of feature cards or a set of icons with text, we can strip it down to just icon+text and plug in our content. This avoids building from scratch and maintains the template's design consistency (and any nice scroll animations it had). Concretely:

-   Use a section wrapper (e.g. `<section id="benefits">` or similar) with appropriate padding (`py-16`) to give breathing room.

-   Inside, create a responsive grid for the icon items. On **desktop widths**, we can display all items in one row: e.g. `grid grid-cols-6 gap-6` (since we have 6 items including Quality Design). The template's default might have been 4 or 5 columns, but Tailwind's grid can easily do 6. On **mobile**, we'll make it wrap into multiple rows: e.g. `grid-cols-2` on small screens so items stack into two per row. This ensures icons and text aren't squeezed too small. (With 6 items, that would form 3 rows of 2 on mobile; if it were 5 items, we'd get 2-2-1 rows which is acceptable.) We might also add `md:grid-cols-3` for midsize tablets, etc., to progressively reveal more columns as screen real estate allows.

-   Each **benefit item** will consist of an icon and a text label, aligned side by side. We can make each item a flex container (`flex items-center space-x-2`) so the icon and text sit nicely together. The icon can be a small SVG (around Twenty to 24px) and the text label can be a short word or two. We will apply a slightly emphasized text style for the labels (e.g. `font-medium text-base`) so they stand out as keywords.

**Icons (Lucide/Heroicons):** Instead of using raw emoji characters as in the draft, we'll use consistent Lucide icons (already included via Shadcn/UI) to match the site's style. The mappings are:

-   **Speed:** Use a lightning bolt icon (e.g. `LucideZap` or similar) to represent speed⚡.

-   **Validation:** Use a target or bullseye icon (`LucideTarget`) to represent hitting the mark 🎯.

    -   **Flat Price:** Use a currency icon, ideally a Euro symbol since pricing is in Euros (Lucide doesn't have Euro by default, but it has `LucideEuro` sign). Alternatively, a generic coin or tag icon could work to convey pricing.

-   **Quality Design:** Use an icon conveying design or quality. Possibilities: a paintbrush (`LucideBrush`), palette, or even a star (to denote quality). We'll choose one that visually fits the set (for example, a simple star icon could mean high quality).

-   **Full-stack:** Use a computer or server icon (`LucideMonitor` or a stack icon) to show full-stack capability 🖥.

-   **Cancel Anytime:** Use a scissors icon (`LucideScissors`) to symbolize cutting a contract ✂️.\
    We'll import these icons from Lucide (the Shadcn setup likely has an `<Icons>` library or direct Lucide imports). Each icon can be rendered with a Tailwind class like `w-5 h-5` (for ~20px) and perhaps `text-gray-800` (or the default text color). They should visually integrate with the text (maybe give a bit of right margin if not using flex spacing).

**Interactive Descriptions (Shadcn Tooltip):** Each benefit label will have a one-sentence description that appears on hover or tap. For this, we will wrap each icon+text item in a **Tooltip** component from Shadcn (Radix):

-   Use `<Tooltip>` with `<TooltipTrigger>` and `<TooltipContent>` as provided by Shadcn's UI library. The trigger will encompass the icon and label (ensuring the entire item is hoverable/clickable). The content will contain the benefit's summary text.

-   We will populate the tooltip content with the exact copy provided for each benefit (concise and user-focused, preserving the authentic tone). According to the content guidelines, these one-liners are:

    -   **Speed:** "Go from idea to a working, tested product in weeks, not months."

    -   **Validation:** "Every iteration includes user testing to de-risk your ideas."

    -   **Flat Price:** "One flat monthly fee, no surprise hours or change orders."

    -   **Quality Design:** "Quality design in every iteration -- no shortcuts."

    -   **Full‑stack:** "Front-end and back-end development as needed -- not just design."

    -   **Cancel Anytime:** "Month-to-month engagement. Pause or stop with a 20% wrap-up fee."\
        We will use these verbatim from the content source. Each tooltip sentence is ~10-15 words, aligning with Hemingway brevity.

-   **Styling & Behavior:** Shadcn's tooltip by default will likely appear as a small dark box with white text (default Radix style), which is fine for our design (it's unobtrusive and readable). We should ensure the tooltip text doesn't overflow on small screens -- our lines are intentionally brief to avoid that. The tooltip should appear above or below the icon on desktop hover. On mobile, Radix tooltips usually show on long-press by default. We need to verify this; if a simple tap does not trigger it, we might implement a custom onClick that toggles an always-visible small popover, or use an alternative approach (see below). We'll test with actual devices.

-   We'll import the Tooltip components from the Shadcn UI (likely something like `import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"` if following their file structure). No extra library is needed since the template integrated Radix already.

**Responsive Design & Mobile UX:** This section must work well on all screens:

-   **Desktop/Tablets:** With the grid layout, all icons and labels are in one line (or two lines on medium screens). The tooltips on hover make sense for desktop. We ensure each item has some margin so it's not too cramped (`gap-4` or `gap-6` in the grid). Also, we will verify that the text labels don't wrap awkwardly -- they're short, so typically one or two words, which should fit fine side-by-side with the icon. If needed, we can adjust font size on smaller breakpoints (e.g. use `text-sm` on very narrow widths to avoid wrapping).

-   **Mobile (small screens):** On mobile, since there is no hover, we have two possible strategies:

    1.  **Tap-activated Tooltips:** We rely on Radix's built-in behavior where a long press might show the tooltip. We can enhance this by making the TooltipTrigger focusable (e.g. it's a `<button>` or `<span tabindex="0">` around the icon+text) so that tapping it will bring up the tooltip (as focus or via a small script to toggle tooltip on click). We will test that a quick tap shows the tooltip content. If it's finicky, we might provide an explicit onClick that toggles a stateful tooltip or uses Radix's `TooltipProvider` with a different delay. The goal is that mobile users can still access the info easily.

    2.  **Alternate Accordion for Mobile:** If tooltips prove hard to use on touch devices, we can implement a fallback: a small Accordion component (from Shadcn) listing the benefits. For example, on mobile view we could show a list of the benefit labels and a "+" to expand the one-line description (essentially an FAQ-style list of the five benefits). This "stacked accordion" approach would replace the hover tooltips with tap-friendly disclosure. It's a bit heavier UI, so we'll attempt the tooltip solution first, but keep this in mind. Another simpler fallback is to **always show the descriptions** beneath each label on mobile (so instead of hiding them in a tooltip, render them as subtitle text under each label). This sacrifices some brevity but guarantees the info is seen. Given the requirement to optimize for mobile, we might choose to just display them: since each line is short, showing them in a 2-column grid beneath each icon could still look fine on a phone. We will decide based on testing; the build plan allows either approach as needed.

-   The grid will naturally wrap items into the next line on small screens (using `grid-cols-2`). We should ensure the section doesn't overflow horizontally. If the labels are too long (they're not, except maybe "Cancel anytime" which is two words plus icon), they might wrap -- but that's okay. Each grid cell could have some bottom margin (`mb-4`) to give space between rows.

-   We will also verify that the **trunk visual** from the Credo section above doesn't collide or overlap with this section on small screens. If using a two-column layout for Credo, on mobile it becomes one column, so the trunk might appear just above this benefits grid. We should add sufficient padding/margin so that there is a clear separation (e.g., the Credo section `mb-12` and Quick Wins section `mt-4` or similar). This prevents any visual crowding.

**Styling & Theming:** Visually, the Quick Wins section should align with the site's clean, minimalist aesthetic:

-   Keep background neutral (same as page background) so it feels like a continuation of content. We rely on the icons to provide visual breaks. If the template had a slight alternating background for different sections, we can consider it (e.g., a light gray backdrop here to distinguish from white hero background), but given "minimal divergence," likely keep it uniform.

-   Use consistent text styles: the labels could be all-caps or small caps if the template does that for subheadings, but more likely just normal case. We'll follow whatever the template's Services/Features section did. If nothing specific, normal case with maybe a semi-bold weight is fine.

-   Ensure the accent color (once chosen for CTAs) isn't needed here -- perhaps the icons or labels could use the accent color on hover to show interactivity. For instance, we can add a hover style: on hover, underline the text or change icon color slightly to indicate it's interactive. However, the tooltip itself appearing might be enough feedback. We can also use `cursor-pointer` on the trigger element to hint it's clickable.

**Component Integration Notes:**

-   **Reuse vs New:** If we find a `ServicesSection` or similar component in the template, we will refactor it: e.g., it might be taking an array of service objects with title, description, icon, etc. We can feed our five/six benefits into it. We'd strip out any unwanted parts (maybe the template had longer descriptions or links -- we only need a short label and we'll attach our tooltips). If no such component exists or it's too different, we'll create a new `<QuickWinsSection>` component in the codebase for clarity.

-   **Animations:** The template might have scroll reveal animations (such as fade-up when section appears). If so, wrap or use the same classes so that as users scroll to this section, the icons animate in. This can be as simple as adding a utility class or using an existing `<ScrollView>` context if provided. We won't write custom animation code if we can help it -- reuse Lume's built-ins for consistency.

-   **Accessibility:** Each benefit's text is short but meaningful. We should provide accessible markup: maybe each icon+label is a list item in an unordered list (`<ul>`) for semantic grouping of "benefits list". The tooltip content should be accessible to screen readers -- Shadcn's Radix tooltips typically aren't announced by default on hover. For screen reader users, we might consider always showing those descriptions or ensure the information is in the DOM. Perhaps an `aria-label` on the trigger that includes both label and description could be a quick fix for accessibility, so they don't miss the context. This is a development detail to note.

**Copy Refinement:** The benefit summaries will be used exactly as provided (they are already concise and clear). We'll just ensure consistency in style:

-   All sentences start with a capital letter and end with a period (for those that are full sentences). E.g., some lines provided use a period, others might omit -- we'll standardize (likely include periods for complete sentences like these).

-   The tone is matter-of-fact and benefit-focused. We maintain the second-person or implied second-person perspective ("Go from idea...", "Every iteration includes...", "One flat fee, no surprises."). This speaks directly to the user in a concise way.

-   The **Quality Design** line is finalized as: "Quality design in every iteration -- no shortcuts." This reassures the user that quality is a given, maintaining the same concise, confident tone as the other benefits.

-   We will double-check grammar on any small changes (like splitting the solo practice line as mentioned). Everything should read as one voice. If the founder's tone uses contractions and casual language ("I've", "you"), we keep that for authenticity.

Summary of Implementation Steps
-------------------------------

-   **Add CredoSection Component:** Create the section in JSX, insert Paul Graham quote, attribution, founder's comment, and solo-practice note. Use Tailwind to center and style text (italic quote, etc.). Reuse any template quote styles if available. Embed the Vanta Trunk component in a fixed-size div alongside the text, using appropriate chaos settings (moderate). Test on desktop and mobile, adjust size or remove for small screens, and manage performance by limiting active animations.

-   **Add QuickWinsSection Component:** Either repurpose a template feature section or build a new one. Implement a responsive grid (`cols-6` to `cols-2` as screen size changes) of icon+label items. Import Lucide icons and replace any placeholder icons. Wrap each item with Shadcn Tooltip triggers, and supply the provided one-liner texts in TooltipContent. Ensure tooltips work on hover and tap -- if not, consider always-visible text on mobile or an accordion fallback. Keep the UI lightweight and fast (SVG icons, minimal extra code).

-   **Styling & Consistency:** Use Tailwind utilities to match spacing and font sizing per design guidelines (section padding, heading sizes, etc.). Confirm the color scheme (monochrome with accent) is applied -- e.g., icons and text likely just use default dark text color for now, which aligns with the near-black (#111) specified in branding. If needed, tweak colors or font weights to highlight interactivity (maybe add hover text-gray-600 or similar). Maintain ample whitespace around each section so the page doesn't feel cramped.

-   **Content Integration:** Insert the exact copy as given for all provided lines, making only slight edits where noted for clarity. No content should be lost -- double-check that "Quality Design" benefit is included (since it was listed by the user) and that the solo practice line appears somewhere (either in Credo or later About -- we chose to surface it here for maximum visibility, as requested).

-   **Testing and Review:** View the site in development and verify:

    -   The Credo quote looks good on different screen sizes (text remains readable, trunk animation doesn't lag or overlap content).

    -   The Quick Wins icons are all visible, correctly labeled, and in the right order. Hovering on each (desktop) shows the correct tooltip text matching the copy. Tapping/long-press on mobile reveals the info (or alternate solution displays it).

    -   Check for any grammatical or spelling issues in the rendered text. Ensure "Flat Price" consistency is maintained (use title case in the label, and the tooltip sentence can say "One flat monthly fee..." in sentence case).

    -   Make sure the section transition from hero -> credo -> benefits is smooth and visually logical (the credo sets the philosophy, the benefits deliver the tangible value). If the template had a scrollspy or nav links, consider adding an anchor id to this section (e.g., id="benefits" or id="quick-wins") if we want to link to it from the nav later (the Implementation Plan suggested possibly an "Examples" link scrolling to Recent Builds; for benefits, maybe no nav link needed, but just in case).

-   **Preserve Authentic Tone:** Lastly, do a content read-through to ensure the founder's voice is consistent. It should feel like a solo designer speaking plainly and confidently about what he offers, with no marketing fluff. Phrases like "ship working code, talk to users, skip the fluff" and "no middle managers; you work directly with me" exemplify this tone -- we kept them front and center. Any minor phrasing improvements we made (like splitting a sentence) will be checked to not alter this voice.

By following this plan, we leverage the existing Next.js + Tailwind + Shadcn setup of the Lume Studio template to implement a powerful post-hero section. The result will be a well-structured, responsive section that communicates Zebra Design's philosophy and benefits in a concise, visually engaging manner, while reusing template components and adhering to performance and style guidelines (including the dynamic Vanta visuals). This keeps the code maintainable and the content impactful, with no piece of the provided copy left behind.