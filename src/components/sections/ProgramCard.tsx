"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Program } from "@/types";

const accentMap = {
  primary: {
    ring: "hover:border-primary/40",
    icon: "bg-primary-50 text-primary",
    bar: "from-primary to-secondary",
  },
  secondary: {
    ring: "hover:border-secondary/40",
    icon: "bg-secondary-50 text-secondary-600",
    bar: "from-secondary to-accent",
  },
  accent: {
    ring: "hover:border-accent/40",
    icon: "bg-accent-50 text-accent-600",
    bar: "from-accent to-secondary",
  },
} as const;

export function ProgramCard({ program }: { program: Program }) {
  const [open, setOpen] = useState(false);
  const a = accentMap[program.accent];
  const Icon = program.icon;

  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-hover",
        a.ring,
      )}
    >
      <span
        className={cn(
          "absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r opacity-0 transition-opacity group-hover:opacity-100",
          a.bar,
        )}
      />
      <span
        className={cn(
          "grid h-14 w-14 place-items-center rounded-2xl transition-transform group-hover:scale-105",
          a.icon,
        )}
      >
        <Icon className="h-7 w-7" />
      </span>

      <h3 className="mt-5 font-heading text-xl font-bold text-ink">
        {program.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">
        {program.summary}
      </p>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              {program.details}
            </p>
            <ul className="mt-4 space-y-2">
              {program.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-2 text-sm text-slate-600"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {h}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-primary hover:gap-2.5"
      >
        {open ? (
          <>
            Show less <Minus className="h-4 w-4" />
          </>
        ) : (
          <>
            Read more <Plus className="h-4 w-4" />
          </>
        )}
      </button>
    </div>
  );
}
