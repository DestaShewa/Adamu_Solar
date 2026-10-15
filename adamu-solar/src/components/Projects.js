import { ImagePlus, ArrowUpRight } from "lucide-react";

const projects = [
  { image: "/images/project-1.jpg", fallback: "01" },
  { image: "/images/project-2.jpg", fallback: "02" },
];

export default function Projects({ t }) {
  return (
    <section id="projects" className="section-padding bg-[#F3F4F6]">
      <div className="container-width">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="section-label">{t.projectsLabel}</span>
            <h2 className="section-title">{t.projectsTitle}</h2>
            <p className="section-description">{t.projectsText}</p>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-green-700"
          >
            {t.primaryButton}
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.fallback}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >
              <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-[#0B3D5C] to-[#176B70] sm:h-80">
                <img
                  src={project.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />

                <div className="absolute inset-0 bg-[#0B3D5C]/25" />

                <div className="relative flex max-w-xs flex-col items-center px-6 text-center text-white">
                  <ImagePlus size={42} strokeWidth={1.4} />
                  <p className="mt-4 text-sm font-semibold">
                    {t.projectPlaceholder}
                  </p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-green-700">
                  {`0${index + 1}`}
                </p>
                <h3 className="mt-2 text-xl font-bold text-[#0B3D5C]">
                  {t.projectNames[index]}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
