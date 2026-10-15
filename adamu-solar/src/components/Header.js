"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Sun, Languages } from "lucide-react";

export default function Header({ lang, setLang, t }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.services, href: "/services" },
    { label: t.nav.projects, href: "/projects" },
    { label: t.nav.contact, href: "/contact" },
  ];

  function closeMenu() {
    setMenuOpen(false);
  }

  function navigateToLanguage(nextLang) {
    setLang(nextLang);
    document.documentElement.lang = nextLang;

    const params = new URLSearchParams(window.location.search);
    params.set("lang", nextLang);

    const query = params.toString();
    router.replace(`${pathname}${query ? `?${query}` : ""}`);
  }

  function pageHref(href) {
    return lang === "am" ? `${href}?lang=am` : href;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-md">
      <div className="container-width flex min-h-[76px] items-center justify-between gap-4">
        <a
          href={pageHref("/")}
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-3"
          aria-label={t.brand}
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0B3D5C] text-white">
            <Sun size={26} strokeWidth={2.2} />
          </span>

          <span className="flex flex-col">
            <span className="text-base font-extrabold tracking-tight text-[#0B3D5C]">
              {t.brand}
            </span>
            <span className="hidden text-[10px] font-semibold uppercase tracking-wider text-slate-500 sm:block">
              Solar Energy Solutions
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <a
                key={item.href}
                href={pageHref(item.href)}
                aria-current={active ? "page" : undefined}
                className={`text-sm font-semibold transition hover:text-green-700 ${
                  active ? "text-green-700" : "text-slate-600"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <div className="flex items-center rounded-lg border border-slate-200 p-1">
            <Languages size={15} className="ml-1 text-slate-500" />

            <button
              type="button"
              onClick={() => navigateToLanguage("en")}
              aria-pressed={lang === "en"}
              className={`rounded-md px-2 py-1.5 text-xs font-bold ${
                lang === "en"
                  ? "bg-[#0B3D5C] text-white"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              EN
            </button>

            <button
              type="button"
              onClick={() => navigateToLanguage("am")}
              aria-pressed={lang === "am"}
              className={`rounded-md px-2 py-1.5 text-xs font-bold ${
                lang === "am"
                  ? "bg-[#0B3D5C] text-white"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              አማ
            </button>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-[#0B3D5C] lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          className="border-t border-slate-100 bg-white px-5 py-3 lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="container-width flex flex-col">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={pageHref(item.href)}
                onClick={closeMenu}
                aria-current={pathname === item.href ? "page" : undefined}
                className="border-b border-slate-100 py-3 text-sm font-semibold text-slate-700 last:border-0 hover:text-green-700"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
