import ContactPageContent from "@/components/ContactPageContent";

export const instant = false;

export const metadata = {
  title: "Contact Adamu Solar | Arba Minch, Ethiopia",
  description:
    "Contact Adamu Solar about solar installation, system design, maintenance, and project inquiries in Arba Minch, Ethiopia.",
};

export default async function ContactPage({ searchParams }) {
  const params = await searchParams;
  const initialLang = params?.lang === "am" ? "am" : "en";

  return <ContactPageContent initialLang={initialLang} />;
}