# Premium Developer Portfolio --- Master Design & Build Specification

> **Purpose:** Use this file as the single source-of-truth prompt for
> Antigravity or any AI website builder.
>
> **Goal:** Build a production-quality, premium personal developer
> portfolio that feels modern, confident, technical, and human --- not
> like a generic template. Prioritize visual hierarchy, real project
> credibility, excellent responsiveness, accessibility, performance, and
> purposeful motion.

------------------------------------------------------------------------

# 1. Product Vision

Create a **single-page premium developer portfolio** with a strong first
impression and clear conversion path.

The visual direction combines:

-   Premium dark-teal/cyber aesthetic
-   Glassmorphism used selectively
-   Large editorial-style typography
-   Floating layered UI
-   Soft cyan/teal glow
-   Subtle technical background grid
-   Rounded/pill UI language
-   High-quality project presentation
-   Dark/light theme support
-   Smooth Framer Motion interactions
-   Strong mobile experience

The website should communicate:

> **This is a serious developer who builds real, production-oriented
> digital systems.**

Avoid:

-   Generic portfolio templates
-   Excessive gradients
-   Excessive neon
-   Huge amounts of text
-   Random decorative blobs
-   Over-animated sections
-   Fake statistics
-   Fake testimonials
-   Stock-looking developer illustrations
-   Unnecessary 3D effects
-   Mixing unrelated accent colors

**Design principle:** premium through restraint.

------------------------------------------------------------------------

# 2. Primary Technology

Use this stack unless the environment requires an equivalent:

-   **Next.js + React**
-   **TypeScript**
-   **Tailwind CSS**
-   **Framer Motion**
-   **Lucide React**
-   **next/font**
-   CSS variables for theme tokens

Preferred architecture:

``` text
app/
components/
sections/
data/
lib/
public/
styles/
```

Build reusable components instead of putting the entire page into one
component.

------------------------------------------------------------------------

# 3. Theme System

Implement a complete dark/light theme using CSS variables.

Persist the user's choice in `localStorage`.

On first visit:

1.  Detect the user's system preference.
2.  Use system preference if available.
3.  Allow manual override.
4.  Persist the manual choice.

Use:

``` html
<html data-theme="dark">
```

or an equivalent class-based system.

## Dark Theme --- Default

``` css
--bg-primary: #0a1414;
--bg-secondary: #0f1f1f;
--text-primary: #f5f7f7;
--text-secondary: #9db3b3;

--accent: #22d3ee;
--accent-2: #06b6d4;

--accent-gradient: linear-gradient(
  135deg,
  #5eead4,
  #22d3ee
);

--border: rgba(255,255,255,0.08);
--glass-bg: rgba(255,255,255,0.04);
```

Additional subtle background glow may use the same cyan/teal family at
very low opacity.

## Light Theme

``` css
--bg-primary: #eef6f6;
--bg-secondary: #ffffff;
--text-primary: #0f1f1f;
--text-secondary: #4b5f5f;

--accent: #0891b2;

--accent-gradient: linear-gradient(
  135deg,
  #14b8a6,
  #0891b2
);

--border: rgba(0,0,0,0.08);
--glass-bg: rgba(255,255,255,0.6);
```

## Color Rules

-   Use **one accent family** throughout the page.
-   Do not mix cyan + purple + blue + pink.
-   Accent should be intentional, not everywhere.
-   Use accent primarily for:
    -   Hero highlight
    -   CTA buttons
    -   Links
    -   Hover states
    -   Icons
    -   Status indicators
    -   Important statistics
-   Maintain WCAG AA contrast.
-   Never sacrifice readability for visual effects.

------------------------------------------------------------------------

# 4. Typography

Use a premium modern sans-serif.

Preferred:

-   Inter
-   Space Grotesk
-   Manrope
-   Plus Jakarta Sans

Use JetBrains Mono or Space Mono for technical labels.

## Hero Typography

Hero heading should be extremely strong:

``` css
font-size: clamp(2.75rem, 7vw, 5.5rem);
font-weight: 800;
line-height: 0.95–1.05;
letter-spacing: -0.02em;
```

Use 2--3 visual lines depending on viewport.

Example structure:

``` text
I build digital
systems that think.
```

The exact wording must come from the portfolio content rather than being
blindly copied.

Highlight only the most important phrase with the accent gradient.

## Body

-   16--18px
-   400--500 weight
-   line-height around 1.6
-   muted secondary color

## Technical Labels

Use monospace for:

``` text
FULL-STACK / AI / DEVOPS
01 — ABOUT
02 — PROJECTS
03 — SKILLS
04 — CONTACT
```

------------------------------------------------------------------------

# 5. Global Layout

Use a centered responsive container:

``` text
max-width: 1280–1440px
```

Desktop:

-   generous whitespace
-   96--140px section spacing

Mobile:

-   56--72px section spacing

Do not make every section visually identical.

Create rhythm by alternating:

-   large whitespace
-   glass panels
-   project cards
-   typography-focused sections
-   subtle dividers

------------------------------------------------------------------------

# 6. Background System

The background should feel technical but remain subtle.

Use:

-   deep teal-black background
-   extremely low-opacity grid
-   radial cyan glow behind important areas
-   subtle noise/grain only if it improves the result

Example grid concept:

``` css
background-image:
  linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
  linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
background-size: 40px 40px;
```

Rules:

-   Grid must never compete with text.
-   Reduce or hide the grid on very small screens if it affects
    performance.
-   Avoid giant bright background gradients.

------------------------------------------------------------------------

# 7. Navbar

Create a **floating pill-shaped sticky navbar**.

Desktop structure:

``` text
[Logo / Wordmark]     About Projects Skills Contact     [Let's Talk] [Theme]
```

Requirements:

-   Centered within page
-   Rounded pill
-   Glassmorphism
-   Sticky
-   High z-index
-   Slightly smaller after scrolling
-   Smooth blur/shadow transition
-   Active section indication if practical

Initial state:

-   transparent/subtle

After approximately 40px scroll:

-   glass background
-   backdrop blur
-   subtle border
-   subtle shadow

Use Lucide icons for:

-   theme toggle
-   menu
-   arrow
-   external link
-   etc.

Mobile:

-   logo left
-   theme toggle
-   hamburger right
-   animated slide/fade navigation panel

Use `AnimatePresence`.

------------------------------------------------------------------------

# 8. Hero --- Highest Priority

The hero is the most important section.

It should immediately communicate:

1.  Who the developer is
2.  What they build
3.  Their technical direction
4.  How to explore their work
5.  How to contact them

Desktop layout:

``` text
-------------------------------------------------------
|                                                     |
|  STATUS                                             |
|  EYEBROW                       PORTRAIT             |
|                                                     |
|  HUGE HEADLINE                  floating badges     |
|                                                     |
|  SHORT BIO                                          |
|                                                     |
|  [Explore Work] [Let's Talk]                        |
|                                                     |
-------------------------------------------------------
                 STATS
```

## Hero Status Badge

Example:

``` text
● Available for interesting work
```

The status indicator should have a subtle pulse.

Do not claim availability unless it is supplied by the portfolio data.
If unknown, use a neutral status such as:

``` text
● Building & learning
```

## Eyebrow

Example:

``` text
FULL-STACK / AI / DEVOPS
```

Use monospace.

## Headline

Use an oversized 2--3 line headline.

Example direction:

``` text
I build digital
systems that
think.
```

Use accent gradient on the strongest phrase.

## Supporting Copy

Keep it to approximately 1--3 short lines.

It should communicate:

-   developer identity
-   specialization
-   what they build
-   practical value

Do not create exaggerated claims.

## CTA

Primary:

``` text
Explore featured work →
```

Secondary:

``` text
Let's talk →
```

Primary button:

-   accent gradient
-   dark readable text
-   pill
-   subtle glow

Secondary:

-   glass/outline
-   transparent
-   readable in both themes

------------------------------------------------------------------------

# 9. Hero Visual

Use a **real professional portrait** supplied by the user.

Do not generate a fake human portrait.

Shape:

-   rounded blob
-   circular/arched mask
-   soft organic shape

Behind the portrait:

-   subtle cyan glow
-   soft ring
-   optional radial gradient

Around the portrait:

### Floating technology chips

Examples:

``` text
React
Node
Postgres
AI
TypeScript
```

Only show technologies actually used by the developer.

### Location badge

Only show if location information is intentionally included in the
portfolio.

### Currently Building badge

Only show if the project/current activity is supplied.

Each badge:

-   glassmorphic
-   rounded
-   small
-   subtle shadow
-   independent slow float animation

Important:

**Badges must never cover the face.**

------------------------------------------------------------------------

# 10. Hero Stats

Place a clean stat strip below the hero.

Use exactly 3 strong stats where possible.

Examples:

``` text
20+
Projects

12+
Technologies

∞
Always Learning
```

Only use factual numbers supplied by the portfolio content.

Never invent:

-   clients
-   years of experience
-   revenue
-   users
-   project counts
-   company metrics

If reliable numbers are unavailable, use qualitative stats such as:

``` text
Full-Stack
Focus

Production
Projects

Always
Learning
```

Stats should be visually strong but not oversized enough to overpower
the hero.

------------------------------------------------------------------------

# 11. About Section

Keep the About section concise.

Recommended structure:

``` text
02 — ABOUT

[Short professional introduction]

[Technical focus]

[Personal working philosophy]
```

Optional:

-   pull quote
-   small skill summary
-   location
-   current focus

Avoid writing a long autobiography.

Use a two-column desktop layout where useful.

------------------------------------------------------------------------

# 12. Projects Section --- Core Conversion Section

This is one of the most important sections.

Heading example:

``` text
Selected work.
```

Supporting line:

``` text
A selection of systems, products, and experiments I've built.
```

Do not use generic project-card layouts only.

Use a mixture of:

-   featured large project
-   medium cards
-   alternating showcase rows

## Project Card

Each project should include:

-   project screenshot
-   title
-   short description
-   role/contribution if relevant
-   technology tags
-   Live Demo link
-   GitHub/source link where available

Example structure:

``` text
------------------------------------------------
|                                              |
|              PROJECT IMAGE                   |
|                                              |
------------------------------------------------
Project Name

Short one/two sentence explanation.

React · Node.js · PostgreSQL · AI

[Live Demo ↗] [GitHub ↗]
```

## Featured Project

Make the most important project visually larger.

Use:

-   large screenshot
-   stronger typography
-   more detailed description
-   technology chips
-   two links

## Project Interaction

On hover:

-   card lifts 4--6px
-   border becomes slightly brighter
-   image zooms to around 1.05
-   overlay/link affordance appears subtly

Do not make the entire card aggressively animated.

------------------------------------------------------------------------

# 13. Project Data Architecture

Do not hardcode project markup repeatedly.

Use structured data:

``` ts
type Project = {
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
}
```

Render project cards from the data.

This makes future editing easy.

------------------------------------------------------------------------

# 14. Skills Section

Create a premium technical skills section.

Group skills into:

``` text
Frontend
Backend
Database
DevOps / Cloud
AI / Automation
Tools
```

Only include real technologies.

Possible presentation:

-   icon grid
-   compact categorized cards
-   subtle marquee
-   skill chips

Avoid a boring percentage-bar layout.

Never show:

``` text
React — 95%
Node — 90%
```

unless the user explicitly wants self-rated percentages.

Prefer evidence-oriented language:

``` text
React
Used in production projects
```

or simply list the technology.

------------------------------------------------------------------------

# 15. Optional Experience Section

If real experience/internship/work data is supplied, include:

``` text
03 — EXPERIENCE
```

Use a vertical timeline.

Each entry:

``` text
Role
Company
Duration
Location / Remote

2–4 concise responsibility/achievement points
```

Do not invent employment details.

Keep the visual style consistent with the portfolio.

------------------------------------------------------------------------

# 16. Optional Testimonials

Testimonials are optional.

Only include them if real testimonials are supplied.

Never generate fake client quotes.

If no real testimonials exist:

**omit the section entirely.**

------------------------------------------------------------------------

# 17. Contact Section

Create a strong closing CTA.

Example direction:

``` text
Have a project in mind?

Let's build something useful.
```

Include:

-   email
-   GitHub
-   LinkedIn
-   other real social profiles
-   optional contact button

Make the contact section visually distinct using:

-   large typography
-   subtle accent glow
-   glass panel or clean background treatment

Do not create fake email addresses or fake social URLs.

------------------------------------------------------------------------

# 18. Footer

Footer should be minimal.

Include:

-   logo/wordmark
-   navigation
-   social links
-   copyright
-   back-to-top button

Example:

``` text
[Logo]                         About Projects Skills Contact

Built with React · Next.js · Tailwind

© 2026 Name
```

Use the actual current year dynamically.

------------------------------------------------------------------------

# 19. Glassmorphism Rules

Glass effects should be used intentionally.

Dark glass:

``` css
background: rgba(255,255,255,0.04);
backdrop-filter: blur(12px);
border: 1px solid rgba(255,255,255,0.08);
```

Light glass:

``` css
background: rgba(255,255,255,0.6);
backdrop-filter: blur(16px);
border: 1px solid rgba(0,0,0,0.08);
box-shadow: 0 4px 30px rgba(0,0,0,0.05);
```

Use glass for:

-   navbar
-   floating badges
-   selected cards
-   secondary UI panels

Do not turn every section into a glass card.

------------------------------------------------------------------------

# 20. Buttons

All primary buttons should feel tactile.

Shape:

``` css
border-radius: 999px;
```

Approximate padding:

``` text
14px 28px
```

Primary:

-   accent gradient
-   dark readable text
-   glow on hover

Secondary:

-   outline/glass
-   subtle fill on hover

Motion:

``` text
hover: scale 1.03–1.05
tap: scale 0.95
```

Keep transitions around 200--400ms.

------------------------------------------------------------------------

# 21. Animation System

Use **Framer Motion** for React animations.

Animation should communicate hierarchy, not show off.

## Initial Load

Sequence:

1.  Navbar:
    -   `y: -20 → 0`
    -   opacity 0 → 1
    -   \~0.5s
2.  Status/eyebrow:
    -   fade + slight upward movement
    -   \~0.1s delay
3.  Headline:
    -   line-by-line reveal
    -   `y: 30 → 0`
    -   opacity 0 → 1
    -   stagger \~0.12s
4.  Paragraph + CTA:
    -   fade-up
    -   after headline
5.  Hero image:
    -   `scale: 0.92 → 1`
    -   opacity 0 → 1
6.  Floating chips:
    -   small spring/pop
    -   stagger \~0.08s
7.  Stats:
    -   count up only for genuine numeric stats

Do not delay interaction unnecessarily.

------------------------------------------------------------------------

# 22. Scroll Animations

Every major section may use:

``` tsx
whileInView
```

Recommended:

``` text
opacity: 0 → 1
y: 24 → 0
```

Use:

``` text
viewport:
  once: true
  amount: 0.2
```

For grids:

-   stagger children slightly

Do not animate everything simultaneously.

------------------------------------------------------------------------

# 23. Parallax

Optional and subtle.

Use Framer Motion:

-   `useScroll`
-   `useTransform`

Apply mainly to:

-   hero portrait
-   glow
-   floating badges

Movement should be small.

The page must still look excellent if parallax is disabled.

------------------------------------------------------------------------

# 24. Floating Badge Animation

Use independent slow motion:

``` text
y: [0, -8, 0]
duration: 3–5 seconds
ease: easeInOut
repeat: Infinity
```

Use different durations for different chips.

Do not make them bounce aggressively.

------------------------------------------------------------------------

# 25. Hover Micro-interactions

### Navigation

-   subtle color transition
-   animated underline

### Buttons

-   1.03--1.05 scale
-   glow

### Project cards

-   translateY(-4px)
-   border highlight
-   image scale 1.05

### Floating badges

-   y: -5px
-   slight brightness increase

All interactions should feel fast and refined.

------------------------------------------------------------------------

# 26. Accessibility

Required:

-   semantic HTML
-   correct heading hierarchy
-   visible keyboard focus states
-   accessible button labels
-   `aria-label` for icon-only controls
-   meaningful image alt text
-   sufficient color contrast
-   keyboard-accessible navigation
-   mobile menu keyboard support
-   no information conveyed by color alone

Theme toggle must have an accessible label.

------------------------------------------------------------------------

# 27. Responsive Design

Desktop:

-   split hero
-   large typography
-   floating badges
-   generous whitespace

Tablet:

-   reduce hero typography
-   simplify badge positioning
-   preserve hierarchy

Mobile:

-   hero becomes stacked
-   text first
-   portrait below
-   floating badges reposition below/around image
-   never cover the face
-   reduce decorative effects
-   hide or simplify background grid if needed
-   mobile navbar becomes menu
-   project cards become single-column
-   buttons may become full-width where appropriate

Use responsive CSS rather than separate desktop/mobile pages.

------------------------------------------------------------------------

# 28. Performance

Optimize for a fast first impression.

Requirements:

-   use `next/image`
-   correct image dimensions
-   lazy-load below-the-fold images
-   avoid huge background videos
-   minimize unnecessary JavaScript
-   avoid excessive blur/filter effects
-   avoid animation loops that consume significant resources
-   respect `prefers-reduced-motion`

For reduced motion:

``` text
disable/reduce:
- parallax
- floating loops
- large transforms
- unnecessary transitions
```

Content and navigation must remain fully usable.

------------------------------------------------------------------------

# 29. Image Direction

The portrait should be:

-   high resolution
-   professional
-   well cropped
-   visually compatible with dark and light themes

Project images should:

-   show actual product/UI
-   have consistent aspect ratios
-   be sharp
-   use rounded corners
-   avoid excessive decorative frames

If an image is not available, use a clean placeholder state rather than
inventing a fake screenshot.

------------------------------------------------------------------------

# 30. SEO

Implement:

-   meaningful page title
-   meta description
-   Open Graph metadata
-   Twitter/X metadata if applicable
-   canonical URL if known
-   semantic HTML
-   descriptive alt text
-   proper heading hierarchy

Do not invent personal information in metadata.

------------------------------------------------------------------------

# 31. Content Integrity Rules

This is critical.

**Never fabricate portfolio facts.**

Do not invent:

-   years of experience
-   client counts
-   user counts
-   revenue
-   testimonials
-   awards
-   job titles
-   company names
-   project results
-   social links
-   email addresses
-   certifications

When information is missing:

-   use a neutral placeholder
-   or omit the claim
-   or make it easy to replace from the data file

Prefer real evidence from projects over self-promotional claims.

------------------------------------------------------------------------

# 32. Content/Data Separation

Keep personal/project information in a dedicated data file.

Example:

``` ts
export const portfolio = {
  name: "...",
  role: "...",
  eyebrow: "...",
  headline: "...",
  bio: "...",
  email: "...",

  social: {
    github: "...",
    linkedin: "...",
  },

  stats: [],

  projects: [],

  skills: {
    frontend: [],
    backend: [],
    database: [],
    devops: [],
    ai: [],
  }
}
```

The UI should consume this data.

This makes the site easy to update without changing component logic.

------------------------------------------------------------------------

# 33. Component Architecture

Suggested components:

``` text
Navbar
ThemeToggle
MobileMenu
Hero
HeroPortrait
FloatingBadge
StatsStrip
SectionHeading
About
Experience
Projects
FeaturedProject
ProjectCard
Skills
SkillGroup
Contact
Footer
BackToTop
```

Use reusable animation wrappers where useful:

``` text
Reveal
StaggerContainer
FadeUp
```

Avoid excessive abstraction if it makes the code harder to maintain.

------------------------------------------------------------------------

# 34. Suggested Page Order

Final page structure:

``` text
1. Navbar
2. Hero
3. Stats
4. About
5. Experience (if real data exists)
6. Featured Projects
7. Other Projects
8. Skills
9. Testimonials (only if real)
10. Contact
11. Footer
```

The exact order may be adjusted if UX testing indicates a better flow,
but the hero and project showcase must remain prominent.

------------------------------------------------------------------------

# 35. Visual Hierarchy Priority

When making design decisions, follow this priority:

``` text
1. Readability
2. Hero impact
3. Project credibility
4. Navigation clarity
5. Mobile usability
6. Accessibility
7. Performance
8. Animation
9. Decorative effects
```

Never sacrifice the first seven for decoration.

------------------------------------------------------------------------

# 36. Quality Bar

The finished website should feel like a portfolio that could
realistically be used by a professional developer applying for:

-   internships
-   junior developer roles
-   freelance projects
-   full-stack development work
-   software engineering opportunities

It should look custom-designed rather than generated from a generic
template.

A visitor should understand within the first few seconds:

``` text
WHO → WHAT THEY BUILD → PROOF → HOW TO CONTACT
```

------------------------------------------------------------------------

# 37. Final Implementation Instruction

Build the website completely, not as a wireframe.

Before considering it finished, verify:

### Visual

-   [ ] Premium dark theme
-   [ ] Functional light theme
-   [ ] Consistent teal/cyan accent
-   [ ] Strong typography
-   [ ] Balanced whitespace
-   [ ] Subtle grid/background
-   [ ] Controlled glassmorphism
-   [ ] Professional portrait treatment
-   [ ] Strong project visuals

### Interaction

-   [ ] Sticky navbar
-   [ ] Working mobile menu
-   [ ] Working theme toggle
-   [ ] Hero entrance animation
-   [ ] Scroll reveal
-   [ ] Project hover effects
-   [ ] Button hover/tap states
-   [ ] Floating badge motion
-   [ ] Back-to-top behavior

### Responsive

-   [ ] Desktop
-   [ ] Tablet
-   [ ] Mobile
-   [ ] No badge overlaps
-   [ ] No horizontal scrolling
-   [ ] Mobile typography remains readable

### Accessibility

-   [ ] Keyboard navigation
-   [ ] Focus states
-   [ ] Alt text
-   [ ] ARIA labels
-   [ ] Contrast
-   [ ] Reduced-motion support

### Technical

-   [ ] No console errors
-   [ ] No broken links
-   [ ] No fake content presented as fact
-   [ ] Images optimized
-   [ ] Components reusable
-   [ ] Personal/project data separated from UI
-   [ ] SEO metadata configured

------------------------------------------------------------------------

# 38. Final Design Direction

The final result should feel like:

> **A premium, modern developer product website --- not a résumé pasted
> onto a webpage.**

Use the references and specifications as design direction, but improve
the UX where necessary.

The design should be:

**minimal + premium + technical + human + confident + fast**

Avoid:

**generic + crowded + overly neon + overly animated + corporate +
template-like**

The final experience should make the user's **real projects and
technical ability** the visual center of the portfolio.
