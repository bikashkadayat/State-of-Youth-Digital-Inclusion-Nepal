import type { Metadata } from "next";
import { Mail, MapPin, Clock } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/sections/ContactForm";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with State of Youth — Digital Inclusion Nepal. Volunteer, partner, or join the chapter to help close Nepal's digital divide.",
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email us",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: MapPin,
    label: "Where we work",
    value: `${site.region}, ${site.country}`,
  },
  {
    icon: Clock,
    label: "Response time",
    value: "We usually reply within 2–3 days",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let&apos;s build an{" "}
            <span className="text-gradient">inclusive digital Nepal</span>
          </>
        }
        description="Have a question, want to volunteer, or interested in partnering? We'd love to hear from you."
      />

      <section className="py-16 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.15fr]">
          {/* Info column */}
          <Reveal className="space-y-8">
            <div className="space-y-4">
              {contactInfo.map((c) => {
                const Icon = c.icon;
                const inner = (
                  <div className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-soft transition-colors hover:border-primary/20">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary-50 text-primary">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-500">
                        {c.label}
                      </p>
                      <p className="font-heading font-bold text-ink">
                        {c.value}
                      </p>
                    </div>
                  </div>
                );
                return c.href ? (
                  <a key={c.label} href={c.href} className="block">
                    {inner}
                  </a>
                ) : (
                  <div key={c.label}>{inner}</div>
                );
              })}
            </div>

            {/* Socials */}
            <div>
              <p className="text-sm font-semibold text-slate-500">Follow us</p>
              <div className="mt-3 flex gap-2.5">
                {site.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="grid h-11 w-11 place-items-center rounded-xl border border-slate-100 bg-white text-slate-600 shadow-soft transition-colors hover:bg-primary hover:text-white"
                  >
                    <SocialIcon name={s.icon} className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-slate-100 shadow-soft">
              <iframe
                title="Map of Kathmandu Valley, Nepal"
                src="https://www.openstreetmap.org/export/embed.html?bbox=85.2%2C27.6%2C85.55%2C27.8&layer=mapnik&marker=27.7172%2C85.324"
                className="h-full w-full grayscale-[0.2]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          {/* Form column */}
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
