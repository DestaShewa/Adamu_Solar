import ProjectsPageContent from "@/components/ProjectsPageContent";

export const instant = false;

export const metadata = {
  title: "Solar Projects | Adamu Solar",
  description:
    "Explore solar project photos and installation work from Adamu Solar in Arba Minch, Ethiopia.",
};

export default async function ProjectsPage({ searchParams }) {
  const params = await searchParams;
  const initialLang = params?.lang === "am" ? "am" : "en";

  return <ProjectsPageContent initialLang={initialLang} />;
}