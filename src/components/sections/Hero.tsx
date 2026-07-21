"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Users, GraduationCap } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { img } from "@/data/images";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-light pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* decorative background */}
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-2 text-sm font-semibold text-primary shadow-soft">
              <Sparkles className="h-4 w-4 text-accent" />
              Digital Inclusion Nepal Chapter
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="h-display mt-6 font-extrabold text-ink"
          >
            Bridging Nepal&apos;s{" "}
            <span className="text-gradient">Digital Divide</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600"
          >
            Empowering youth and underserved communities with the knowledge,
            skills and confidence to thrive in the digital future.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button href="/contact" size="lg">
              Join the Chapter <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/about" size="lg" variant="outline">
              Learn More
            </Button>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-10 flex items-center gap-6 text-sm text-slate-500"
          >
            <span className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              500+ youth reached
            </span>
            <span className="hidden h-4 w-px bg-slate-300 sm:block" />
            <span className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-accent" />
              20+ communities
            </span>
          </motion.div>
        </motion.div>

        {/* Image cluster */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-card ring-1 ring-black/5">
            <Image
              src={img.heroMain}
              alt="Youth engaged in a digital literacy session in Nepal"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/25 to-transparent" />
          </div>

          {/* floating stat card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute -bottom-6 -left-4 hidden rounded-2xl bg-white p-4 shadow-hover sm:flex sm:items-center sm:gap-3"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent/15 text-accent">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div>
              <p className="text-2xl font-extrabold leading-none text-ink">
                10+
              </p>
              <p className="text-xs text-slate-500">Training programs</p>
            </div>
          </motion.div>

          {/* floating mini image */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute -right-5 -top-6 hidden aspect-square w-32 overflow-hidden rounded-2xl shadow-hover ring-4 ring-white lg:block"
          >
            <Image
              src={img.heroFloat}
              alt="Facilitator teaching digital skills"
              fill
              sizes="128px"
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
