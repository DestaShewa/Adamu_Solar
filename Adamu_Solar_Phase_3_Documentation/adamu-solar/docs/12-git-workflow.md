# Adamu Solar --- Git and GitHub Workflow

**Document ID:** AS-GIT-001\
**Version:** 1.0\
**Status:** Baseline

## 1. Repository setup

Create a GitHub repository named `adamu-solar`. Unless there is a reason
to keep it private, decide visibility with Adamu before adding any
client-sensitive material. Never place credentials or private customer
information in a public repository.

From the project root:

``` bash
git init
git status
git add .
git commit -m "chore: initialize Adamu Solar project"
```

Create the remote repository on GitHub, then connect it using the URL
shown by GitHub:

``` bash
git remote add origin <YOUR_GITHUB_REPOSITORY_URL>
git branch -M main
git push -u origin main
```

Replace the placeholder with the actual repository URL; do not type the
placeholder literally.

## 2. Branching

For a small MVP: - `main`: stable, reviewed work. - Short-lived branches
for meaningful changes, such as `docs/phase-3-setup` or
`feat/site-header`.

If working alone, a simple main-branch workflow is possible, but use
small commits and do not commit broken or secret-containing changes.

## 3. Commit messages

Use clear, concise messages: - `docs: add project requirements` -
`chore: initialize Next.js project` -
`feat: add responsive site header` - `fix: correct mobile navigation` -
`test: validate contact form behavior`

Only use a `test:` prefix when a test-related change was actually made.

## 4. Before committing

Run:

``` bash
git status
git diff
```

Check: - Only intended files are staged. - No `.env.local`, API keys,
passwords, tokens, or customer data are included. - No large unrelated
files or generated build artifacts are included. - Relevant lint/build
checks have been run.

Then:

``` bash
git add <specific-files>
git commit -m "type: concise description"
git push
```

Prefer staging specific files rather than blindly staging everything
when unsure.

## 5. .gitignore and secrets

Confirm `.gitignore` excludes at minimum: - `node_modules/` - `.next/` -
build output as appropriate - `.env*` files, while allowing
`.env.example` to be committed - local logs and editor/OS-specific files

Inspect the generated `.gitignore` before changing it. If a secret is
accidentally committed, removing it in a later commit is not enough;
revoke/rotate it and follow appropriate repository cleanup.

## 6. Pull and synchronization

Before working across machines:

``` bash
git pull
git status
```

Avoid editing the same files on different machines without
synchronizing. Resolve conflicts deliberately; do not overwrite unknown
work.

## 7. Release discipline

-   Keep the production branch stable.
-   Review the diff before merging.
-   Run the production build before deployment.
-   Deploy only after approval and production checks.
-   Tag a release if useful, for example `v1.0.0`, once the MVP is
    launched.
