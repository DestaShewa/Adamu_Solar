
"use client";

import { useEffect, useState } from "react";
import {
  Phone,
  MessageCircle,
  MapPin,
  Send,
  Sun,
  Clock,
  CheckCircle2,
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { content } from "@/lib/content";

const pageContent = {
  en: {
    eyebrow: "CONTACT US",
    title: "Let's discuss your solar project.",
    intro:
      "Have a question or planning a solar installation? Contact Adamu to discuss your energy needs and possible next steps.",
    contactHeading: "Get in touch",
    contactText:
      "Choose your preferred contact method. Please confirm service availability and project details directly with Adamu.",
    phoneLabel: "Phone",
    phoneValue: "0986357896",
    phoneDescription: "Call to discuss your requirements.",
    whatsappLabel: "WhatsApp",
    whatsappDescription: "Send a message about your project.",
    locationLabel: "Location",
    locationValue: "Arba Minch, Ethiopia",
    locationDescription: "Ask about service in your area.",
    formHeading: "Send a project inquiry",
    formIntro:
      "Complete the form and continue to WhatsApp to send your inquiry.",
    nameLabel: "Your name",
    namePlaceholder: "Enter your name",
    phoneFieldLabel: "Your phone number",
    phonePlaceholder: "Enter your phone number",
    serviceLabel: "What do you need?",
    servicePlaceholder: "Select a service",
    services: [
      "Solar installation",
      "Solar system design",
      "Maintenance and repair",
      "Solar consultation",
      "Solar products",
      "Other inquiry",
    ],
    messageLabel: "Tell us about your project",
    messagePlaceholder:
      "Describe your location, energy needs, and project...",
    submitButton: "Continue to WhatsApp",
    requiredMessage: "Please complete all fields before continuing.",
    processHeading: "What happens next?",
    steps: [
      {
        title: "Send your inquiry",
        text: "Share your contact details and explain what you need.",
      },
      {
        title: "Discuss your requirements",
        text: "Talk through your project, location, and possible options.",
      },
      {
        title: "Confirm the details",
        text: "Agree on availability, pricing, and next steps before proceeding.",
      },
    ],
    note:
      "Submitting this form opens WhatsApp with your message prepared. You must press Send in WhatsApp to deliver it.",
  },
  am: {
    eyebrow: "ያግኙን",
    title: "ስለ ሶላር ፕሮጀክትዎ እንወያይ።",
    intro:
      "ጥያቄ አለዎት ወይስ የሶላር ተከላ እያቀዱ ነው? ስለ ኃይል ፍላጎትዎና ስለሚቀጥሉት እርምጃዎች ለመወያየት አዳሙን ያግኙ።",
    contactHeading: "እኛን ያግኙ",
    contactText:
      "የሚመችዎትን የግንኙነት ዘዴ ይምረጡ። አገልግሎቱ መኖሩንና የፕሮጀክት ዝርዝሮችን በቀጥታ ከአዳሙ ያረጋግጡ።",
    phoneLabel: "ስልክ",
    phoneValue: "0986357896",
    phoneDescription: "ስለ ፍላጎትዎ ለመወያየት ይደውሉ።",
    whatsappLabel: "ዋትስአፕ",
    whatsappDescription: "ስለ ፕሮጀክትዎ መልዕክት ይላኩ።",
    locationLabel: "አካባቢ",
    locationValue: "አርባ ምንጭ፣ ኢትዮጵያ",
    locationDescription: "በአካባቢዎ አገልግሎት መኖሩን ይጠይቁ።",
    formHeading: "ስለ ፕሮጀክትዎ መልዕክት ይላኩ",
    formIntro:
      "ቅጹን ይሙሉና መልዕክትዎን ለመላክ ወደ ዋትስአፕ ይቀጥሉ።",
    nameLabel: "ስምዎ",
    namePlaceholder: "ስምዎን ያስገቡ",
    phoneFieldLabel: "ስልክ ቁጥርዎ",
    phonePlaceholder: "ስልክ ቁጥርዎን ያስገቡ",
    serviceLabel: "ምን ዓይነት አገልግሎት ይፈልጋሉ?",
    servicePlaceholder: "አገልግሎት ይምረጡ",
    services: [
      "የሶላር ተከላ",
      "የሶላር ሲስተም ዲዛይን",
      "ጥገናና ማስተካከያ",
      "የሶላር ምክክር",
      "የሶላር ምርቶች",
      "ሌላ ጥያቄ",
    ],
    messageLabel: "ስለ ፕሮጀክትዎ ያብራሩ",
    messagePlaceholder:
      "ቦታዎን፣ የኃይል ፍላጎትዎንና ፕሮጀክትዎን ይግለጹ...",
    submitButton: "ወደ ዋትስአፕ ይቀጥሉ",
    requiredMessage: "እባክዎ ከመቀጠልዎ በፊት ሁሉንም መስኮች ይሙሉ።",
    processHeading: "ቀጥሎ ምን ይሆናል?",
    steps: [
      {
        title: "ጥያቄዎን ይላኩ",
        text: "የግንኙነት መረጃዎን ያጋሩና ፍላጎትዎን ያብራሩ።",
      },
      {
        title: "ስለ ፍላጎትዎ ይወያዩ",
        text: "ስለ ፕሮጀክትዎ፣ ቦታዎና ሊሆኑ ስለሚችሉ አማራጮች ይወያዩ።",
      },
      {
        title: "ዝርዝሮችን ያረጋግጡ",
        text: "ከመቀጠልዎ በፊት አገልግሎት መኖሩን፣ ዋጋንና ቀጣይ እርምጃዎችን ያረጋግጡ።",
      },
    ],
    note:
      "ይህን ቅጽ ሲያስገቡ መልዕክትዎ ተዘጋጅቶ ዋትስአፕ ይከፈታል። መልዕክቱን ለመላክ በዋትስአፕ ላይ Send የሚለውን ይጫኑ።",
  },
};

const WHATSAPP_NUMBER = "251986357896";
const PHONE_NUMBER = "+251986357896";

export default function ContactPageContent({ initialLang = "en" }) {
  const [lang, setLang] = useState(initialLang);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [error, setError] = useState("");

  const t = content[lang];
  const page = pageContent[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  function updateField(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    if (error) setError("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (
      !form.name.trim() ||
      !form.phone.trim() ||
      !form.service ||
      !form.message.trim()
    ) {
      setError(page.requiredMessage);
      return;
    }

    const message =
      lang === "am"
        ? `የሶላር ፕሮጀክት ጥያቄ\n\nስም: ${form.name}\nስልክ: ${form.phone}\nአገልግሎት: ${form.service}\nዝርዝር: ${form.message}`
        : `Solar Project Inquiry\n\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\nProject details: ${form.message}`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  const contactCards = [
    {
      icon: Phone,
      title: page.phoneLabel,
      value: page.phoneValue,
      description: page.phoneDescription,
      href: `tel:${PHONE_NUMBER}`,
    },
    {
      icon: MessageCircle,
      title: page.whatsappLabel,
      value: "WhatsApp",
      description: page.whatsappDescription,
      href: `https://wa.me/${WHATSAPP_NUMBER}`,
    },
    {
      icon: MapPin,
      title: page.locationLabel,
      value: page.locationValue,
      description: page.locationDescription,
      href: null,
    },
  ];

  return (
    <div lang={lang} className="min-h-screen">
      <Header lang={lang} setLang={setLang} t={t} />

      <main>
        {/* Hero */}
        <section className="bg-[#0B3D5C] px-4 py-20 text-white sm:py-24">
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

        {/* Contact details and inquiry form */}
        <section className="section-padding bg-white">
          <div className="container-width grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <span className="section-label">
                {lang === "am" ? "ግንኙነት" : "GET IN TOUCH"}
              </span>

              <h2 className="section-title">{page.contactHeading}</h2>

              <p className="section-description">{page.contactText}</p>

              <div className="mt-8 space-y-4">
                {contactCards.map((card) => {
                  const Icon = card.icon;

                  const contentCard = (
                    <div className="flex gap-4 rounded-2xl border border-slate-200 p-5 transition hover:border-green-200">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-700">
                        <Icon size={23} />
                      </div>

                      <div>
                        <h3 className="font-bold text-[#0B3D5C]">
                          {card.title}
                        </h3>
                        <p className="mt-1 font-semibold text-slate-800">
                          {card.value}
                        </p>
                        <p className="mt-1 text-sm leading-6 text-slate-500">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  );

                  return card.href ? (
                    <a
                      key={card.title}
                      href={card.href}
                      target={
                        card.title === page.whatsappLabel
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        card.title === page.whatsappLabel
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {contentCard}
                    </a>
                  ) : (
                    <div key={card.title}>{contentCard}</div>
                  );
                })}
              </div>

              <div className="mt-6 flex gap-3 rounded-xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">
                <Clock size={19} className="mt-1 shrink-0 text-green-700" />
                <p>{page.contactText}</p>
              </div>
            </div>

            {/* Inquiry form */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-start gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0B3D5C] text-white">
                  <Sun size={25} />
                </div>

                <div>
                  <h2 className="text-2xl font-extrabold text-[#0B3D5C]">
                    {page.formHeading}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {page.formIntro}
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    {page.nameLabel}
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    value={form.name}
                    onChange={updateField}
                    placeholder={page.namePlaceholder}
                    autoComplete="name"
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    {page.phoneFieldLabel}
                  </label>

                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={updateField}
                    placeholder={page.phonePlaceholder}
                    autoComplete="tel"
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-service"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    {page.serviceLabel}
                  </label>

                  <select
                    id="contact-service"
                    name="service"
                    value={form.service}
                    onChange={updateField}
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                  >
                    <option value="" disabled>
                      {page.servicePlaceholder}
                    </option>

                    {page.services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    {page.messageLabel}
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={updateField}
                    placeholder={page.messagePlaceholder}
                    rows={5}
                    required
                    className="w-full resize-y rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                  />
                </div>

                {error && (
                  <p role="alert" className="text-sm font-medium text-red-600">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-green-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  <Send size={17} />
                  {page.submitButton}
                </button>

                <p className="flex items-start gap-2 text-xs leading-6 text-slate-500">
                  <CheckCircle2
                    size={16}
                    className="mt-1 shrink-0 text-green-700"
                  />
                  {page.note}
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Next steps */}
        <section className="section-padding bg-[#F3F4F6]">
          <div className="container-width">
            <div className="max-w-2xl">
              <span className="section-label">
                {lang === "am" ? "ቀጣይ እርምጃዎች" : "NEXT STEPS"}
              </span>
              <h2 className="section-title">{page.processHeading}</h2>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {page.steps.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-2xl border border-slate-100 bg-white p-6"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0B3D5C] text-lg font-extrabold text-white">
                    {index + 1}
                  </span>

                  <h3 className="mt-5 font-bold text-[#0B3D5C]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {step.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer t={t} />
    </div>
  );
}
