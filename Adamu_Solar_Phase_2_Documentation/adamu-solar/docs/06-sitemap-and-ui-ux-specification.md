# Adamu Solar --- Sitemap and Page-by-Page UI/UX Specification

**Document ID:** AS-UX-001\
**Version:** 1.0\
**Status:** Proposed baseline for client approval

## 1. User experience goals

1.  A visitor can understand the services quickly.
2.  A visitor can see evidence of real work and qualifications.
3.  A visitor can contact Adamu by phone, WhatsApp, or inquiry form.
4.  A visitor can use the site in English or Amharic.
5.  The experience remains clear on mobile devices and slower
    connections.

## 2. Sitemap

-   Home (`/en` and `/am`, or an equivalent agreed locale structure)
-   About (`/en/about`, `/am/about`)
-   Services (`/en/services`, `/am/services`)
-   Projects (`/en/projects`, `/am/projects`)
-   Contact (`/en/contact`, `/am/contact`)

Exact URL routing convention will be finalized during architecture
planning. URLs should be consistent, shareable, and clear.

## 3. Global layout

### Header

-   Approved logo on the left.
-   Primary navigation: Home, About, Services, Projects, Contact.
-   Language toggle: EN \| አማ.
-   Primary action: "Request a Quote" or "Contact Adamu."
-   On small screens, use a keyboard-accessible menu with a clear
    open/close state.

### Footer

-   Logo and short approved brand description.
-   Links to the five pages.
-   Verified phone, WhatsApp, and approved social links.
-   Service location only as confirmed.
-   Copyright line.
-   Privacy notice link or section.
-   No fake social links or placeholder contact information.

### Global behavior

-   The active page should be identifiable.
-   Links and buttons need visible hover/focus states.
-   External links should have meaningful labels.
-   The language toggle should take users to the equivalent page where
    possible.
-   All navigation must work by keyboard and touch.

## 4. Home page

### Purpose

Introduce Adamu Solar and guide visitors to services, projects, and
contact.

### Sections, in order

1.  Header.
2.  Hero: approved real solar installation image, clear headline, short
    service description, primary contact CTA and secondary
    services/projects CTA.
3.  Trust strip: only verified strengths, such as confirmed
    qualifications or service commitments; do not invent statistics.
4.  Services overview: concise cards linking to Services.
5.  Featured projects: two to four approved project previews.
6.  About preview: short introduction and link to About.
7.  Testimonials: optional; display only genuine, approved testimonials.
8.  Contact CTA: invite visitors to ask a question or request a quote.
9.  Footer.

### Primary action

"Request a Quote" or "Contact Adamu."

### Content requirements

-   Use the approved tagline.
-   State the service area accurately.
-   Keep the hero message short enough to scan on a phone.
-   Do not use an unverified stock image as proof of Adamu's work.

## 5. About page

### Purpose

Build confidence in Adamu as a professional.

### Sections

1.  Page heading and short introduction.
2.  Approved portrait or relevant professional photo.
3.  Professional biography and experience.
4.  Qualifications and certificates, only when verified.
5.  Approach to consultation, installation, and service, based on
    Adamu's actual process.
6.  Service area, if confirmed.
7.  Contact CTA.

### UX requirements

-   Avoid an overly long biography.
-   Use readable text width and meaningful headings.
-   Certificates should be legible and must not expose unnecessary
    private information.

## 6. Services page

### Purpose

Help visitors understand what Adamu can actually provide.

### Service sections

-   Solar installation.
-   Maintenance and troubleshooting.
-   Solar system design.
-   Solar consultation.
-   Solar product sales, only for confirmed available product
    categories.

### Each service should contain

-   Service name.
-   Short plain-language explanation.
-   Typical customer need it addresses.
-   What information a customer should prepare, where helpful.
-   CTA to ask a question or request a quote.

### UX requirements

-   Do not show prices unless Adamu approves current prices and terms.
-   Do not imply all products are always in stock.
-   Do not provide unsafe do-it-yourself electrical instructions.
-   Make contact actions available after service descriptions.

## 7. Projects page

### Purpose

Demonstrate actual experience and work quality.

### Sections

1.  Page heading and short introduction.
2.  Responsive project gallery.
3.  Optional project detail items: type of site, service provided, and
    location only with permission.
4.  Optional genuine customer testimonials, with approval.
5.  Contact CTA.

### UX requirements

-   Use client-supplied project photos wherever possible.
-   Provide captions and useful alt text.
-   Do not publish customer names, addresses, faces, or site details
    without consent.
-   If there are too few approved projects, show fewer items rather than
    fabricate examples.

## 8. Contact page

### Purpose

Convert visitor interest into a clear inquiry.

### Sections

1.  Heading and short invitation.
2.  Phone action.
3.  WhatsApp action with a sensible optional prefilled message.
4.  Inquiry form.
5.  Confirmed service area and hours, if available.
6.  Verified social links.
7.  Short privacy notice.

### Form fields

-   Name --- required.
-   Phone or preferred contact details --- required.
-   Service of interest --- required.
-   Location --- optional unless Adamu chooses otherwise.
-   Project description/message --- required.
-   Consent checkbox or equivalent clear acknowledgement, as appropriate
    to the chosen form workflow.

### Form states

-   Idle.
-   Validation errors.
-   Submitting.
-   Success only after the receiving service confirms successful
    delivery.
-   Error state if submission fails, with an alternative phone/WhatsApp
    contact path.

### Privacy and reliability

-   Form submissions must go to a destination selected by Adamu.
-   Explain how inquiry information will be used.
-   Use spam protection appropriate to the selected service.
-   Never display API secrets in client-side code.
-   Test the real deployed form before launch.

## 9. Bilingual experience

-   Provide a visible `EN | አማ` toggle in the header and mobile menu.
-   Translate all navigation, calls to action, form labels, validation
    messages, privacy notice, footer, and page content.
-   Use reviewed Amharic copy rather than relying on unreviewed machine
    translation.
-   Preserve the equivalent page during language switching where
    available.
-   Set correct page language metadata and test font rendering.
-   Allow longer text to wrap naturally without clipping.

## 10. Shared components to design

-   Header and mobile navigation.
-   Language toggle.
-   Primary and secondary buttons.
-   Service card.
-   Project card/gallery item.
-   Testimonial card (optional).
-   Section heading.
-   Contact CTA section.
-   Contact form fields and validation messages.
-   Footer.
-   Breadcrumbs only if useful; not required for the five-page MVP.

## 11. Content priority

Priority 1: services, contact details, service coverage, hero photo,
project photos, approved biography.

Priority 2: verified certificates, testimonials, social profiles,
business hours.

Priority 3: extra photography, optional supporting educational content.

Missing lower-priority content should not block a clean MVP, but factual
claims must never be invented to fill space.
