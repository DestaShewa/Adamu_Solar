# Adamu Solar --- Phase 4 Implementation Plan

**Document ID:** AS-IMPL-001\
**Version:** 1.0\
**Status:** Approved phase baseline\
**Phase:** 4 --- Shared Layout and Homepage

## 1. Objective

Implement the shared site shell and the first complete homepage using
the approved Phase 1 requirements and Phase 2 brand/UI/UX documents. Use
the actual initialized repository from Phase 3.

## 2. Scope

Included: - Shared header and footer. - Responsive desktop and mobile
navigation. - English/Amharic language control with a working,
documented behavior. - Homepage hero and approved tagline. - Services
overview. - Featured projects section using approved assets or clearly
temporary development placeholders. - About preview and contact CTA. -
Responsive styling, accessibility, and baseline performance checks.

Not included: - Full About, Services, Projects, or Contact page
implementations. - Working inquiry-form backend or third-party
integration. - E-commerce, user accounts, dashboard, database,
analytics, or CMS. - Production deployment without explicit approval.

## 3. Implementation sequence

### Slice 1 --- Verify project baseline

-   Read the README and all relevant files in `docs/`.
-   Check `package.json`, the generated Next.js version, and existing
    `src/app` structure.
-   Run the current lint/build commands.
-   Preserve generated configuration unless changes are needed and
    documented.

### Slice 2 --- Design tokens and global styles

-   Add approved color and typography tokens.
-   Set sensible global reset, body background, default text, focus
    states, and responsive container utilities.
-   Confirm English and Amharic fonts render correctly.

### Slice 3 --- Shared layout

-   Implement logo/wordmark, desktop navigation, mobile menu, language
    control, and contact CTA.
-   Implement footer navigation and approved contact details only.
-   Use semantic HTML and keyboard-accessible controls.

### Slice 4 --- Homepage sections

Implement in this order: 1. Hero. 2. Services overview. 3. Featured
projects. 4. About preview / verified trust content. 5. Contact CTA. 6.
Footer integration.

### Slice 5 --- Responsive and bilingual review

-   Test narrow mobile, common mobile, tablet, laptop, and desktop
    widths.
-   Test English and Amharic text lengths.
-   Verify navigation and language behavior.
-   Check all buttons and links.

### Slice 6 --- Validation and review

-   Run the project's actual lint script and production build.
-   Check for broken images, console errors, layout overflow, missing
    alt text, and placeholder content.
-   Review the Git diff and commit only intended files.
-   Present the result for client review before proceeding.

## 4. Content rules

-   Use the approved tagline: "Reliable Solar Solutions for Homes,
    Churches and Businesses."
-   Use real project photos only when Adamu has approved their use.
-   If real photos are not yet available, use temporary, properly
    licensed imagery and label it as a placeholder in the content/data,
    not as Adamu's completed work.
-   Do not invent project counts, savings, years of experience, customer
    names, certifications, warranty terms, or product availability.
-   Do not publish the supplied phone number until Adamu confirms the
    correct public phone/WhatsApp format.

## 5. Expected outputs

-   Working shared layout.
-   Working responsive homepage.
-   Consistent design tokens.
-   Documented placeholder content and remaining dependencies.
-   Successful lint/build checks, or explicit notes for any unresolved
    failure.
-   Screenshots or a review link after the developer actually produces
    them.

## 6. Phase exit criteria

Phase 4 is complete when the shared shell and homepage are implemented,
responsive and bilingual behavior has been tested, contact actions are
grounded in verified details, quality checks pass, and Adamu approves
the result.
