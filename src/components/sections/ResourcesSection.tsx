import { Download, ExternalLink, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { resources, resourceCategories } from "@/data/resources";
import type { Resource } from "@/types";

export function ResourcesSection() {
  return (
    <section className="py-16 lg:py-24">
      <Container className="space-y-16">
        {resourceCategories.map((category) => {
          const items = resources.filter((r) => r.category === category);
          if (!items.length) return null;
          return (
            <div key={category}>
              <Reveal className="mb-8 flex items-end justify-between gap-4">
                <h2 className="font-heading text-2xl font-bold text-ink">
                  {category}
                </h2>
                <span className="hidden h-px flex-1 bg-slate-100 sm:block" />
                <span className="text-sm text-slate-400">
                  {items.length} {items.length === 1 ? "item" : "items"}
                </span>
              </Reveal>
              <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {items.map((r) => (
                  <StaggerItem key={r.title}>
                    <ResourceCard resource={r} />
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          );
        })}
      </Container>
    </section>
  );
}

function ResourceCard({ resource }: { resource: Resource }) {
  const Icon = resource.icon;
  const isLink = resource.type === "link";
  return (
    <a
      href={resource.href}
      target={isLink ? "_blank" : undefined}
      rel={isLink ? "noreferrer" : undefined}
      className="group flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-hover"
    >
      <div className="flex items-center justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-50 text-primary">
          <Icon className="h-6 w-6" />
        </span>
        <span className="rounded-full bg-light px-3 py-1 text-xs font-semibold text-slate-500">
          {resource.meta}
        </span>
      </div>
      <h3 className="mt-5 font-heading text-lg font-bold text-ink">
        {resource.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
        {resource.description}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5">
        {isLink ? (
          <>
            Visit resource <ExternalLink className="h-4 w-4" />
          </>
        ) : resource.type === "download" ? (
          <>
            Download <Download className="h-4 w-4" />
          </>
        ) : (
          <>
            Read guide <ArrowRight className="h-4 w-4" />
          </>
        )}
      </span>
    </a>
  );
}
