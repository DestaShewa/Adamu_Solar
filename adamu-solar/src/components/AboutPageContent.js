"use client";

import { useState } from "react";
import { ArrowRight, Sun, PanelsTopLeft, Wrench, Lightbulb } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { content } from "@/lib/content";

const aboutContent = {
  en: {
    eyebrow: "ABOUT ADAMU SOLAR",
    title: "Practical solar solutions, built around your needs.",
    intro:
      "Adamu Shewa provides solar-related services in Arba Minch and surrounding areas. The aim is to understand each customer's needs and discuss an appropriate solution.",
    approachTitle: "A customer-focused approach",
    approachText:
      "Every project starts with a conversation about energy needs, the installation location, and the customer's goals. The right solution depends on the actual requirements of each site.",
    serviceTitle: "How we can help",
    serviceText:
      "Discuss your project with Adamu to learn which services may fit your requirements.",
    values: [
      {
        title: "Understand your needs",
        text: "Start by discussing your energy needs, location, and intended use.",
      },
      {
        title: "Plan the solution",
        text: "Review suitable system options and project requirements before proceeding.",
      },
      {
        title: "Discuss ongoing care",
        text: "Ask about maintenance and support options for your solar system.",
      },
    ],
    ctaTitle: "Have a solar project in mind?",
    ctaText:
      "Get in touch to discuss your requirements and the next steps.",
    ctaButton: "Discuss Your Project",
  },
  am: {
    eyebrow: "ስለ አዳሙ ሶላር",
    title: "በፍላጎትዎ ላይ የተመሠረቱ ተግባራዊ የሶላር መፍትሄዎች።",
    intro:
      "አዳሙ ሸዋ በአርባ ምንጭና በአካባቢው የሶላር ኃይል አገልግሎቶችን ይሰጣል። ዓላማው የደንበኛውን ፍላጎት በመረዳት ተስማሚ መፍትሄ ለመወያየት ነው።",
    approachTitle: "ደንበኛን ያማከለ አቀራረብ",
    approachText:
      "እያንዳንዱ ፕሮጀክት ስለ ኃይል ፍላጎት፣ ስለ ተከላ ቦታና ስለ ደንበኛው ዓላማ በመወያየት ይጀምራል። ተስማሚው መፍትሄ በቦታው ፍላጎት ላይ ይመረኮዛል።",
    serviceTitle: "እንዴት ልንረዳዎ እንችላለን?",
    serviceText:
      "ለፍላጎትዎ የሚስማሙ አገልግሎቶችን ለማወቅ ስለ ፕሮጀክትዎ ከአዳሙ ጋር ይወያዩ።",
    values: [
      {
        title: "ፍላጎትዎን መረዳት",
        text: "ስለ ኃይል ፍላጎትዎ፣ ቦታዎና የአጠቃቀም ዓላማዎ ይወያዩ።",
      },
      {
        title: "መፍትሄውን ማቀድ",
        text: "ከመቀጠልዎ በፊት ተስማሚ የሲስተም አማራጮችንና የፕሮጀክት ፍላጎቶችን ይመርምሩ።",
      },
      {
        title: "ስለ ጥገና መወያየት",
        text: "ስለ ሶላር ሲስተምዎ የጥገናና የድጋፍ አማራጮች ይጠይቁ።",
      },
    ],
    ctaTitle: "የሶላር ፕሮጀክት አስበዋል?",
    ctaText: "ስለ ፍላጎትዎና ስለሚቀጥሉት እርምጃዎች ለመወያየት ያግኙን።",
    ctaButton: "ስለ ፕሮጀክትዎ ይወያዩ",
  },
};

const icons = [Sun, PanelsTopLeft, Wrench];

export default function AboutPageContent({ initialLang = "en" }) {
  const [lang, setLang] = useState(initialLang);
  const t = content[lang];
  const page = aboutContent[lang];

  return (
    <div lang={lang} className="min-h-screen">
      <Header lang={lang} setLang={setLang} t={t} />

      <main>
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
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-width grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="section-label">{page.eyebrow}</span>
              <h2 className="section-title">{page.approachTitle}</h2>
              <p className="section-description">{page.approachText}</p>

              <a href="/services" className="btn-primary mt-8">
                {t.nav.services}
                <ArrowRight size={17} />
              </a>
            </div>

            <div className="grid gap-4">
              {page.values.map((item, index) => {
                const Icon = icons[index];

                return (
                  <article
                    key={item.title}
                    className="flex gap-4 rounded-2xl border border-slate-100 bg-white p-5 card-shadow"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-700">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0B3D5C]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#F3F4F6]">
          <div className="container-width">
            <div className="max-w-2xl">
              <span className="section-label">{t.nav.services}</span>
              <h2 className="section-title">{page.serviceTitle}</h2>
              <p className="section-description">{page.serviceText}</p>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {t.services.map((service, index) => {
                const Icon = [Sun, PanelsTopLeft, Wrench, Lightbulb][index];

                return (
                  <article
                    key={service.title}
                    className="rounded-2xl border border-slate-100 bg-white p-6"
                  >
                    <Icon size={28} className="text-green-700" />
                    <h3 className="mt-4 font-bold text-[#0B3D5C]">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {service.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-width rounded-3xl bg-[#0B3D5C] px-6 py-12 text-white sm:px-12">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              {page.ctaTitle}
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-200">
              {page.ctaText}
            </p>
            <a href="/contact" className="btn-primary mt-7">
              {page.ctaButton}
              <ArrowRight size={17} />
            </a>
          </div>
        </section>
      </main>

      <Footer t={t} />
    </div>
  );
}
