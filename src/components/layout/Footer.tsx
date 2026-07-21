import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { Container } from "./Container";
import { Newsletter } from "@/components/sections/Newsletter";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { footerNav } from "@/data/navigation";
import { site } from "@/data/site";
import { sdgs } from "@/data/sdgs";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-slate-300">
      {/* Newsletter band */}
      <Container className="pt-16">
        <Newsletter />
      </Container>

      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/95 p-1.5 shadow-soft">
              <Image
                src="/logo-mark.png"
                alt=""
                width={160}
                height={156}
                className="h-full w-full object-contain"
              />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-heading text-base font-extrabold text-white">
                State of Youth
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-wide text-secondary-400">
                Digital Inclusion Nepal
              </span>
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
            {site.description}
          </p>
          <div className="mt-6 space-y-2 text-sm">
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2.5 text-slate-300 hover:text-white"
            >
              <Mail className="h-4 w-4 text-secondary-400" />
              {site.email}
            </a>
            <p className="flex items-center gap-2.5 text-slate-400">
              <MapPin className="h-4 w-4 text-secondary-400" />
              {site.region}, {site.country}
            </p>
          </div>
        </div>

        {/* Nav columns */}
        {footerNav.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              {col.title}
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {col.items.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-slate-400 transition-colors hover:text-secondary-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* SDGs + socials */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            SDG Focus
          </h3>
          <div className="mt-5 flex flex-wrap gap-2">
            {sdgs.map((s) => (
              <span
                key={s.number}
                className="grid h-11 w-11 place-items-center rounded-xl text-sm font-bold text-white"
                style={{ backgroundColor: s.color }}
                title={`SDG ${s.number}: ${s.title}`}
              >
                {s.number}
              </span>
            ))}
          </div>

          <h3 className="mt-8 text-sm font-bold uppercase tracking-wider text-white">
            Follow Us
          </h3>
          <div className="mt-4 flex gap-2.5">
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-slate-300 transition-colors hover:bg-primary hover:text-white"
              >
                <SocialIcon name={s.icon} className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-sm text-slate-500 sm:flex-row">
          <p>
            © {2026} {site.fullName}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Built for Nepal&apos;s digital inclusion movement.
          </p>
        </Container>
      </div>
    </footer>
  );
}
