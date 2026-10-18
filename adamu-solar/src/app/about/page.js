import AboutPageContent from "@/components/AboutPageContent";

export const instant = false;

export const metadata = {
  title: "About Adamu Solar | Solar Solutions in Arba Minch",
  description:
    "Learn about Adamu Solar and its approach to solar energy solutions in Arba Minch, Ethiopia.",
};

export default async function AboutPage({ searchParams }) {
  const params = await searchParams;
  const initialLang = params?.lang === "am" ? "am" : "en";

  return <AboutPageContent initialLang={initialLang} />;
}