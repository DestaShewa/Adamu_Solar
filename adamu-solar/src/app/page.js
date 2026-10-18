
import HomePageContent from "@/components/HomePageContent";

export const instant = false;

export default async function HomePage({ searchParams }) {
  const params = await searchParams;
  const initialLang = params?.lang === "am" ? "am" : "en";

  return <HomePageContent initialLang={initialLang} />;
}
