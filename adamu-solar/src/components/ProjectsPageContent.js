
"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  Sun,
  MapPin,
  Image as ImageIcon,
  MessageCircle,
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { content } from "@/lib/content";

const projectsPageContent = {
  en: {
    eyebrow: "OUR PROJECTS",
    title: "Solar solutions in action.",
    intro:
      "Explore Adamu Solar's installation work and project experience. Project photos and details can be added here as they become available.",
    featuredTitle: "Project gallery",
    featuredText:
      "Real project photos help customers understand the work, equipment, and solutions provided.",
    emptyTitle: "Project photos coming soon",
    emptyText:
      "Project images and verified details will be published here after they are collected and approved.",
    detailsTitle: "Every project starts with a conversation.",
    detailsText:
      "Tell us about your location, electricity needs, and project goals. We can discuss the next steps and confirm service availability.",
    contactButton: "Discuss Your Project",
    phoneButton: "Call Adamu",
    projectLabel: "Solar project",
    location: "Arba Minch and surrounding areas",
    trustNote:
      "Only verified project photos, descriptions, and customer permissions should be published on this page.",
  },
  am: {
    eyebrow: "ፕሮጀክቶቻችን",
    title: "በተግባር የሚታዩ የሶላር መፍትሄዎች።",
    intro:
      "የአዳሙ ሶላር የተከላ ሥራዎችንና የፕሮጀክት ልምዶችን ይመልከቱ። ፎቶዎችና የፕሮጀክት ዝርዝሮች ሲዘጋጁ እዚህ ሊጨመሩ ይችላሉ።",
    featuredTitle: "የፕሮጀክት ማሳያ",
    featuredText:
      "እውነተኛ የፕሮጀክት ፎቶዎች ስለ ሥራው፣ ስለ መሣሪያዎችና ስለተሰጡ መፍትሄዎች ደንበኞች እንዲረዱ ይረዳሉ።",
    emptyTitle: "የፕሮጀክት ፎቶዎች በቅርቡ",
    emptyText:
      "ፎቶዎችና የተረጋገጡ ዝርዝሮች ከተሰበሰቡና ከተፈቀዱ በኋላ እዚህ ይታያሉ።",
    detailsTitle: "እያንዳንዱ ፕሮጀክት በውይይት ይጀምራል።",
    detailsText:
      "ስለ ቦታዎ፣ የኤሌክትሪክ ፍላጎትዎና የፕሮጀክት ዓላማዎ ያሳውቁን። ቀጣይ እርምጃዎችን መወያየትና አገልግሎቱን ማረጋገጥ እንችላለን።",
    contactButton: "ስለ ፕሮጀክትዎ ይወያዩ",
    phoneButton: "አዳሙን ይደውሉ",
    projectLabel: "የሶላር ፕሮጀክት",
    location: "አርባ ምንጭና አካባቢው",
    trustNote:
      "በዚህ ገጽ ላይ የተረጋገጡ የፕሮጀክት ፎቶዎችን፣ መግለጫዎችንና የደንበኛ ፈቃድ ያላቸውን መረጃዎች ብቻ ያትሙ።",
  },
};

// Add verified project photos here when they are ready.
// Example image path: /images/projects/home-solar-installation.jpg
const projects = [];

export default function ProjectsPageContent({ initialLang = "en" }) {
  const [lang, setLang] = useState(initialLang);

  const t = content[lang];
  const page = projectsPageContent[lang];
  const contactHref = lang === "am" ? "/contact?lang=am" : "/contact";

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div lang={lang} className="min-h-screen">
      <Header lang={lang} setLang={setLang} t={t} />

      <main>
        {/* Hero */}
        <section className="bg-[#0B3D5C] px-4 py-20 text-white sm:py-28">
          <div className="container-width">
            <p className="text-xs font-extrabold tracking-[0.15em] text-green-300">
              {page.eyebrow}
            </p>

            <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {page.title}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
              {page.intro}
            </p>

            <a href={contactHref} className="btn-primary mt-8">
              {page.contactButton}
              <ArrowRight size={18} />
            </a>
          </div>
        </section>

        {/* Project gallery */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="max-w-3xl">
              <span className="section-label">{page.eyebrow}</span>
              <h2 className="section-title">{page.featuredTitle}</h2>
              <p className="section-description">{page.featuredText}</p>
            </div>

            {projects.length > 0 ? (
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                  <article
                    key={project.id}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                      <img
                        src={project.image}
                        alt={project.alt}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    <div className="p-5">
                      <h3 className="text-lg font-bold text-[#0B3D5C]">
                        {project.title[lang]}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {project.description[lang]}
                      </p>

                      {project.location && (
                        <p className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                          <MapPin size={15} />
                          {project.location}
                        </p>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="mt-10 rounded-3xl border-2 border-dashed border-slate-200 bg-slate-50 px-6 py-14 text-center sm:px-12">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 text-green-700">
                  <ImageIcon size={32} />
                </div>

                <h3 className="mt-6 text-xl font-extrabold text-[#0B3D5C]">
                  {page.emptyTitle}
                </h3>

                <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-600">
                  {page.emptyText}
                </p>

                <div className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold text-slate-500">
                  <MapPin size={16} />
                  {page.location}
                </div>
              </div>
            )}

            <p className="mt-6 text-xs leading-6 text-slate-500">
              {page.trustNote}
            </p>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="section-padding bg-[#F3F4F6]">
          <div className="container-width rounded-3xl bg-[#0B3D5C] px-6 py-12 text-white sm:px-12 sm:py-14">
            <div className="flex items-start gap-4">
              <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 sm:flex">
                <Sun size={30} />
              </div>

              <div>
                <h2 className="max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl">
                  {page.detailsTitle}
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-slate-200">
                  {page.detailsText}
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a href={contactHref} className="btn-primary">
                    {page.contactButton}
                    <ArrowRight size={17} />
                  </a>

                  <a
                    href="tel:+251986357896"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/30 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                  >
                    <MessageCircle size={17} />
                    {page.phoneButton}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer t={t} />
    </div>
  );
}
