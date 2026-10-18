import ServicesPageContent from "@/components/ServicesPageContent";

export const instant = false;

export const metadata = {
  title: "Solar Services | Adamu Solar",
  description:
    "Explore solar installation, system design, maintenance, and consultation services from Adamu Solar in Arba Minch, Ethiopia.",
};

export default async function ServicesPage({ searchParams }) {
  const params = await searchParams;
  const initialLang = params?.lang === "am" ? "am" : "en";

  return <ServicesPageContent initialLang={initialLang} />;
}