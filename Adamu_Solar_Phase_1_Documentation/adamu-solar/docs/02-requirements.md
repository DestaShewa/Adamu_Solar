# Adamu Solar Website --- Requirements Specification

**Document ID:** AS-REQ-001\
**Version:** 1.0\
**Status:** Draft for client validation

## 1. Purpose

This document defines the user-facing and quality requirements for the
first release of the Adamu Solar website. Requirements are identified so
they can be checked during testing.

## 2. User roles

-   **Visitor:** A potential customer viewing the site.
-   **Client / content owner:** Adamu, who approves published
    information.
-   **Developer / maintainer:** Person responsible for code, deployment,
    and technical updates.

No visitor accounts or administrative user roles are required in the
MVP.

## 3. Functional requirements

### FR-01 --- Home page

The site shall present the Adamu Solar brand, a concise value
proposition, primary services, selected project examples, trust
elements, and clear contact calls to action.

### FR-02 --- About page

The site shall present Adamu's approved professional biography,
experience, relevant qualifications, and service approach. Unverified
claims shall not be displayed.

### FR-03 --- Services page

The site shall explain each confirmed service: installation,
maintenance/troubleshooting, system design, consultation, and product
sales where applicable. Service details shall be approved by Adamu.

### FR-04 --- Projects page

The site shall display approved project photographs and brief project
descriptions. Each entry should identify the work performed and location
only where the client approves publication. Images must not imply work
Adamu did not perform.

### FR-05 --- Contact page

The site shall display approved contact details, service area, contact
hours if supplied, and direct contact options.

### FR-06 --- Phone link

On supported devices, the phone contact link shall open the device's
calling interface using the client-approved phone number.

### FR-07 --- WhatsApp link

The WhatsApp call to action shall open a conversation with the
client-approved WhatsApp number. A prefilled message may be provided,
but it must not imply that a message has already been sent.

### FR-08 --- Inquiry form

The site shall provide a form with, at minimum: - Name (required). -
Preferred contact method or phone number (required). - Service of
interest (required). - Location (optional or required as agreed). -
Message / project details (required). - Consent notice explaining that
submitted information will be used to respond to the inquiry.

The form shall validate required fields, prevent accidental duplicate
submissions where practical, show a clear success or error state, and
deliver submissions to an agreed destination.

**Important:** The form is not complete until the delivery destination
is configured and tested. The destination may be a client-approved
email/form service or another agreed method. Do not expose private API
keys in browser code.

### FR-09 --- Language selection

The site shall provide English and Amharic versions of all core pages
and navigation. The selected language shall be apparent to the visitor.
Switching languages should take the visitor to the equivalent page when
that translation exists.

### FR-10 --- Responsive navigation

The site shall provide usable navigation on mobile, tablet, and desktop
screens.

### FR-11 --- Social links

The site may link to Adamu's verified Facebook and Telegram profiles. Do
not link to personal accounts without approval.

### FR-12 --- SEO and sharing

Each page shall have a meaningful title and description. The site shall
use semantic headings, descriptive image alt text, a favicon, and social
sharing metadata where supported. Business structured data may be added
only with accurate, confirmed details.

### FR-13 --- Privacy and content permissions

The site shall publish only approved personal and business information.
Customer names, testimonials, photos, project details, and certificates
shall be published only with appropriate permission. A short privacy
notice shall explain how inquiry details are used.

### FR-14 --- Error and unavailable states

Broken links, missing images, form delivery errors, and missing
translations shall be identified during testing and corrected or handled
with clear fallback behavior.

## 4. Non-functional requirements

### NFR-01 --- Usability

A first-time visitor should be able to identify the services and find a
contact method without unnecessary steps.

### NFR-02 --- Responsive design

Core content and actions shall work on common mobile, tablet, and
desktop viewport sizes without horizontal overflow.

### NFR-03 --- Performance

Images shall be appropriately sized and compressed. Avoid unnecessary
libraries and large assets. Check production performance before launch;
do not promise a fixed score until measured.

### NFR-04 --- Accessibility

Use semantic HTML, visible keyboard focus, accessible form labels,
sufficient contrast, meaningful link text, and appropriate alt text. The
language of each page should be declared correctly.

### NFR-05 --- Reliability

The production site shall build successfully and all critical navigation
and contact journeys shall be tested before launch.

### NFR-06 --- Security

Use HTTPS in production. Do not commit secrets or API keys to Git.
Validate form input on the receiving service/server as well as in the
browser. Apply spam protection appropriate to the selected form
solution.

### NFR-07 --- Maintainability

Use reusable components, a clear project structure, consistent naming,
and a README that explains setup, content updates, environment variables
if any, and deployment.

### NFR-08 --- Search discoverability

Use descriptive URLs, page metadata, semantic content, and a
sitemap/robots configuration appropriate to the chosen framework and
deployment.

### NFR-09 --- Localization

English and Amharic content shall be reviewed for meaning, spelling, and
layout. Text expansion and Amharic font rendering shall be checked on
mobile and desktop.

### NFR-10 --- Cost awareness

Prefer free-tier tools where suitable. Identify any domain, email
delivery, form service, or other recurring cost before the client
approves it.

## 5. Content and assets required from the client

-   Approved full name and professional title.
-   Verified phone and WhatsApp number.
-   Confirmed service coverage and working hours.
-   Approved English copy and reviewed Amharic translations.
-   Professional portrait.
-   Project photographs and descriptions.
-   Certificates or qualifications suitable for public display.
-   Testimonials and permission to publish.
-   Verified social profile URLs.
-   Preferred inquiry recipient and method.
-   Logo if available, or approval for the developer to create a simple
    wordmark.

## 6. Business rules

1.  Adamu must approve factual claims before publication.
2.  Do not invent pricing, guarantees, certifications, customer counts,
    or project results.
3.  Do not promise 24/7 support unless confirmed.
4.  The website is not a shopping cart or online payment system.
5.  An inquiry is not a confirmed booking, quote, or service agreement.
6.  Do not publish a customer's personal information without permission.
7.  A free hosting tier does not guarantee a free custom domain or
    unlimited form delivery.

## 7. Open questions

-   Is 0986357896 the correct public phone number, and is it also the
    WhatsApp number?
-   What is the exact service radius or list of locations served?
-   Which services can Adamu deliver directly, and which products are
    currently available?
-   What email address or service should receive inquiry form
    submissions?
-   Which Facebook Page and Telegram profile should be linked?
-   Are English and Amharic translations available from the client, or
    will they be drafted and reviewed together?
-   What domain name, if any, does Adamu want?
-   Who will update the website after launch?
