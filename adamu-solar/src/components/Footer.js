import { Sun, Phone, MapPin, MessageCircle } from "lucide-react";

const whatsappUrl = "https://wa.me/251986357896";

export default function Footer({ t }) {
 

  return (
    <footer className="bg-[#071F30] text-slate-300">
      <div className="container-width grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <a href="#home" className="inline-flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-amber-300">
              <Sun size={25} />
            </span>
            <span className="text-lg font-extrabold text-white">
              {t.brand}
            </span>
          </a>

          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
            {t.tagline}
          </p>

          <p className="mt-3 text-xs leading-6 text-slate-400">
            {t.footerText}
          </p>
        </div>

        <div>
          <h3 className="font-bold text-white">{t.quickLinks}</h3>
          <nav className="mt-4 flex flex-col items-start gap-3 text-sm">
            <a className="hover:text-green-300" href="#home">{t.nav.home}</a>
            <a className="hover:text-green-300" href="#about">{t.nav.about}</a>
            <a className="hover:text-green-300" href="#services">{t.nav.services}</a>
            <a className="hover:text-green-300" href="#projects">{t.nav.projects}</a>
            <a className="hover:text-green-300" href="#contact">{t.nav.contact}</a>
          </nav>
        </div>

        <div>
          <h3 className="font-bold text-white">{t.contactHeading}</h3>
          <div className="mt-4 flex flex-col gap-4 text-sm">
            <p className="flex items-center gap-3">
              <MapPin size={17} className="shrink-0 text-green-300" />
              {t.location}
            </p>
            <a
              href="tel:+251986357896"
              className="flex items-center gap-3 hover:text-white"
            >
              <Phone size={17} className="shrink-0 text-green-300" />
              +251 986 357 896
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-white"
            >
              <MessageCircle size={17} className="shrink-0 text-green-300" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-width flex flex-col gap-2 py-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {t.brand}. {t.copyright}</p>
          <p>{t.location}</p>
        </div>
      </div>
    </footer>
  );
}
