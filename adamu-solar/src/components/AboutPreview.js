import { ArrowRight, Sun, Leaf, PanelsTopLeft } from "lucide-react";

export default function AboutPreview({ t }) {
  return (
    <section id="about" className="section-padding bg-[#F3F4F6]">
      <div className="container-width grid items-center gap-12 lg:grid-cols-2">
        <div className="relative mx-auto w-full max-w-lg">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0B3D5C] to-[#176B70] p-8 text-white sm:p-12">
            <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border-[25px] border-white/[0.08]" />

            <div className="relative flex min-h-[270px] flex-col justify-between">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
                <Sun size={39} className="text-amber-300" />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-green-300">
                  Adamu Solar
                </p>
                <h3 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
                  {t.tagline}
                </h3>
              </div>

              <div className="mt-8 flex gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                  <PanelsTopLeft size={22} />
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                  <Leaf size={22} />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <span className="section-label">{t.aboutLabel}</span>
          <h2 className="section-title">{t.aboutTitle}</h2>
          <p className="section-description">{t.aboutText}</p>

          <a href="#contact" className="btn-primary mt-8">
            {t.aboutButton}
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
