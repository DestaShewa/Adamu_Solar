"use client";

import { useState } from "react";
import { content } from "@/lib/content";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import AboutPreview from "@/components/AboutPreview";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function HomePageContent({ initialLang = "en" }) {
  const [lang, setLang] = useState(initialLang);
  const t = content[lang];

  return (
    <div lang={lang} className="min-h-screen">
      <Header lang={lang} setLang={setLang} t={t} />

      <main>
        <Hero t={t} />
        <Services t={t} />
        <Projects t={t} />
        <AboutPreview t={t} />
        <ContactCTA t={t} />
      </main>

      <Footer t={t} />
    </div>
  );
}
