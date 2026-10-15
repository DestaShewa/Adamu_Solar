import { MessageCircle, Phone, MapPin, ArrowUpRight } from "lucide-react";

const whatsappUrl =
  "https://wa.me/251986357896?text=Hello%20Adamu%2C%20I%20would%20like%20to%20discuss%20a%20solar%20project.";

export default function ContactCTA({ t }) {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-width">
        <div className="relative overflow-hidden rounded-3xl bg-[#0B3D5C] px-6 py-12 text-white sm:px-12 sm:py-16">
          <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border-[35px] border-white/[0.06]" />
          <div className="absolute -bottom-28 right-48 h-64 w-64 rounded-full border-[35px] border-white/[0.05]" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-center">
            <div>
              <span className="text-xs font-extrabold tracking-[0.15em] text-green-300">
                {t.contactLabel}
              </span>

              <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                {t.contactTitle}
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-200 sm:text-base">
                {t.contactText}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  <MessageCircle size={18} />
                  {t.contactButton}
                  <ArrowUpRight size={16} />
                </a>

                <a href="tel:+251986357896" className="btn-secondary">
                  <Phone size={17} />
                  {t.phoneButton}
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/[0.07] p-6">
              <h3 className="text-lg font-bold">{t.contactHeading}</h3>

              <div className="mt-6 flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <MapPin size={21} className="text-green-300" />
                </span>
                <div>
                  <p className="text-sm font-semibold">{t.location}</p>
                  <p className="mt-1 text-xs leading-6 text-slate-300">
                    Service coverage to be confirmed with Adamu before publication.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <Phone size={21} className="text-green-300" />
                </span>
                <div>
                  <p className="text-sm font-semibold">+251 986 357 896</p>
                  <p className="mt-1 text-xs text-slate-300">
                    Phone and WhatsApp
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
