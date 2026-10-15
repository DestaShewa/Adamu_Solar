import {
  Sun,
  PanelsTopLeft,
  Wrench,
  Lightbulb,
  ArrowUpRight,
} from "lucide-react";

const icons = [Sun, PanelsTopLeft, Wrench, Lightbulb];

export default function Services({ t }) {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-width">
        <div className="max-w-2xl">
          <span className="section-label">{t.serviceLabel}</span>
          <h2 className="section-title">{t.serviceTitle}</h2>
          <p className="section-description">{t.serviceText}</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.services.map((service, index) => {
            const Icon = icons[index];

            return (
              <article
                key={service.title}
                className="group rounded-2xl border border-slate-100 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl hover:shadow-slate-200/60"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-green-700 transition group-hover:bg-green-600 group-hover:text-white">
                  <Icon size={27} strokeWidth={1.8} />
                </div>

                <h3 className="mt-6 text-lg font-bold text-[#0B3D5C]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>

                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-green-700"
                >
                  {t.primaryButton}
                  <ArrowUpRight size={16} />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
