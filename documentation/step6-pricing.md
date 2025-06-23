Great -- I'll create a developer-ready build plan for the pricing page on the Zebra site. It will clearly explain your base pricing and usage-based charges, use value-based examples (as cards/tables), embed the Agile 'Money for Nothing' principle in the flow, and follow best practices for layout, UX, and content clarity. I'll keep your solo voice and tone throughout. I'll let you know once it's ready.

Zebra Design Pricing Page -- Developer Build Plan
================================================

## Pricing Information (Confirmed)
- **Monthly Subscription Base Rate**: €5,000/month (minimum)
- **Workshop Session**: €400 per one-day workshop (fixed fee)
- **Extra Calls**: €150/hour (for consulting beyond standard cadence)
- **User Testing**: €1,000 per session (includes 5-6 users 1:1 testing, report and workshop with results)
- **Minimal Wrap-Up Fee**: 20% of remaining unused time on a one-year contract
  - Example: Client on €5,000/month, uses one month, cancels = 20% × €5,000 × 11 months = €11,000 cancellation fee

## Implementation Decisions
- **Visual Assets**: No abstract graphics needed for hero section at this time
- **Icons**: Use best-fitting Lucide icons for add-ons section
- **Value Calculations**: Use specific metrics that directly affect revenue and measurable value
- **Money for Nothing Section**: Always visible (not accordion) with link to agile source
- **Technical**: Build on existing /pricing page, Cal.com link confirmed as https://cal.com/charlieellington/zebra-call

1\. Subscription Model Overview (Base Plan)
-------------------------------------------

Start with a clear **hero section** introducing the simple monthly subscription. Use a concise heading (e.g. **"One Monthly Fee, All-Inclusive Design"**) and a brief paragraph in **first-person voice** to set a personal, minimalist tone. For example: *"I work on a flat monthly subscription. One fee covers all design and build work -- no hourly bills, no surprises. Starting at €5,000/month."* Keep sentences short and clear (Hemingway style).

The color scheme should align with Zebra's branding -- white background with the off-white **#FCF8F4** as needed for highlights, and brand accent colors for any text emphasis.

**Implementation:** Mark this as a distinct `<section>` (or React component) with an `h1` for the page title (for accessibility). Use Tailwind utility classes consistent with the design system (e.g. padding, max-w for text). If using a background image or SVG, apply via CSS or an `<Image>` component with appropriate `alt` text. **Mobile-first:** Stack image above or hide it, and center the text. **Test:** Verify the heading and intro text are easily readable on all screen sizes and the image does not overflow or slow down load. Ensure this overview conveys the base subscription model at a glance.

2\. Value-Based Pricing Explanation
-----------------------------------

Next, add a short section explaining **how pricing is tied to outcomes** rather than hours. Continue the first-person, conversational tone to maintain a personal feel. For example: *"My pricing isn't about hours worked. It's about outcomes. We'll define the results that matter -- like a successful launch or a boost in conversions -- and your subscription covers whatever it takes to get there."* This reinforces that the client is paying for **value delivered** each month, not time, aligning incentives with their success.

Keep this explanation concise (2-3 sentences or bullet points) and **emphasize the benefits**: the client's budget directly results in measurable progress. You might highlight key phrases in bold (e.g. **"pay for results, not hours"**) for scannability.

**Implementation:** This content can be a simple text block (paragraph or a short unordered list of points) immediately following the overview. No special interactive elements are needed -- just ensure it's visually separated (e.g. margin-top or a subtle divider) so it forms its own idea. Use the site's body text style and perhaps a slightly different tone weight for emphasis on "value-based outcomes." **Responsive:** Standard text flows naturally on all screens. **Test:** Read it aloud to ensure the tone matches Charlie's style and that the message is clear in a few seconds of scanning. On mobile, verify the text isn't too long or broken awkwardly.

3\. Value Calculation Examples (Outcome-Based Scenarios)
--------------------------------------------------------

Provide **three concrete examples** of how value-based pricing works, using a card-based layout for clarity. Each example should illustrate an outcome, the value it creates for the client, and how it relates to the monthly subscription. Keep each example short (a title plus one or two sentences), written in first-person/second-person to maintain a personal touch. For instance:

-   **Example 1 -- Launch in Weeks:** *"Launch your MVP in 4 weeks. Your €5,000 investment gets a functioning product generating revenue. Outcome: If you charge €50/month and get 200 users, that's €10,000/month -- 2x ROI from month one."* (Shows concrete revenue generation from a one-month subscription.)

-   **Example 2 -- Boost Conversions:** *"Redesign your checkout flow to boost conversions by 25%. On €100,000 monthly revenue, that's €25,000 extra per month. Outcome: A single month's €5,000 fee returns 5x monthly, forever."* (Illustrates measurable ROI: specific percentage improvement yields ongoing revenue increase.)

-   **Example 3 -- Reduce Churn:** *"Fix onboarding to cut churn from 15% to 10%. With 1,000 users at €30/month, you save €1,500/month. Outcome: The improvement pays for itself in under 4 months, then pure profit."* (Shows how reducing churn creates compound value over time.)

Present these examples as **cards** in a responsive grid. Use the existing Card component from the design system (Shadcn UI) to ensure consistent styling. Each card can have a short header (outcome title) and a brief description. The cards should use the brand's light cream background **(#FCF8F4)** and perhaps an icon or small graphic if available (e.g. a rocket icon for launch, an upward graph for conversion, a compass for pivot) to enhance visual appeal, using brand accent colors for icons.

**Layout:** On mobile, stack the cards vertically for easy reading (one card per row). On larger screens, display them in columns (e.g. three across on desktop) with adequate gap (`gap-4` or `gap-6`). Ensure each card is of equal width/height for a tidy row on desktop. **Interaction:** The cards are primarily informational, so they need not be clickable; however, you can add a subtle hover effect (like a slight lift or shadow) on desktop to align with the site's interactive style (e.g. a 5% scale-up on hover as used elsewhere). **Test:** Check that each card's content is readable and the examples are understandable at a glance. Verify the grid breaks into a single column on small screens. Test the hover effect performance (no jank or layout shift). Confirm that the examples indeed communicate the *value vs cost* point without needing additional explanation.

4\. Usage-Based Add-Ons (Workshops, Calls, Testing)
---------------------------------------------------

After the core examples, clearly list the **additional usage-based services** that are not covered by the base subscription, using the same card style for consistency. This section ensures clients know about extra offerings and their costs upfront. Create a trio of small cards (or a horizontal list) for the three items: **Workshops**, **Calls**, and **User Testing**. For each, include a title and a one-sentence description with the fee structure:

-   **Workshops:** *"Deep-dive strategy or design workshops on demand -- €400 per one-day session."* Explain that extended collaborative sessions with their team are available as add-ons at this fixed rate.

-   **Extra Calls:** *"Need more hands-on time? Additional consulting calls beyond the usual cadence -- €150/hour."* Clarify that routine check-ins are included in the subscription, but extra lengthy calls or meetings beyond what's standard are billed hourly. Keep the tone friendly: it's an option, not a penalty.

-   **User Testing:** *"Professional user testing sessions -- €1,000 per session."* Convey that each session includes 5-6 users for 1:1 testing, plus a comprehensive report and results workshop. The fee covers recruiting, incentives, and full analysis.

Use Lucide icons to enhance recognition (for example, a Presentation icon for workshops, a Phone or Video icon for calls, and a Users or FlaskConical icon for user testing). Each card should use the same styling as earlier: cream background (#FCF8F4), concise text, with the **price in bold** to ensure pricing is immediately visible.

**Layout:** Similar responsive approach -- on mobile, stack these cards; on desktop, they could appear in one row of three if space allows, or as a 3-column grid. They might even be presented as a sub-section within a wider pricing table, but cards keep it consistent with the rest of the design. **Test:** Verify each add-on card is easy to scan: the service name should be immediately visible and the cost structure obvious. Check that on small screens the cards don't overflow and that the text wraps properly (especially if including currency values). Also test that the presence of these extra items doesn't overwhelm the page -- they should be visibly secondary to the main subscription model (you could achieve this by slightly smaller text or a subtler color on these cards, while keeping the main background consistent).

5\. "Money for Nothing" Agile Principle (Embedded Explanation)
--------------------------------------------------------------

Include a dedicated section explaining the Agile **"Money for Nothing" principle** and how it benefits the client. Break this down into a **step-by-step list** to clearly communicate each aspect of the policy. A numbered list works well here. For example:

1.  **Outcome Planning:** *We plan work in short cycles focused on your highest-value outcomes.* (Upfront, the client knows what we aim to achieve in the next period, ensuring transparency.)

2.  **Cancel Anytime:** *If you're not seeing the value or your priorities change, you can cancel the subscription at the end of any cycle (e.g. monthly) with no further commitment.* (Reiterate that there's no long-term lock-in -- the client has control to stop if needed.)

3.  **Small Wrap-Up Fee:** *Should you decide to cancel, you only pay a minimal wrap-up fee to cover final handoffs -- no large penalties.* (This is the "money for nothing" part: if the project ends early, the provider gets a small compensation for reserve capacity, but the client isn't stuck paying for unused months.)

4.  **Shared Incentive:** *This keeps me motivated to deliver value fast, and you never pay for work that isn't useful -- we both win.* (Emphasize the benefit: the client can trust that you will always focus on delivering tangible results quickly, since their option to cancel keeps everyone accountable.)

Use clear, **short sentences** for each point to maintain the Hemingway clarity, and frame benefits directly to the client ("you can cancel... you never pay for unused work"). The tone should remain reassuring and transparent. It may help to bold key concepts like **"cancel anytime"** or **"minimal fee"** for quick scanning.

For the presentation, consider using an accordion or disclosure widget only if the content is long -- in this case the list is fairly short and crucial, so it's best shown expanded by default. However, if you think it clutters the page, you could encapsulate it under a question-like subtitle (e.g. *"What is 'Money for Nothing'?"* as a toggle). Given current UX best practices, simply displaying the steps is likely fine, as it invites trust through transparency.

**Implementation:** This can be a `<section>` with a subheading like **"No Lock-In: The Money-for-Nothing Guarantee"** followed by the `<ol>` list of steps. Style the list with clear numbering and a bit of left padding. If using an accordion component (from Shadcn UI or similar), ensure it's accessible (keyboard/tab friendly) and that it loads quickly -- but again, an accordion may not be necessary here. **Responsive:** Lists naturally reflow on mobile; just ensure any indent is not too large on small screens. **Test:** Read through the steps as if you were a client seeing them -- do they make you feel reassured about flexibility and fairness? Verify the steps are in logical order and cover all critical points of the principle. Also test any interactive toggle (if used) for smoothness and that state persists as expected on page navigation.

6\. Flexibility & Cancellation Summary (Conclusion)
---------------------------------------------------

End the page with a brief **summary section** that reinforces the flexibility and lack of risk in simple terms. This is the closing reassurance, so keep it friendly and straightforward. For example, a short paragraph: *"**Bottom line:** You're never locked in. If you need to pause or stop, you can -- no long contracts. I'll wrap up any work in progress with a tiny final fee, and you're free. This model is 100% flexible to your needs."* This reiterates the core points: **flexibility, cancel anytime, and only a small wrap-up cost** -- encapsulated in one or two sentences that a reader can easily remember.

Maintain the first-person tone ("I'll wrap up any work...") to personalize the commitment. Avoid any new information here; it should echo what was detailed above, but in an even **simpler, warmer tone**. The goal is to leave the reader feeling confident that they can try this service without heavy obligations.

Optionally, you can pair this summary with a call-to-action, like a final **"Let's Chat"** or **"Book Intro Call"** button, to convert their positive impression into action -- since after reading pricing, the next step is often to get in touch. If you include a CTA, use the same style as the primary CTA on the main page (for consistency) and ensure it's prominently placed (perhaps centered below the summary text). Link it to the booking link (Cal.com) already used on the site.

**Implementation:** Wrap this up in a distinct `<section>` or a footer-style block. You might style the text slightly larger or italicize it to denote a concluding statement, or even put it in a subtle highlighted box to ensure it stands out. However, given the minimalist design approach, simply centering the text and using a friendly tone may suffice. If adding a CTA button, that can be a `<Button>` component with proper styling (e.g. primary color background). **Mobile-first:** Ensure the text wraps well on small screens (avoid a long run-on sentence). The CTA button should be full-width or large enough on mobile for easy tapping, with appropriate margin. **Test:** Check that this final message is highly readable and leaves no ambiguity. It should align with the content strategy (clear, no fluff) and not introduce any contradictions. If there's a CTA, test that the link works and that the button is visible (not cut off at the bottom on certain devices). Also verify that the spacing above this section distinguishes it as the conclusion of the page.

7\. General UX & Development Considerations
-------------------------------------------

-   **Consistent Styling:** Follow the design system used in earlier sections of the site for typography, spacing, and colors. Use the brand text colors for headings and body text (e.g. #2A2A2D for headers, #121212 for body) to match the established hierarchy. All new elements (cards, buttons, icons) should reuse existing Tailwind classes or component styles to maintain visual consistency.

-   **Mobile-First, Responsive Design:** Build the layout mobile-first, then enhance for larger screens. This means using a single-column flow by default and adding media breakpoints (sm, md, lg in Tailwind) for grids and side-by-side layouts. Verify that content sections stack logically on small screens (e.g. the overview image moves above text or is hidden, cards stack vertically with clear separation, list items have proper padding on the left on mobile, etc.). Use appropriate breakpoints so that on tablets or small laptops the layout still looks good (possibly 2-column card layouts on medium width).

-   **Performance:** Keep the page lightweight. Avoid large images; if using an abstract visual, consider an SVG or compressed image. Leverage Next.js lazy loading for images below the fold if applicable. No heavy scripts should be needed on this page; but if you include interactive components (accordions, tooltips), import them dynamically to reduce initial load. The summary document noted prior issues with heavy animations, so stick to static or CSS-based effects for now for a snappy experience.

-   **Accessibility:** Use semantic HTML -- headings in logical order (the page title as H1, section titles as H2, etc.), lists for the step-by-step explanation, and descriptive text for any icons or images (aria-label or alt attributes). Ensure color choices meet contrast standards against the background (the provided palette should, but double-check text on #FCF8F4 or any colored backgrounds). Also, if any interactive element (like an accordion) is used, ensure it's keyboard accessible (can be opened via Enter/Space and focusable).

-   **Testing Each Block:** Develop each section as a modular component so it can be tested independently. For example, create components like `<PricingIntro>`, `<ValueExamples>`, `<AddOnCards>`, `<MoneyForNothingFAQ>`, etc. This allows you to render each in isolation (e.g. in Storybook or a test page) to verify styling and behavior. After implementing each, test it in the browser:

    -   *Content check:* Does it include all key points from the draft? (Compare with Charlie's draft to ensure no pricing detail was lost.)

    -   *Design check:* Does it match the intended minimalist style and align with the rest of the site's look and feel?

    -   *Responsiveness check:* Shrink and expand the viewport to see that layout adjustments occur as expected.

    -   *Cross-browser:* Quick check in a couple of browsers (Chrome, Safari, mobile emulator) to catch any flexbox or overflow quirks.

-   **Integration:** Once all sections are built and tested individually, assemble them in the `/pricing` page route (or equivalent) in the correct order. Make sure the site header navigation includes a **Pricing** link (it was likely stubbed already) that navigates to this page, and highlight it when on this page for context. Test the navigation flow: from the home page "Pricing" link to this page, and back (ensure smooth scrolling on home doesn't interfere when returning).

-   **Future Enhancements:** Note that the summary mentioned a potential **pricing calculator** tool on this page as a future update. The current plan is static content; however, consider structuring your code in a way that a dynamic calculator (perhaps an interactive form to estimate costs based on selected options) could be added without a complete rewrite. For now, focus on delivering the static content flawlessly, but keep the code modular and clean for easy expansion.

-   **Content Verification:** Before deploying, double-check all figures and terms with Charlie's provided draft to ensure accuracy. The tone should remain personal and confident throughout -- if any section feels verbose or off-tone, simplify the language (e.g. break up sentences, use active voice "I do X").

-   **Final Review:** Conduct a final pass with everything together. The page flow should make sense: a visitor should grasp the base offering, understand how pricing is determined, see concrete examples, know about extras, and feel reassured by the flexibility -- all within a few scrolls. This matches best UX practices for agency/solo-founder sites: upfront clarity, proof of value, and removal of fear (no lock-in) all in one page. If anything feels out of order or too heavy, adjust spacing or consider splitting text into more digestible chunks (e.g. use bullet lists or line breaks to avoid walls of text). Once it looks great and reads well on both desktop and mobile, the Pricing page is ready to go live.