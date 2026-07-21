"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { mainNav } from "@/data/navigation";
import { site } from "@/data/site";
import { Container } from "./Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock scroll + Esc to close when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/85 backdrop-blur-xl shadow-[0_1px_0_rgb(15_23_42/0.06)]"
          : "bg-transparent",
      )}
    >
      <Container className="flex h-18 items-center justify-between py-3">
        <Logo />

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 lg:flex"
        >
          {mainNav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-primary"
                    : "text-slate-600 hover:text-primary hover:bg-primary-50",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" size="sm">
            Join the Chapter <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="rounded-xl p-2 text-ink hover:bg-slate-100 lg:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <MobileMenu pathname={pathname} onClose={() => setOpen(false)} />
        )}
      </AnimatePresence>
    </header>
  );
}

function Logo() {
  return (
    <Link href="/" className="flex items-center" aria-label={site.fullName}>
      <Image
        src="/logo.png"
        alt={site.fullName}
        width={520}
        height={158}
        priority
        className="h-10 w-auto sm:h-12"
      />
    </Link>
  );
}

function MobileMenu({
  pathname,
  onClose,
}: {
  pathname: string;
  onClose: () => void;
}) {
  return (
    <>
      <motion.div
        className="fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm lg:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.nav
        aria-label="Mobile"
        className="fixed inset-y-0 right-0 z-50 flex w-[86%] max-w-sm flex-col bg-white p-6 shadow-2xl lg:hidden"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 260 }}
      >
        <div className="flex items-center justify-between">
          <span className="font-heading font-extrabold text-ink">Menu</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-xl p-2 text-ink hover:bg-slate-100"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="mt-6 flex flex-col gap-1">
          {mainNav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-xl px-4 py-3 text-base font-semibold transition-colors",
                  active
                    ? "bg-primary-50 text-primary"
                    : "text-slate-700 hover:bg-slate-50",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="mt-auto pt-6">
          <Button href="/contact" className="w-full" size="lg">
            Join the Chapter <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </motion.nav>
    </>
  );
}
