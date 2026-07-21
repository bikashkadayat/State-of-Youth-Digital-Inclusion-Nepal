"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Errors = Partial<Record<keyof FormState, string>>;

const empty: FormState = { name: "", email: "", subject: "", message: "" };

export function ContactForm() {
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  function validate(): boolean {
    const e: Errors = {};
    if (form.name.trim().length < 2) e.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email address.";
    if (form.subject.trim().length < 3) e.subject = "Please add a subject.";
    if (form.message.trim().length < 10)
      e.message = "Please write a little more (min. 10 characters).";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    // UI-only mock — no backend. Wire an API route here later.
    setTimeout(() => setStatus("done"), 900);
  }

  function update(key: keyof FormState, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  if (status === "done") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex h-full flex-col items-center justify-center rounded-3xl border border-accent/20 bg-accent-50 p-10 text-center"
      >
        <span className="grid h-16 w-16 place-items-center rounded-full bg-accent text-white">
          <CheckCircle2 className="h-8 w-8" />
        </span>
        <h3 className="mt-5 font-heading text-2xl font-bold text-ink">
          Message sent!
        </h3>
        <p className="mt-2 max-w-sm text-slate-600">
          Thank you for reaching out, {form.name.split(" ")[0] || "friend"}.
          We&apos;ll get back to you at {form.email} soon.
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(empty);
            setStatus("idle");
          }}
          className="mt-6 text-sm font-semibold text-primary hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-3xl border border-slate-100 bg-white p-7 shadow-card sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Name"
          error={errors.name}
          input={
            <input
              type="text"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="Your full name"
              className={inputCls(!!errors.name)}
            />
          }
        />
        <Field
          label="Email"
          error={errors.email}
          input={
            <input
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder="you@example.com"
              className={inputCls(!!errors.email)}
            />
          }
        />
      </div>

      <div className="mt-5">
        <Field
          label="Subject"
          error={errors.subject}
          input={
            <input
              type="text"
              value={form.subject}
              onChange={(e) => update("subject", e.target.value)}
              placeholder="How can we help?"
              className={inputCls(!!errors.subject)}
            />
          }
        />
      </div>

      <div className="mt-5">
        <Field
          label="Message"
          error={errors.message}
          input={
            <textarea
              rows={5}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              placeholder="Tell us more…"
              className={inputCls(!!errors.message)}
            />
          }
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-primary-600 disabled:opacity-70 sm:w-auto"
      >
        {status === "sending" ? (
          <>
            Sending <Loader2 className="h-4 w-4 animate-spin" />
          </>
        ) : (
          <>
            Send Message <Send className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  input,
}: {
  label: string;
  error?: string;
  input: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-ink">
        {label}
      </span>
      {input}
      {error && <span className="mt-1 block text-sm text-sdg4">{error}</span>}
    </label>
  );
}

function inputCls(hasError: boolean) {
  return [
    "w-full rounded-xl border bg-light px-4 py-3 text-ink placeholder:text-slate-400 transition-colors focus:bg-white focus:outline-none focus:ring-4",
    hasError
      ? "border-sdg4/50 focus:ring-sdg4/15"
      : "border-slate-200 focus:border-primary focus:ring-primary/15",
  ].join(" ");
}
