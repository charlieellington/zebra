Great -- I'll create a detailed build plan for the post-Recent Builds section of your site, covering Launch Process, Who I Help, Pricing Summary, Pain Points, FAQs, and the CTA.

This will include UX recommendations, Hemingway-style copy tightening, component layout based on your codebase patterns, and smart Vanta visual placements adjusted for each section.

I'll let you know once it's ready to review.

Developer Plan for the Next Home Page Sections
==============================================

## Implementation Sub-Steps

### Step 5.1: Launch Process Section
- [ ] Create `LaunchProcessSection.tsx` component
- [ ] Check if Accordion component exists, install if needed: `npx shadcn@latest add accordion`
- [ ] Implement accordion with 4 steps (using content from documentation/content lines 7-15)
- [ ] Configure auto-expand on desktop, collapsed on mobile
- [ ] Test responsive behavior

### Step 5.2: Who I Help Section  
- [ ] Create `WhoIHelpSection.tsx` component
- [ ] Implement bullet list with audience types (using content from documentation/content lines 21-31)
- [ ] Style with emphasis on key nouns (potentially using #E7BDD7 or #CDCBFF for text highlights)
- [ ] Test mobile/desktop layouts

### Step 5.3: Pricing Section
- [ ] Create `PricingSection.tsx` component  
- [ ] Add pricing summary text (using EXACT content from documentation/content lines 37-47)
- [ ] Add abstract image placeholder (select based on content fit and responsive needs)
- [ ] Create "Pricing Calculations" link button pointing to `/pricing`
- [ ] Style with brand card background (#FCF8F4 only for background tint)

### Step 5.4: Pain Points Section
- [ ] Create `PainPointsSection.tsx` component
- [ ] Implement accordion with 4 pain points (using content from documentation/content lines 51-65)
- [ ] Configure default expand behavior (same as Launch Process)
- [ ] Test accordion interactions

### Step 5.5: FAQs Section
- [ ] Create `FaqSection.tsx` component
- [ ] Implement FAQ accordion (using EXACT content from documentation/content lines 71-91)
- [ ] Keep all items collapsed by default
- [ ] Use single-open mode for cleaner UX

### Step 5.6: Final CTA Section
- [ ] Create `FinalCtaSection.tsx` component
- [ ] Add CTA text (using content from documentation/content lines 95-99)
- [ ] Add abstract image accent (select based on dynamic feel and responsive needs)
- [ ] Implement "Book your call" button linking to https://cal.com/charlieellington/zebra-call
- [ ] Implement "See live examples" button linking to #recent-builds
- [ ] Style section (consider using #FCF8F4 for subtle background tint)

### Step 5.7: Mobile and Responsive Best Practices
- [ ] Test at different responsive widths the content 
- [ ] Research best practices and improve the user experience and adjust the content to be visually great at different responsive sizes. Specially mobile.


### Step 5.8: Integration & Testing
- [ ] Add all new sections to homepage in correct order
- [ ] Test all responsive breakpoints
- [ ] Verify all links and interactions
- [ ] Performance check (ensure images are optimized)
- [ ] Final content accuracy review

---

**Objective:** Implement the next set of content blocks after the **Recent Builds** section on the Zebra Design one-page site, using the Lume Studio Next.js template's existing components and Tailwind styles. These blocks (Launch Process, Audience List, Pricing Summary, Pain Points, FAQs, and final CTA) should seamlessly match the site's clean, minimalist design with minimal custom code. We will reuse established section structures and UI patterns for consistency, ensure all content is mobile-responsive, and optimize performance.

## Implementation Details (Updated with Clarifications)

### Button Links Configuration
- **"Book your call"**: Will link to https://cal.com/charlieellington/zebra-call (external booking page)
- **"Pricing Calculations"**: Will link to `/pricing` (internal page, content to be created later)

### Abstract Image Strategy
- Select images based on content appropriateness and responsive design best practices
- Suggested approach:
  - Use more structured/geometric images (like abstract-3.png) for business-oriented sections (Pricing)
  - Use more dynamic/flowing images (like abstract-5.png) for action-oriented sections (CTA)
  - Position images to complement content without overwhelming it
  - Ensure proper optimization and lazy loading for all images

### Accordion Component Setup
- First check if Accordion component exists in the project
- If not present, install via: `npx shadcn@latest add accordion`
- This component will be used in Launch Process, Pain Points, and FAQs sections

### Color Usage Guidelines
- **Background tints**: Only use #FCF8F4 (light cream/tan) for subtle background coloring
- **Accent colors** (#E7BDD7 pink, #CDCBFF purple): Reserved for:
  - Icon highlighting
  - Text emphasis (e.g., bold keywords in lists)
  - Interactive element accents
  - NOT for section backgrounds

General Structure & Styling Guidelines
--------------------------------------

-   **Section Container:** Wrap each new content block in a `<section>` element with standard spacing classes (e.g. `className="py-16 md:py-32"`) to maintain vertical rhythm consistent with other sections. Inside, use the template's container conventions (such as a centered `div` with padding, e.g. `mx-auto px-4 max-w-3xl`) so content doesn't stretch too wide on large screens. This mirrors the structure of existing sections (hero, about, etc.) for a unified layout.

-   **Component Reuse:** Leverage the template's components and Tailwind utilities rather than writing new CSS, to ensure visual consistency. For example, use Shadcn/UI (Radix) primitives for accordions and any card or list styles already in the project. If a pre-built component (like a Card or Accordion) exists, use it; otherwise, compose new ones using Tailwind classes in line with the template's aesthetic (same fonts, colors, rounded corners, etc.). Each block can be implemented as a React component under `src/components/sections/home/` (e.g. `LaunchProcessSection.tsx`, `WhoIHelpSection.tsx`, etc.), then imported into the homepage layout in the correct order.

-   **Typography & Tone:** Ensure headings and text follow the site's typography scale and Hemingway-style clarity. Use concise, punchy sentences and simple word choices for any new or edited copy. For content provided by the founder (e.g. step descriptions, pain point resolutions), lightly refine grammar for brevity and clarity while keeping the authentic tone. However, where the user specified to use exact wording (the Pricing summary and FAQ text), preserve it verbatim (apart from minor formatting). Use the same heading levels and text styles as similar sections (e.g., section titles as `h2` or `h3` with appropriate font classes, body text as normal paragraphs) to maintain hierarchy.

-   **Responsive Design:** Follow a mobile-first approach -- build for small screens, then enhance layout on larger screens. Use Tailwind responsive utilities (like `md:flex`, `lg:text-xl`, etc.) to adjust as needed. After implementing each section, test it at various breakpoints. On mobile, content will stack vertically and accordions should be easy to tap; on desktop, utilize multi-column layouts or expanded views as described per block. Verify that no text or element overflows the screen on small devices and that spacing is comfortable on all sizes.

-   **Abstract Image Integration:** Since Vanta animations caused performance issues, we'll use static abstract images from `public/images/abstract-[1-5].png` as visual accents in select sections. These should be used sparingly and with proper optimization (lazy loading, appropriate sizing) to maintain performance.

With these general guidelines in mind, we break down the implementation of each content block:

1\. **"Launch in Weeks, Not Months" -- 4-Step Process Accordion**
----------------------------------------------------------------

This section will communicate the fast launch process in four steps, using an accordion to reveal each step's details. It should reinforce the "launch in weeks, not months" message clearly.

-   **Component & Layout:** Create a component e.g. `LaunchProcessSection.tsx` and wrap its content in a `<section className="py-16 md:py-32">` container. At the top of this section, include a heading for the theme "Launch in Weeks, Not Months" (e.g. an `<h2>` or stylized `<p>` tagline). Make this heading prominent and concise -- it could even be the exact phrase "Launch in weeks, not months." styled similarly to other section titles for impact. Below it, place the accordion element containing the four steps.

-   **Accordion Implementation:** Use the Shadcn/UI **Accordion** component (which uses Radix UI). Since we have multiple steps and want potentially all open on desktop, use `type="multiple"` so that more than one item can be expanded at once. Create four `<AccordionItem>`s with unique `value` keys (e.g. "step1" through "step4"). For each item:

    -   **Trigger:** Use `<AccordionTrigger>` with the step title (e.g. "Workshops", "Prototype", "User Testing", "Continuous Build"). Style the trigger text to stand out --- likely using a font size and weight similar to a subsection heading (check existing accordion or toggle styles in the template). It should be clear and clickable. If the template provides an icon (like a chevron) for accordion triggers, that will appear automatically; ensure it's visible.

    -   **Content:** Inside `<AccordionContent>`, put the step's description text (as a `<p>` or small block of text). Use the exact content provided for each step from the content file, but edit for brevity and clarity. The content for steps is in documentation/content lines 7-15.

    -   Ensure the content is given some margin or padding for readability (the default AccordionContent in Shadcn might already have appropriate spacing; if not, add a class like `mt-2` on the `<p>`).

-   **Default Expanded on Desktop:** Implement the behavior that on desktop (md screens and up), accordion items are expanded by default, but on mobile they start collapsed. We can achieve this by setting the Accordion's `defaultValue` based on screen width. For example, in React, determine on mount if `window.innerWidth >= 768` (Tailwind's md breakpoint ~768px). If yes, set `defaultValue` to an array of all item values (`["step1","step2","step3","step4"]`), otherwise set it to an empty array (meaning no item open initially). This way, desktop users see all steps at a glance, reinforcing the quick process, while mobile users see a list of step titles they can tap to expand (saving space).

-   **Styling & UX:** Follow the styling pattern of any existing accordion in the template (if available). Likely:

    -   The accordion container could be full width or a centered box. To maintain a clean look, do not overload with custom styles; the default styling from Shadcn (which usually includes a border or divider between items) may suffice. If needed, add a subtle divider or bottom border on each `<AccordionItem>` (e.g. `border-b border-gray-200`) to separate steps.

    -   Make sure the accordion is keyboard-accessible (Shadcn will handle ARIA roles) and that the trigger area is large enough for easy clicking on mobile (you might make the text a block-level button or add padding).

    -   The section should appear minimalist and informative. Keep it subtle and clean.

-   **Responsive Behavior:** On small screens, each accordion item will occupy the full width. On desktop, since we are auto-expanding them, they will simply stack vertically showing all content. If the content for each step is short (a sentence or two), this will look like a brief 4-step outline. Verify that this section doesn't become too tall; if each item's text is lengthy, you might keep only the first item expanded on desktop by default instead of all four -- but per requirements, likely all should be visible. Test the interaction: collapsing and expanding should work on all devices (the default expanded state on desktop doesn't prevent users from collapsing if they want, since we set `type="multiple"` and can set `collapsible` true as needed).

2\. **"Who I Help" -- Audience List Section**
--------------------------------------------

This block highlights the types of clients or audiences that Zebra Design serves (e.g. startup founders, SMEs, etc.), in a simple bullet list for quick scanning. Content is in documentation/content lines 21-31.

-   **Component & Layout:** Create `WhoIHelpSection.tsx` and wrap in a `<section className="py-16 md:py-32">` as usual. You can include a small heading or intro line for context, like an `<h2>` "Who I Help" or a brief lead-in sentence, styled in the same way as other section headings or subtitles. This could even be visually subtle (since the content is self-explanatory as a list). Below that, place an unordered list of the audience types.

-   **List Markup:** Use a semantic `<ul>` with each audience category as an `<li>`. Apply Tailwind list utilities for styling:

    -   Use `list-disc` (or `list-none` with a custom marker if a different symbol is desired) and `pl-5` (or similar) so that the bullets have proper indentation. For a clean look, you might use `list-disc list-inside` to bring bullets inside the text flow on mobile, but on desktop `list-outside` might look better. Adjust with responsive classes if needed.

    -   Ensure there's spacing between list items -- e.g., add `space-y-2` on the `<ul>` to give a small gap between each line, making it easier to read.

-   **Text Styling:** Keep each list item as provided in the content file. Emphasize the key nouns in each item for quick scanning. For example, bold **Startup founders**, **Product teams with developers**, etc. You can do this by wrapping that word in a `<span className="font-semibold">` or using `<strong>` in the JSX.

-   **Mobile Optimization:** On small screens, the list will simply be a vertical list of bullets. That's fine, but ensure the text wraps nicely (avoid super long items). On larger screens, if the list is lengthy (say more than 6 items), you might consider splitting into two columns for a balanced layout. You could achieve this with Tailwind's responsive column classes (e.g., `md:grid md:grid-cols-2 md:gap-x-8`) wrapping the `<li>` elements. However, since there are only 5 items, a single column centered or left-aligned is acceptable. Align text left for readability, and consider increasing font size slightly on larger screens for better presence (e.g., `text-base md:text-lg`), while keeping it consistent with body text style.

-   **Tailwind Typography:** Ensure the list uses the same font and color as the rest of the site text (probably the default body text color). The goal is a clean list that fits with the minimalist design -- no overly fancy icons or graphics, just text and simple bullets.

3\. **Pricing -- Value-Based Pricing Summary**
---------------------------------------------

In this section, we present the founder's value-based pricing approach in a concise form. There are no tiered plans here -- just a single summary of how pricing works, with a call-to-action link to the detailed pricing page. Content is in documentation/content lines 37-47.

-   **Component & Layout:** Create a `PricingSection.tsx` component and wrap it in the standard `<section className="py-16 md:py-32">` container. This section should visually stand out a bit as a distinct block. A common approach is to use a **card-style container** within the section:

    -   Add a centered `<div>` that contains the pricing text and the link button. You might give this an extra class like `className="bg-[#FCF8F4] rounded-xl p-6 md:p-8 shadow-sm"` to create a light colored box (using the brand's light tan/cream color #FCF8F4) with padding and maybe a small shadow or border. This provides contrast against the white page background. Ensure the text color remains the standard body color (dark) for readability against this light background.

    -   Make this inner container responsive: perhaps width 100% on mobile and a max width (e.g. `max-w-xl`) center-aligned on larger screens, so it doesn't stretch too wide.

-   **Content:** Use the **exact pricing summary text provided** from documentation/content lines 37-47 (do not alter the wording, as requested). This includes the headline, sub-copy, and the paragraph about pricing & terms. Place it as structured in the content file. If it's multiple paragraphs, keep them tight with minimal spacing -- e.g., if using `<p>` tags, add a class like `mb-4 last:mb-0` or use Tailwind's `space-y-4` on a wrapping element to control spacing. The tone should remain consistent with the user's writing (since we're not modifying it), but the styling should make it easy to read.

-   **"Pricing Calculations" Link Button:** Below or alongside the text, include a call-to-action link that says **"Pricing Calculations"**. This should be a styled link that looks like a button. Use the same style as other buttons on the site. Set this link's `href` to `/pricing`. Ensure it opens the pricing page in the same tab (normal navigation, since it's an internal link).

    -   Style considerations: Because this link is within a colored card, ensure the button has sufficient contrast. For instance, a dark button (black or deep gray background with white text) will stand out against the light card background.

    -   Positioning: Center the button under the text (add a wrapper div with `text-center` if needed). Give some top margin to separate it from the text (e.g. `mt-4`).

-   **Abstract Image Accent:** As a subtle visual accent, incorporate one of the abstract images. Select an image that complements the professional nature of pricing information:

    -   Consider using a more structured/geometric abstract image for this business-focused section
    -   Position the image subtly (e.g., partially visible in a corner with `opacity-30`)
    -   On mobile, consider hiding the image for cleaner layout
    -   Ensure the image is optimized and uses lazy loading (`loading="lazy"`)

-   **Responsive & Contrast:** Ensure this card is responsive: on mobile, it should be full width (minus padding) and stack text and button nicely. On larger screens, the card can be centered with fixed max width. The text should have sufficient contrast against the card background (#FCF8F4 is very light, so regular dark text is fine). The card itself should contrast from the page background (assuming the page is pure white, the slight tint will be visible; if not enough, you could use a border or shadow to delineate it).

4\. **"Pain Points Solved" -- Problem/Solution Accordion**
---------------------------------------------------------

This section will list common pain points that target clients face, and how the Zebra Design approach solves them. We'll present each as an accordion item -- likely phrased as a statement of a pain point (or question) as the title, and a brief resolution or answer as the content. Content is in documentation/content lines 51-65.

-   **Component & Layout:** Create `PainPointsSection.tsx` and wrap in `<section className="py-16 md:py-32">`. You might include a small heading for this section as well -- e.g., `<h2>Pain Points Solved</h2>` or a short intro line like *"Common challenges I address:"* to set context. Style it similarly to other section titles (consistent font and size). Then implement an accordion for the list of pain points, similar to how we did for the Launch Process.

-   **Accordion Setup:** Use another Shadcn/Radix **Accordion** component. Since these Q&A pairs are more informational (and not a sequential process), you can decide whether multiple can be open or just one at a time. For a FAQ-style feel, **multiple open** (type="multiple") is fine, allowing the user to expand all if they want. We will have 4 items here (as specified). Each `<AccordionItem>` corresponds to one pain point:

    -   **Trigger (Pain Point):** Set the trigger text to the pain point statement. It could be phrased as a short sentence or question that the client might have, e.g., "*I don't have in-house developers*" or "*Worried about long development cycles?*". Use the exact phrasing from the provided copy, but edit slightly if needed to be punchy. For consistency, perhaps phrase them all either as questions or as statements of the problem. Ensure the tone still reflects the founder's voice (which might be empathetic or straightforward). Style these triggers in bold or semi-bold so they stand out, maybe using the same style as the Launch steps triggers (perhaps an `h3` or `h4` size).

    -   **Content (Solution):** In the `<AccordionContent>`, provide the resolution or answer text that explains how Zebra Design solves that problem. Keep these answers concise and focused (a few sentences at most). Edit the provided text for crispness -- e.g., remove any fluff and lead with the solution. For example, if the pain point is lack of technical team, the content might be: *"**Solution:** I offer end-to-end product design and build, acting as your technical partner so you don't need an in-house team."* Keep the tone helpful and confident, as presumably given by the founder. Use normal text styling (e.g., `text-sm md:text-base`) and perhaps a slightly muted tone if appropriate (e.g., `text-gray-700`) to differentiate from the trigger if desired.

    -   Each content block could optionally start with **"Solution:"** (or similar) to clearly answer the pain, but this is optional if the text naturally flows.

-   **Default State:** By default, it's probably best to have these **collapsed initially**, so the user can scan the pain point titles first. However, the prompt says "follow the implementation used in previous accordion sections." In the Launch section, we opened them on desktop by default. You could do the same logic here (all open on desktop, closed on mobile). Consider whether that benefits this content: If the resolutions are short, showing them on desktop might be nice so the user immediately sees solutions. If they are longer or you want the user to actively click, you might leave them closed. To stick to consistency, you can apply the same approach: use the `defaultValue` technique to open all items on larger screens and none on mobile by default. This would mirror the behavior of the Launch accordion for consistency. Implement it similarly (check `window.innerWidth` and set default open values array accordingly).

-   **Styling:** Similar to the first accordion, use minimal styling -- the content itself should carry the weight. Possibly add a little separation between items:

    -   If not already styled by the component, you can add a border or divider between each AccordionItem here as well (`border-t` or `border-b` lines in a neutral color) to clearly separate each Q&A. Or use Tailwind's `divide-y divide-gray-200` on the container to automatically put dividers between items.

    -   The trigger text could have an icon (like a "+"/"-" or arrow) indicating expandable content (Shadcn's AccordionTrigger typically includes an arrow icon by default). Ensure that icon is visible and rotates when expanded (again, handled by Shadcn UI if using it).

    -   Maintain a consistent margin/padding scheme: for example, each AccordionContent could have a bit of top padding (`pt-2`) so the text isn't crammed under the trigger, and triggers could have `py-3` for touch area.

    -   Font and color should match the site -- likely black or dark gray text on white background. If the section background is white, this is straightforward. If you wanted to differentiate this section slightly, you could use a very light background tint on the whole section (e.g., `bg-gray-50`), but since we already have colored backgrounds for Pricing and perhaps CTA, you may keep this one white to not overdo it.

    -   Copy Editing:** As noted, keep the founder's tone. If the founder's writing is casual (using "you" or "we"), preserve that, just trim any unnecessary words. The result should read as four succinct problems and answers, which effectively communicate "I understand your pain points and I have solutions."

5\. **FAQs -- Frequently Asked Questions (Accordion)**
-----------------------------------------------------

The FAQ section will address common questions in a classic Q&A accordion format. We need to implement it so that all answers are hidden initially, letting users click on the questions they care about. Content is in documentation/content lines 71-91.

-   **Component & Layout:** Create `FaqSection.tsx` and add the `<section className="py-16 md:py-32">` wrapper. You can include a heading for FAQs if desired -- e.g., `<h2>FAQs</h2>` -- or simply start the accordion if a heading already exists in another part of the page (depending on design). Likely a simple "FAQs" title centered above the list would be clear. Use a similar style to other section headings. If the design is minimalist, even just a line of text like "**FAQ**" or "**Common Questions**" could suffice.

-   **Accordion Implementation:** Use the Accordion component again for the list of questions and answers. Since the prompt explicitly says all answers should be **collapsed by default**, set this Accordion with no default open items. You can use `type="single"` (so only one FAQ opens at a time) which is common for FAQ sections, or `type="multiple"` if you want to allow opening many. Using `type="single"` with `collapsible` (to allow closing the last open) might be slightly nicer here, to ensure a cleaner view -- only one answer visible at once. This is a design choice; the prompt doesn't forbid multiple open, just says initial state is all closed.

    -   To implement this, you can simply not pass a `defaultValue` (Radix Accordion will then start with nothing open), or explicitly set `defaultValue={undefined}`. That covers both mobile and desktop (we *do not* auto-expand on desktop here).

    -   If using `type="single"`, give each AccordionItem a unique `value` and the Accordion a `defaultValue=""` (empty string or undefined) so none start open.

-   **Content Population:** **Use the exact FAQ copy provided** -- do not rewrite the questions or answers. Populate each `<AccordionItem>` such that:

    -   `<AccordionTrigger>` contains the question text (e.g., "How long does a project take?"). Ensure the entire question is visible (if it's long, it should wrap to multiple lines gracefully). Style the question text in a bold or medium weight to indicate it's a clickable question. It can likely use the same style as the pain point triggers, maybe a bit smaller if those were large -- e.g., use a normal body font size or slightly larger (since FAQ questions can be a bit longer than section headings, you don't want them too large).

    -   `<AccordionContent>` contains the answer text. These answers might be a bit longer than the pain point solutions, possibly a paragraph each. Since the instruction is to keep styling minimal, just render them as plain text (maybe as one or two `<p>` tags if the answer has multiple sentences). Preserve all wording and formatting (if the user included line breaks or lists in an answer, replicate that). You might need to add some custom JSX if an answer included bullet points -- in that case, format accordingly with `<ul>` etc., but likely they are just text.

    -   If the FAQ answers contain any emphasis (like *italic* or **bold** text in the source), use corresponding tags to maintain that.

-   **Styling & Spacing:** Keep the FAQ accordion clean:

    -   Use neutral styling similar to above accordions. Possibly use `divide-y` to put thin dividers between FAQ items to separate questions visually.

    -   Give the questions some padding (`py-3` or `py-4`) so they're easy to tap. The answers can have a smaller padding top (`pt-2`) when revealed.

    -   By default, Shadcn accordion may not include an arrow icon on triggers; if it doesn't, consider adding a simple `+` / `-` icon that toggles, or a right-chevron that rotates on open. This helps indicate the collapsible nature. Shadcn's library often provides an `<AccordionTrigger>` that already has an icon caret -- verify if that's the case. If not, you could manually add an icon (using Heroicons or similar) inside the trigger and rotate it via CSS on open (Radix adds an `data-state=open` attribute when expanded).

    -   The FAQ section should use the same background as the rest of the page (likely white) unless decided otherwise. Given we have other sections with special backgrounds, leaving FAQ on white is perfectly fine to maintain a clean look.

-   **Mobile Usability:** Ensure that tapping a question expands its answer smoothly. If using Radix, this will be handled (it animates the height). Test that scrolling is not an issue (e.g., if an answer is long and a user opens a second question, it should not overlap content off-screen). With `type="single"`, opening a new question will collapse the previous, which keeps the UI from growing too tall -- a good thing on mobile. If multiple can open, just be mindful that the page can become long if a user opens all; not necessarily a problem, just test that it doesn't break layout. All text should be readable on small screens (Tailwind's responsive text classes can shrink it if needed, but normal base font usually is fine for paragraphs on mobile).

6\. **Final Call to Action (CTA) -- "Ready to launch in weeks?"**
----------------------------------------------------------------

The last section is a strong call-to-action encouraging the visitor to take the next step. It will feature a bold prompt, a bit of supporting text, and two side-by-side buttons. We'll also add an abstract image accent here to make it eye-catching. This section should visually stand out as the culmination of the page. Content is in documentation/content lines 95-99.

-   **Component & Layout:** Create `FinalCtaSection.tsx` with the usual `<section className="py-16 md:py-32">`. To make this section distinct, consider using a subtle background tint with #FCF8F4 (the approved background color) -- just enough to differentiate it from plain white.

    -   Inside the section, have a container (centered div) to hold the text and buttons, similar to other sections (e.g., `max-w-xl mx-auto text-center px-4`). Center alignment is recommended here to give a sense of focus on the CTA.

-   **Content:** Use the provided CTA text from the content file. The heading is **"Ready to launch in weeks?"** and the supporting text is the full paragraph from lines 95-99 starting with "Let's chat, see if we're the right fit...". Use it exactly as given.

    -   Render the main question as a prominent headline. Possibly use an `<h2>` or `<h1>` style for this final call. Apply a larger font size, e.g. `text-2xl md:text-4xl`, and a bold weight. You want this line to be very clear and attention-grabbing.

    -   Place the supporting copy just below the headline as a normal paragraph. Use the full text from the content file. Use a slightly larger than normal font (maybe `text-lg`) to make it easily readable, and maintain a friendly, encouraging tone.

-   **Buttons:** Below the text, include the two side-by-side buttons: **"Book your call"** and **"See live examples"**.

    -   Markup: If using a Button component from the template, create two `<Button>` elements. Otherwise, use `<a>` or `<button>` styled with Tailwind. These should be displayed inline on desktop and stacked on mobile.

    -   Layout classes: Wrap them in a flex container: `<div className="flex flex-col md:flex-row justify-center gap-4 mt-6">`. This will stack them on small screens (one on top of the other with some gap) and place them side by side centered on md+ screens with a gap between.

    -   **"Book your call"**: This is the primary CTA, so style it as a primary button. Likely a solid fill color. Link to: https://cal.com/charlieellington/zebra-call (opens in same tab for booking flow).

    -   **"See live examples"**: Style this as a secondary button. Perhaps an outlined style or a less emphasized color. Link to: `#recent-builds` to scroll to the Recent Builds section.

    -   Both buttons should have hover and focus states. Also ensure proper `cursor: pointer` and accessible labels.

-   **Abstract Image Accent:** Add a dynamic abstract image to this CTA section for visual interest. Select an image that conveys energy and action:

    -   Consider using a more dynamic/flowing abstract image for this action-oriented section
    -   Position as a background element or floating accent with `opacity-40`
    -   Ensure it adds visual interest without overwhelming the text
    -   Consider responsive positioning (different placement on mobile vs desktop)

-   **Visual Emphasis:** This CTA section should be very noticeable. Using a combination of the above (a bit of background tint, the abstract image, big bold text, prominent buttons) will ensure it stands out. Yet, stick to the minimalist vibe: the design should not suddenly become overly flashy. The abstract image is modern and fits the tech aesthetic, and the background tint is subtle. The typography and spacing being consistent with prior sections will keep it looking like part of the same site.

-   **Finishing Touches:** Make sure the spacing around elements (headline, subtext, buttons) is balanced. On mobile, check that the buttons stack nicely and the text doesn't overflow. Everything should be center-aligned and easy to read without zooming.

Performance Optimizations & Final Checks
----------------------------------------

-   **Image Optimization:** Since we're using static abstract images instead of Vanta animations:
    - Ensure all abstract images are properly optimized (consider using Next.js Image component with proper sizing)
    - Use lazy loading for images that aren't immediately visible
    - Consider serving different image sizes for different screen sizes
    - The abstract PNGs are quite large (7-9MB each), so they should be optimized before use

-   **Testing:** After implementing, thoroughly test all sections:

    -   **Responsive check:** Confirm each section looks good on a small smartphone screen up to a large desktop. Pay attention to the accordion behavior: on mobile, the Launch and Pain Points sections should start collapsed -- test tapping each item. On desktop, verify they start expanded (for those two sections) and that doesn't break the layout. Also ensure the FAQ is collapsed on both.

    -   **Content verification:** Make sure all provided text is correctly inserted from the documentation/content file. Especially double-check that the Pricing text and FAQ text match exactly what the user provided (since those should not be altered).

    -   **Styling consistency:** Compare with earlier sections of the page. The spacing above and below each new section should match that of the Recent Builds section (py-16 md:py-32 ensures that). Headings should visually align with other headings. Lists and paragraphs should use the same font sizes. This consistency gives a polished feel.

    -   **Links and Buttons:** Click the "Pricing Calculations" link -- it should navigate to the pricing page anchor correctly. Click "Book your call" and "See live examples" -- ensure they go where expected (if those links aren't live yet, just ensure the placeholders are correct).

    -   **Image performance:** Verify that abstract images load quickly and don't cause layout shift. Test on a throttled network to ensure acceptable performance.

By following this plan, you will extend the one-page site with rich content sections that feel cohesive and professional. Each block reuses the template's structure and keeps the design simple and bold, in line with the founder's style. Once implemented, these additions will guide users from understanding the process and value (launch steps, audience, pricing) through handling objections (pain points, FAQs) to a compelling call-to-action -- all within a fast, responsive experience.

## Information Needed for Confident Execution

✅ **All questions have been answered:**

1. **Button Links**: 
   - "Book your call" → https://cal.com/charlieellington/zebra-call
   - "Pricing Calculations" → /pricing

2. **Abstract Image Selection**:
   - Make selections based on content fit and responsive best practices
   - Use structured images for business sections, dynamic images for action sections

3. **Accordion Component**:
   - Check first, then install if needed: `npx shadcn@latest add accordion`

4. **Color Palette**:
   - #FCF8F4 for background tints only
   - #E7BDD7 and #CDCBFF for icon/text highlights only

**Ready for implementation following the sub-steps outlined above.**