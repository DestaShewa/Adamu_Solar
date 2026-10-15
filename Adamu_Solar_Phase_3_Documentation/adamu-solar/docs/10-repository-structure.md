# Adamu Solar --- Repository Structure

**Document ID:** AS-REPO-001\
**Version:** 1.0\
**Status:** Baseline

## 1. Repository goal

Keep project decisions, application code, static assets, and maintenance
guidance organized and easy for a human developer or AI coding agent to
navigate.

## 2. Planned structure

``` text
adamu-solar/
├── docs/
│   ├── 01-project-brief.md
│   ├── 02-requirements.md
│   ├── 03-mvp-scope.md
│   ├── 04-acceptance-criteria.md
│   ├── 05-brand-guide.md
│   ├── 06-sitemap-and-ui-ux-specification.md
│   ├── 07-responsive-layout-rules.md
│   ├── 08-design-acceptance-criteria.md
│   ├── 09-development-environment.md
│   ├── 10-repository-structure.md
│   ├── 11-coding-standards.md
│   ├── 12-git-workflow.md
│   └── 13-phase-3-validation.md
├── public/
│   ├── images/
│   │   ├── brand/
│   │   ├── projects/
│   │   └── supporting/
│   └── icons/
├── src/
│   ├── app/
│   │   ├── layout.js
│   │   ├── page.js
│   │   ├── globals.css
│   │   └── [locale]/
│   │       ├── layout.js
│   │       ├── page.js
│   │       ├── about/
│   │       ├── services/
│   │       ├── projects/
│   │       └── contact/
│   ├── components/
│   │   ├── layout/
│   │   ├── ui/
│   │   ├── home/
│   │   ├── services/
│   │   ├── projects/
│   │   └── contact/
│   ├── data/
│   │   ├── en/
│   │   └── am/
│   └── lib/
├── .gitignore
├── .env.example
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
├── package-lock.json
└── README.md
```

## 3. Structure notes

-   The tree is a planned organization, not a requirement to create
    every folder immediately.
-   Next.js starter files may differ by version; preserve generated
    configuration unless there is a documented reason to change it.
-   Locale routing is a proposed approach for the bilingual site. Final
    route implementation should be checked against the installed Next.js
    version and approved routing design.
-   Use `public/images/brand/` for approved logo assets and
    `public/images/projects/` for client-approved project photos.
-   Store simple translation and service data in `src/data/` if that
    remains suitable; do not add a database for static MVP content.
-   Components should be extracted when they are reusable or make a page
    clearer, not merely to create many small files.
-   Keep credentials out of the repository.

## 4. Naming conventions

-   Folders: lowercase kebab-case where appropriate.
-   React component files: PascalCase, for example `SiteHeader.jsx`, if
    the project convention supports it.
-   Route files: use the filenames required by Next.js, such as
    `page.js` and `layout.js`.
-   Utility files: descriptive lowercase names.
-   CSS variables and design tokens: consistent names tied to the brand
    guide.
-   Avoid unclear names such as `temp.js`, `new2.js`, or
    `final-final.js`.

## 5. Required project documentation

The repository must contain the approved Phase 1 and Phase 2 documents
and the Phase 3 setup documents. Update the README with: - Project
purpose and scope. - Tools and requirements. - Install/run commands. -
Available scripts. - How to run lint/build checks. - Asset and content
update guidance. - Environment-variable guidance, if applicable. -
Deployment overview once deployment is configured.
