# Adamu Solar --- Development Environment

**Document ID:** AS-DEV-001\
**Version:** 1.0\
**Status:** Baseline\
**Phase:** 3 --- Repository and Development Environment Setup

## 1. Purpose

Define the tools and repeatable local setup for developing the Adamu
Solar website. This phase prepares the project; page implementation
belongs to Phase 4 onward.

## 2. Approved stack

-   Next.js with App Router.
-   JavaScript (not TypeScript).
-   React as used by Next.js.
-   Tailwind CSS.
-   Git for version control.
-   GitHub for remote source control.
-   Vercel as the planned hosting platform.
-   Lucide React icons only if/when icons are needed.
-   No database or backend for the initial marketing website unless
    approved scope changes.

Use the currently supported stable versions compatible with one another
at the time of project initialization. Record actual installed versions
in `package.json` and the lockfile; do not guess versions in
documentation.

## 3. Prerequisites

Install or verify: - A supported Node.js LTS release. - npm (bundled
with Node.js) unless the project explicitly chooses another package
manager. - Git. - Visual Studio Code or another editor. - A modern
browser. - A GitHub account and repository access.

Check versions:

``` bash
node --version
npm --version
git --version
```

If any command is unavailable, install the relevant tool from its
official source, reopen the terminal, and run the version check again.

## 4. Initialize the project

From the parent directory where the project should live:

``` bash
npx create-next-app@latest adamu-solar
```

During setup, choose: - JavaScript, not TypeScript. - ESLint: yes. -
Tailwind CSS: yes. - `src/` directory: yes. - App Router: yes. - Import
alias: keep the default `@/*` unless a reason exists to change it. -
Choose a linter option supported by the installed Next.js setup and keep
it consistent.

If the setup prompts differ from these instructions, record the actual
choices and update this document rather than selecting TypeScript.

Then:

``` bash
cd adamu-solar
npm run dev
```

Open the local address printed in the terminal, usually
`http://localhost:3000`. The starter screen is expected; do not
implement the designed pages during Phase 3.

## 5. Baseline validation

Run:

``` bash
npm run lint
npm run build
```

Use only scripts that actually exist in `package.json`. If the generated
project uses a different lint command, update this document to match.
Resolve setup errors before moving to page implementation.

## 6. Package management

-   Use npm consistently for this project.
-   Commit `package-lock.json`.
-   Do not mix npm, pnpm, and yarn lockfiles.
-   Review package changes before installing additional dependencies.
-   Add a dependency only when it supports an approved requirement.

## 7. Environment variables

-   The initial static site may need no environment variables.
-   If the inquiry form later uses an external provider, define required
    variables in `.env.local` and document their names in `.env.example`
    using safe placeholder values.
-   Never commit `.env.local`, API keys, tokens, or credentials.
-   Only variables intentionally safe for browser exposure may use the
    `NEXT_PUBLIC_` prefix.
-   Keep secret values in the hosting platform's environment settings,
    not source code.

## 8. Development workflow

1.  Read the relevant project documentation before editing.
2.  Make a small, focused change.
3.  Run the relevant lint/build checks.
4.  Test the change locally.
5.  Review the diff.
6.  Commit with a meaningful message.
7.  Push the branch after checking that no secrets or unintended files
    are included.

## 9. Out of scope during Phase 3

-   Implementing homepage sections or page layouts.
-   Adding real business copy or customer photos to pages.
-   Implementing the inquiry form.
-   Connecting analytics or third-party services.
-   Deploying a public production site.

## 10. Phase exit criteria

-   Tools and versions are verified.
-   Next.js starter project runs locally.
-   JavaScript, Tailwind CSS, App Router, and `src/` choices are
    confirmed.
-   Git repository exists and has an initial commit.
-   Baseline lint/build checks pass or any generated-script differences
    are documented.
-   No website page implementation has begun.
