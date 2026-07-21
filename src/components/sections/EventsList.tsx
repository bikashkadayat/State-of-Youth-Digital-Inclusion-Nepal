"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, MapPin, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { events } from "@/data/events";
import { cn } from "@/lib/utils";
import type { EventItem } from "@/types";

const tabs = [
  { key: "upcoming", label: "Upcoming Events" },
  { key: "past", label: "Past Events" },
] as const;

export function EventsList() {
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");
  const list = events.filter((e) => e.status === tab);

  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="mx-auto mb-12 flex w-fit rounded-full border border-slate-200 bg-white p-1.5 shadow-soft">
          {tabs.map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setTab(t.key)}
              className={cn(
                "relative rounded-full px-6 py-2.5 text-sm font-semibold transition-colors",
                tab === t.key ? "text-white" : "text-slate-600 hover:text-primary",
              )}
            >
              {tab === t.key && (
                <motion.span
                  layoutId="event-tab"
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{ type: "spring", damping: 30, stiffness: 320 }}
                />
              )}
              <span className="relative">{t.label}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="grid gap-7 md:grid-cols-2 lg:grid-cols-3"
          >
            {list.length ? (
              list.map((e) => <EventCard key={e.id} event={e} />)
            ) : (
              <p className="col-span-full py-12 text-center text-slate-500">
                No {tab} events right now — check back soon.
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}

function EventCard({ event }: { event: EventItem }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-hover">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-primary shadow-soft backdrop-blur">
          {event.tag}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4 text-primary" />
            {event.dateLabel}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-accent" />
            {event.location}
          </span>
        </div>
        <h3 className="mt-3 font-heading text-lg font-bold text-ink">
          {event.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
          {event.description}
        </p>
        <button
          type="button"
          className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-primary hover:gap-2.5"
        >
          {event.status === "upcoming" ? "Register interest" : "View recap"}
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>
    </article>
  );
}
