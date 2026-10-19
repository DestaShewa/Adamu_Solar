# Adamu Solar Website

A modern, responsive business website for **Adamu Solar**, a solar energy service provider based in Arba Minch, Ethiopia. The website presents solar services, showcases projects, introduces the business, and helps customers make inquiries.

## Overview

The project is designed to strengthen Adamu Solar’s online presence and make it easier for potential customers to learn about its services and contact the business.

## Features

- **Responsive Design** — Adapts to desktop, tablet, and mobile screens.
- **Bilingual Interface** — English and Amharic language support.
- **Home Page** — Business introduction, featured services, and project highlights.
- **About Page** — Business information and company introduction.
- **Services Page** — Overview of solar installation, maintenance, consultation, and other verified services.
- **Projects Page** — Space to showcase genuine solar installations and completed work.
- **Contact Page** — Contact information and customer inquiry options.
- **WhatsApp Contact** — Convenient communication with potential customers.
- **Reusable Components** — Shared UI components for consistent design and easier maintenance.
- **SEO Foundations** — Page metadata and semantic content structure.

## Technology Stack

- **Framework:** Next.js
- **Language:** JavaScript
- **UI Library:** React
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Version Control:** Git and GitHub
- **Deployment:** Vercel

## Project Structure

```text
adamu-solar/
├── public/
│   └── images/
│       └── projects/
├── src/
│   ├── app/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── projects/
│   │   ├── services/
│   │   ├── globals.css
│   │   ├── layout.js
│   │   └── page.js
│   ├── components/
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── Services.js
│   │   ├── Projects.js
│   │   ├── AboutPreview.js
│   │   ├── ContactCTA.js
│   │   └── Footer.js
│   └── lib/
│       └── content.js
├── .gitignore
├── package.json
└── README.md
```

*This structure reflects the intended organization; keep the README aligned with the actual files in your repository.*

## Getting Started

### Prerequisites

- Node.js version compatible with your installed Next.js version
- npm
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone YOUR_GITHUB_REPOSITORY_URL
   ```

2. Enter the project directory:

   ```bash
   cd adamu-solar
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

Run only scripts that are defined in your `package.json`. If `npm run lint` is not configured, omit it or use the lint command supported by your installed Next.js version.

## Screenshots

Add screenshots of the actual, working website to `docs/screenshots/`.

Suggested screenshots:

- `home.png` — Home page
- `services.png` — Services page
- `projects.png` — Projects page
- `contact.png` — Contact page
- `mobile.png` — Mobile layout

After adding the screenshots, include them here:

```markdown
### Home Page

![Adamu Solar Home Page](docs/screenshots/home.png)

### Services

![Adamu Solar Services Page](docs/screenshots/services.png)

### Projects

![Adamu Solar Projects Page](docs/screenshots/projects.png)

### Contact

![Adamu Solar Contact Page](docs/screenshots/contact.png)
```

## Deployment

The website can be deployed using Vercel.

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Configure any required environment variables.
4. Deploy the application.
5. Test every page, language option, image, and contact link on the live website.

## Quality Checklist

- [ ] All pages work correctly on desktop and mobile.
- [ ] English and Amharic content display correctly.
- [ ] Genuine project photos have been added with appropriate alternative text.
- [ ] Contact and WhatsApp links use verified business details.
- [ ] No placeholder text or broken images remain.
- [ ] Production build completes successfully.
- [ ] Website is deployed and tested.
- [ ] Screenshots and live demo link have been added to this README.

## Project Purpose

This project demonstrates practical frontend development, responsive UI design, component reuse, multilingual content handling, and deployment workflows through a real-world business website.

## License

Unless a license is added to this repository, all rights remain with the respective copyright holders. Contact the repository owner before reusing this project commercially.
