import { ArrowRight, Sun, ShieldCheck, Zap } from "lucide-react";

export default function Hero({ t }) {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#0B3D5C] text-white"
    >
      <div className="absolute inset-0 -z-20">
        <img
          src="/images/hero-solar.jpg"
          alt=""
          className="h-full w-full object-cover"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#06263D]/95 via-[#0B3D5C]/85 to-[#0B3D5C]/35" />

      <div className="container-width grid min-h-[610px] items-center gap-12 py-20 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold tracking-[0.14em] text-green-200">
            <Sun size={15} />
            {t.heroEyebrow}
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
            {t.heroTitle}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
            {t.tagline}
          </p>

          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
            {t.heroText}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">
              {t.primaryButton}
              <ArrowRight size={17} />
            </a>

            <a
              href="#services"
              className="btn-secondary border-white/30 bg-white/10 text-white hover:bg-white/20"
            >
              {t.secondaryButton}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-200">
            <span className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-green-300" />
              {t.location}
            </span>
            <span className="flex items-center gap-2">
              <Zap size={18} className="text-amber-300" />
              {t.serviceLabel}
            </span>
          </div>
        </div>

        <div className="hidden lg:flex lg:justify-center">
          <div className="relative flex h-[340px] w-[340px] items-center justify-center rounded-full border border-white/20 bg-white/[0.06]">
            <div className="absolute h-[270px] w-[270px] rounded-full border border-white/20" />
            <div className="absolute h-[200px] w-[200px] rounded-full border border-white/20" />

            <div className="relative flex h-32 w-32 items-center justify-center rounded-3xl bg-white text-[#0B3D5C] shadow-2xl shadow-black/20">
              <Sun size={78} strokeWidth={1.3} />
            </div>

            <div className="absolute right-1 top-10 rounded-xl border border-white/20 bg-[#0B3D5C]/90 px-4 py-3 shadow-lg">
              <Sun size={21} className="text-amber-300" />
              <span className="mt-1 block text-xs font-semibold text-white">
                Solar Energy
              </span>
            </div>

            <div className="absolute bottom-9 left-0 rounded-xl border border-white/20 bg-[#0B3D5C]/90 px-4 py-3 shadow-lg">
              <Zap size={21} className="text-green-300" />
              <span className="mt-1 block text-xs font-semibold text-white">
                Energy Solutions
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
