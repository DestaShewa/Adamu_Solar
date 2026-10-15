# Adamu Solar --- Shared Components and Homepage Content Plan

**Document ID:** AS-COMP-001\
**Version:** 1.0

## 1. Component plan

Suggested components; adapt to the existing repository rather than
creating files mechanically.

``` text
src/
├── app/
│   ├── layout.js
│   ├── globals.css
│   └── [locale]/
│       ├── layout.js
│       └── page.js
├── components/
│   ├── layout/
│   │   ├── SiteHeader.jsx
│   │   ├── MobileNavigation.jsx
│   │   └── SiteFooter.jsx
│   ├── ui/
│   │   ├── Button.jsx
│   │   └── SectionHeading.jsx
│   └── home/
│       ├── HeroSection.jsx
│       ├── ServicesOverview.jsx
│       ├── FeaturedProjects.jsx
│       ├── AboutPreview.jsx
│       └── ContactCTA.jsx
├── data/
│   ├── en/
│   └── am/
└── lib/
```

This is a proposed structure. Use `.js` or `.jsx` consistently with the
generated project. Do not create duplicate route trees if the project's
chosen localization strategy differs.

## 2. Shared header requirements

-   Brand mark and wordmark link to the homepage.
-   Desktop navigation links to the five agreed pages.
-   Mobile menu opens and closes with keyboard and touch.
-   Language control is visible and understandable.
-   Contact CTA is prominent but does not crowd the header.
-   Current page is indicated accessibly.
-   Use real route links, not `href="#"`.

## 3. Homepage content plan

### Hero

-   Headline: "Reliable Solar Solutions for Homes, Churches and
    Businesses."
-   Supporting text: explain installation, maintenance, design,
    consultation, and product sales without unsupported claims.
-   Primary CTA: "Contact Adamu" or "Request a Quote."
-   Secondary CTA: "Explore Services."
-   Image: approved real project photo when available.

### Services overview

Create concise cards for: - Solar installation. - Maintenance and
troubleshooting. - Solar system design. - Consultation. - Solar product
sales.

Each card links to the Services page, even if that page is implemented
in a later phase. Until then, ensure the link has a meaningful
destination strategy and does not lead to a broken route.

### Featured projects

-   Show a small number of approved project photographs.
-   Include accurate captions only.
-   Do not present stock photos as Adamu's work.
-   If no approved photos are ready, show a neutral "Project photos
    coming soon" state or clearly marked temporary placeholders in
    development.

### About preview

-   Use only confirmed facts about Adamu's professional background.
-   Link to About page once the route exists; avoid dead links during
    development.

### Contact CTA

-   Offer phone and WhatsApp only after the contact details are
    verified.
-   Provide a Contact page link.
-   Do not claim an inquiry form works until its receiving service is
    implemented and tested.

## 4. Bilingual content model

Keep English and Amharic strings in a clear, consistent structure. All
visible UI strings must be localized, including: - Navigation. -
Buttons. - Headings and section copy. - Image alt text where
appropriate. - Mobile-menu labels. - Form/contact labels when added. -
Footer. - Validation and status messages for future interactive
elements.

Amharic content should be reviewed by a fluent speaker before public
release. Ensure the chosen font supports Ethiopic characters.

## 5. Asset requirements

Expected approved assets: - Full logo and icon. - Hero/project photo. -
Two to four project images if available. - Optional approved portrait. -
Certificate images only if suitable and approved.

Optimize images, preserve aspect ratio, provide meaningful alt text, and
avoid exposing customer addresses or private details.
