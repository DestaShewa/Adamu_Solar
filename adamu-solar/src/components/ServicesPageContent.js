
"use client";

import { useEffect, useState } from "react";
import {
  Sun,
  PanelsTopLeft,
  Wrench,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { content } from "@/lib/content";

const servicesPageContent = {
  en: {
    eyebrow: "OUR SERVICES",
    title: "Solar solutions for your energy needs.",
    intro:
      "Explore solar services for homes, churches, businesses, and organizations. Contact Adamu to discuss your requirements and confirm which services are available for your project.",
    servicesHeading: "How we can help",
    servicesIntro:
      "Every solar project has different requirements. Start with a conversation about your energy needs, location, and budget.",
    services: [
      {
        title: "Solar Installation",
        description:
          "Discuss a solar installation for your home, church, business, or other facility based on your energy requirements.",
        points: [
          "Discuss your power needs",
          "Review the installation location",
          "Explore suitable system options",
        ],
      },
      {
        title: "Solar System Design",
        description:
          "Explore system options based on your expected electricity use, available space, and project requirements.",
        points: [
          "Review expected power consumption",
          "Discuss system components",
          "Plan for your specific needs",
        ],
      },
      {
        title: "Maintenance and Support",
        description:
          "Discuss maintenance needs and possible support for an existing solar installation.",
        points: [
          "Explain the issue with your system",
          "Discuss inspection requirements",
          "Confirm available maintenance services",
        ],
      },
      {
        title: "Solar Consultation",
        description:
          "Get guidance to help you understand your solar project requirements and consider suitable options.",
        points: [
          "Discuss your project goals",
          "Understand available options",
          "Plan your next steps",
        ],
      },
    ],
    processHeading: "A simple process",
    processIntro:
      "Start with your needs and work toward a solution that fits your project.",
    steps: [
      {
        title: "Tell us your needs",
        description:
          "Share your location, intended use, and the energy problem you want to solve.",
      },
      {
        title: "Discuss the options",
        description:
          "Review possible solutions, site requirements, and the next steps.",
      },
      {
        title: "Confirm the project",
        description:
          "Confirm the scope, availability, price, and timeline before work begins.",
      },
    ],
    note:
      "Service availability, equipment, pricing, and installation timelines must be confirmed for each project.",
    ctaHeading: "Ready to discuss your solar project?",
    ctaText:
      "Contact Adamu to explain your needs and find out the next steps.",
    ctaButton: "Contact Us",
    phoneButton: "Call 0986357896",
  },
  am: {
    eyebrow: "አገልግሎቶቻችን",
    title: "ለኃይል ፍላጎትዎ የሶላር መፍትሄዎች።",
    intro:
      "ለቤቶች፣ ለቤተ ክርስቲያናት፣ ለንግድ ተቋማትና ለድርጅቶች የሚሆኑ የሶላር አገልግሎቶችን ይመልከቱ። ስለ ፕሮጀክትዎ ለመወያየትና አገልግሎቱ መኖሩን ለማረጋገጥ አዳሙን ያግኙ።",
    servicesHeading: "እንዴት ልንረዳዎ እንችላለን?",
    servicesIntro:
      "እያንዳንዱ የሶላር ፕሮጀክት የተለያዩ ፍላጎቶች አሉት። ስለ ኃይል ፍላጎትዎ፣ ቦታዎና በጀትዎ በመወያየት ይጀምሩ።",
    services: [
      {
        title: "የሶላር ተከላ",
        description:
          "በኃይል ፍላጎትዎ መሠረት ለቤትዎ፣ ለቤተ ክርስቲያንዎ፣ ለንግድ ተቋምዎ ወይም ለሌላ ቦታ ስለ ሶላር ተከላ ይወያዩ።",
        points: [
          "የኃይል ፍላጎትዎን መወያየት",
          "የተከላ ቦታውን መገምገም",
          "ተስማሚ የሲስተም አማራጮችን ማየት",
        ],
      },
      {
        title: "የሶላር ሲስተም ዲዛይን",
        description:
          "በኤሌክትሪክ ፍጆታዎ፣ በሚገኘው ቦታና በፕሮጀክት ፍላጎቶች መሠረት የሲስተም አማራጮችን ይመርምሩ።",
        points: [
          "የኤሌክትሪክ ፍጆታን መገምገም",
          "ስለ ሲስተም ክፍሎች መወያየት",
          "ለፍላጎትዎ ማቀድ",
        ],
      },
      {
        title: "ጥገናና ድጋፍ",
        description:
          "ለነባር የሶላር ተከላዎ ስለሚያስፈልገው ጥገናና ስለሚገኙ የድጋፍ አማራጮች ይወያዩ።",
        points: [
          "የሲስተሙን ችግር ማብራራት",
          "የምርመራ ፍላጎትን መወያየት",
          "የጥገና አገልግሎትን ማረጋገጥ",
        ],
      },
      {
        title: "የሶላር ምክክር",
        description:
          "የሶላር ፕሮጀክትዎን ፍላጎቶች ለመረዳትና ተስማሚ አማራጮችን ለመመርመር መመሪያ ያግኙ።",
        points: [
          "የፕሮጀክት ዓላማዎን መወያየት",
          "ያሉ አማራጮችን መረዳት",
          "ቀጣይ እርምጃዎችን ማቀድ",
        ],
      },
    ],
    processHeading: "ቀላል የሥራ ሂደት",
    processIntro:
      "ከፍላጎትዎ ይጀምሩና ለፕሮጀክትዎ የሚስማማ መፍትሄ ለማግኘት ይወያዩ።",
    steps: [
      {
        title: "ፍላጎትዎን ያሳውቁ",
        description:
          "ቦታዎን፣ የአጠቃቀም ዓላማዎንና መፍታት የሚፈልጉትን የኃይል ችግር ያብራሩ።",
      },
      {
        title: "አማራጮችን ይወያዩ",
        description:
          "ሊሆኑ የሚችሉ መፍትሄዎችን፣ የቦታ ፍላጎቶችንና ቀጣይ እርምጃዎችን ይመርምሩ።",
      },
      {
        title: "ፕሮጀክቱን ያረጋግጡ",
        description:
          "ሥራው ከመጀመሩ በፊት የሥራውን ወሰን፣ አገልግሎት መኖር፣ ዋጋና ጊዜ ያረጋግጡ።",
      },
    ],
    note:
      "የአገልግሎት መኖር፣ መሣሪያዎች፣ ዋጋና የተከላ ጊዜ ለእያንዳንዱ ፕሮጀክት መረጋገጥ አለባቸው።",
    ctaHeading: "ስለ ሶላር ፕሮጀክትዎ ለመወያየት ዝግጁ ነዎት?",
    ctaText:
      "ፍላጎትዎን ለማብራራትና ቀጣይ እርምጃዎችን ለማወቅ አዳሙን ያግኙ።",
    ctaButton: "ያግኙን",
    phoneButton: "በ 0986357896 ይደውሉ",
  },
};

const serviceIcons = [Sun, PanelsTopLeft, Wrench, Lightbulb];

export default function ServicesPageContent({ initialLang = "en" }) {
  const [lang, setLang] = useState(initialLang);

  const t = content[lang];
  const page = servicesPageContent[lang];
  const contactHref = lang === "am" ? "/contact?lang=am" : "/contact";
  const servicesHref = lang === "am" ? "/services?lang=am" : "/services";

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div lang={lang} className="min-h-screen">
      <Header lang={lang} setLang={setLang} t={t} />

      <main>
        {/* Services hero */}
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
              {page.ctaButton}
              <ArrowRight size={18} />
            </a>
          </div>
        </section>

        {/* Service cards */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="max-w-3xl">
              <span className="section-label">{page.eyebrow}</span>
              <h2 className="section-title">{page.servicesHeading}</h2>
              <p className="section-description">{page.servicesIntro}</p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {page.services.map((service, index) => {
                const Icon = serviceIcons[index];

                return (
                  <article
                    key={service.title}
                    className="rounded-2xl border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:shadow-lg sm:p-8"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-green-700">
                      <Icon size={28} />
                    </div>

                    <h3 className="mt-5 text-xl font-extrabold text-[#0B3D5C]">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {service.description}
                    </p>

                    <ul className="mt-5 space-y-3">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-sm leading-6 text-slate-700"
                        >
                          <CheckCircle2
                            size={18}
                            className="mt-1 shrink-0 text-green-700"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={contactHref}
                      className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-green-700 hover:text-green-800"
                    >
                      {page.ctaButton}
                      <ArrowRight size={16} />
                    </a>
                  </article>
                );
              })}
            </div>

            <p className="mt-8 rounded-xl bg-slate-50 p-4 text-sm leading-7 text-slate-600">
              {page.note}
            </p>
          </div>
        </section>

        {/* Process */}
        <section className="section-padding bg-[#F3F4F6]">
          <div className="container-width">
            <div className="mx-auto max-w-2xl text-center">
              <span className="section-label">
                {lang === "am" ? "ሂደታችን" : "OUR PROCESS"}
              </span>
              <h2 className="section-title">{page.processHeading}</h2>
              <p className="section-description">{page.processIntro}</p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {page.steps.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-2xl border border-slate-100 bg-white p-6 sm:p-8"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0B3D5C] text-lg font-extrabold text-white">
                    {index + 1}
                  </span>

                  <h3 className="mt-5 text-lg font-bold text-[#0B3D5C]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="section-padding bg-white">
          <div className="container-width rounded-3xl bg-[#0B3D5C] px-6 py-12 text-white sm:px-12 sm:py-14">
            <h2 className="max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl">
              {page.ctaHeading}
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-200">
              {page.ctaText}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href={contactHref} className="btn-primary">
                {page.ctaButton}
                <ArrowRight size={17} />
              </a>

              <a
                href="tel:+251986357896"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/30 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                {page.phoneButton}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer t={t} />
    </div>
  );
}
