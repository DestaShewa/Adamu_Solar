
import ProjectsPageContent from "@/components/ProjectsPageContent";

export const metadata = {
  title: "Solar Projects | Adamu Solar",
  description:
    "Explore solar project examples and installation work from Adamu Solar in Arba Minch, Ethiopia.",
};

export default async function ProjectsPage({ searchParams }) {
  const params = await searchParams;
  const initialLang = params?.lang === "am" ? "am" : "en";

  return <ProjectsPageContent initialLang={initialLang} />;
}
