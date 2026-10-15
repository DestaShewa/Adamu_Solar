# Adamu Solar --- Responsive Layout and UI Rules

**Document ID:** AS-RESP-001\
**Version:** 1.0\
**Status:** Proposed baseline for client approval

## 1. Responsive principle

Design mobile-first, then enhance for larger screens. Core content,
language switching, navigation, and contact actions must remain usable
at all supported sizes.

## 2. Suggested breakpoints

Use the framework's conventional responsive breakpoints as a starting
point, then test actual content: - Small/mobile: below 640 px. -
Medium/tablet: 640--1023 px. - Large/desktop: 1024 px and above.

Breakpoints are implementation guidance, not a substitute for testing.

## 3. Container and spacing

-   Use a centered content container with a sensible maximum width.
-   Keep consistent horizontal page padding.
-   Use a spacing scale rather than arbitrary values.
-   On phones, reduce multi-column sections to one column.
-   Avoid text blocks spanning the entire width on desktop.
-   Ensure cards align consistently and do not become cramped.

## 4. Header and navigation

### Mobile

-   Compact logo.
-   Accessible menu button with an accessible name and expanded state.
-   Language toggle remains discoverable.
-   Primary contact action must be easy to find without covering
    content.
-   Menu closes appropriately after navigation.

### Tablet and desktop

-   Horizontal navigation when space permits.
-   Logo, links, language control, and primary CTA must fit without
    wrapping awkwardly.
-   Clearly identify the current page.

## 5. Hero section

### Mobile

-   Stack text and image vertically or use a carefully tested image
    background.
-   Put the headline and primary CTA near the top.
-   Ensure text contrast if text overlays imagery.
-   Buttons should be comfortably tappable and may stack when needed.

### Desktop

-   Use a two-column text/image composition or a controlled image-backed
    hero.
-   Maintain readable line lengths and a clear visual hierarchy.
-   Avoid excessive hero height that pushes all useful content below the
    fold.

## 6. Cards and galleries

-   Services: one column on narrow mobile, two columns on suitable
    tablet widths, and three or more only when card content remains
    readable.
-   Projects: one column on narrow screens, two on tablets, and up to
    three on desktop as content permits.
-   Keep image aspect ratios consistent within a gallery.
-   Do not crop important equipment, people, or context.
-   Provide descriptive captions where they add value.

## 7. Typography and localization

-   Use fluid but bounded font sizes where appropriate.
-   Maintain readable body text and line height.
-   Test both English and Amharic; do not assume the same line breaks.
-   Allow navigation labels and buttons to wrap or resize gracefully.
-   Never clip text to preserve a fixed-height design.
-   Ensure the chosen fonts support all Ethiopic characters used.

## 8. Forms and controls

-   Use full-width fields on mobile.
-   Associate every field with a visible label.
-   Show validation messages near the relevant field and announce errors
    accessibly where supported.
-   Keep labels and inputs distinct.
-   Use a suitable input type for phone/email as appropriate.
-   Do not rely on color alone to communicate errors or success.
-   Buttons and links need clear focus states.

## 9. Images and performance

-   Use responsive image sizes and modern formats when supported.
-   Compress large photos.
-   Provide dimensions or aspect ratios to limit layout shifts.
-   Load below-the-fold images efficiently.
-   Use meaningful alt text for informative images and empty alt text
    for purely decorative images.
-   Do not load unnecessarily large background images on mobile.

## 10. Accessibility and motion

-   Ensure keyboard access to all interactive controls.
-   Provide visible focus indicators.
-   Respect reduced-motion preferences.
-   Use semantic landmarks and logical heading order.
-   Maintain adequate color contrast.
-   Do not make essential content appear only on hover.
-   Avoid autoplay video or animation that distracts from the contact
    journey.

## 11. Responsive test matrix

Test at minimum: - Narrow phone: approximately 320--375 px. - Typical
phone: approximately 390--430 px. - Tablet: approximately 768 px. -
Laptop: approximately 1280 px. - Wide desktop: approximately 1440 px or
wider.

Also test: - English and Amharic on every page. - Keyboard navigation. -
Long service names and form errors. - Slow network and failed image
loading. - Menu open/close behavior. - Contact links and inquiry
submission.
