## Background & Motivation
Building the Zebra Design one-page portfolio site using the Lume Studio Next.js template. Zebra Design helps founders and teams launch digital products—designed and coded—faster than thought possible. The site will showcase the Design-as-a-Service model with a single-page layout and separate Pricing page. The goal is to efficiently create a high-quality front-end by reusing template components and minimizing bugs.

## Key Challenges
1. **Template Cleanup**: Remove unnecessary sections (Team, Testimonials, Portfolio, Contact) while preserving reusable components
2. **Branding Updates**: Replace all Lume Studio references with Zebra Design branding
3. **Theme Customization**: Implement monochromatic theme with light background and dark text
4. **Navigation**: Convert multi-page navigation to smooth-scrolling one-page layout
5. **Component Reuse**: Maximize use of existing template components to avoid reinventing the wheel

## High-level Task Breakdown
### Phase 1: Environment Setup and Repository Fork
- Create new GitHub repository for Zebra Design project
- Fork the Lume Studio template from https://github.com/haramishra/lume-studio-next
- Set up development environment with Node.js 18+ and pnpm
- Verify tech stack (Next.js App Router, Tailwind CSS, Shadcn UI)
- Create feature branch for development

### Phase 2: Initial Cleanup and Branding Updates  
- Remove unneeded pages/sections from template
- Update all branding to Zebra Design
- Implement brand color scheme:
  - White background with #FCF8F4 card highlights
  - Text colors: #2A2A2D (headers), #494868 (secondary), #121212 (body)
  - Accent colors: #CDCBFF (purple), #E7BDD7 (pink), #FDA7A0 (coral)
- Configure one-page navigation with smooth scrolling
- Create Pricing page stub

## Project Status Board
### Phase 1: Environment Setup
- [ ] Create new GitHub repository for Zebra Design
- [ ] Fork the Lume Studio template from https://github.com/haramishra/lume-studio-next
- [ ] Clone and merge template into new repository
- [ ] Install dependencies and verify configuration
- [ ] Test development server
- [ ] Create zebra-site branch

### Phase 2: Initial Cleanup and Branding
- [ ] Remove unneeded sections
- [ ] Update branding throughout site
- [ ] Set up color scheme and typography
- [ ] Configure navigation for one-page layout
- [ ] Create Pricing page
- [ ] Test and commit changes

## Lessons
- CONTRIBUTING.md defines core principles, roles, workflow, coding etiquette, secret handling, and project folder separation.
- The assistant treats the CONTRIBUTING.md rules as persistent top-of-mind guidance and ensures responses comply, even if the file is not reread verbatim each time.
- step1-setup.md provides comprehensive instructions for the initial setup phases
- Zebra Design brand colors: White/#FCF8F4 backgrounds, #2A2A2D/#494868/#121212 text hierarchy, #CDCBFF/#E7BDD7/#FDA7A0 accents
- Template source should be https://github.com/haramishra/lume-studio-next
- Meta title: "Zebra Design — Designers That Code with AI"
- Meta description: "I help you launch a digital product—designed and coded—faster than you thought possible. Idea → tested product in weeks, not months. Design-as-a-Service for startup founders, SMEs, and product teams."

## Executor's Feedback or Assistance Requests
Ready to begin Phase 1 implementation. The setup document is well-detailed and provides clear step-by-step instructions.

Note: The current local project appears to be from a different repository (kohistudio/lume-studio-template) than the one referenced in the documentation. The plan has been updated to use the correct source: https://github.com/haramishra/lume-studio-next
