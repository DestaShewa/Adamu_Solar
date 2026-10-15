import HomePageContent from "@/components/HomePageContent";

export default async function HomePage({ searchParams }) {
  const params = await searchParams;
  const initialLang = params?.lang === "am" ? "am" : "en";

  return <HomePageContent initialLang={initialLang} />;
}
