"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setDone(true);
    setEmail("");
  }

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary-600 to-secondary-600 p-8 sm:p-12">
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-20 left-10 h-52 w-52 rounded-full bg-accent/20 blur-2xl" />

      <div className="relative grid items-center gap-8 lg:grid-cols-2">
        <div>
          <h2 className="h-section font-bold text-white">
            Stay in the loop
          </h2>
          <p className="mt-3 max-w-md text-white/85">
            Get updates on workshops, events and digital inclusion stories from
            across Nepal. No spam — just impact.
          </p>
        </div>

        <div>
          {done ? (
            <div
              role="status"
              className="flex items-center gap-3 rounded-2xl bg-white/15 p-5 text-white backdrop-blur"
            >
              <CheckCircle2 className="h-6 w-6 shrink-0 text-accent-100" />
              <p className="font-medium">
                Thank you! You&apos;re subscribed to our updates.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="space-y-2">
              <div className="flex flex-col gap-3 sm:flex-row">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full flex-1 rounded-full border-0 bg-white px-5 py-3.5 text-ink placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-white/40"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-black"
                >
                  Subscribe <Send className="h-4 w-4" />
                </button>
              </div>
              {error && (
                <p className="pl-2 text-sm text-accent-100">{error}</p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
