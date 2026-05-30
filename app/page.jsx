"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Check,
  Mail,
  ShieldCheck
} from "lucide-react";

function SiftLogo({ size = 72 }) {
  return (
    <img
      src="/sift-logo.jpg"
      alt="SIFT Systemics logo"
      width={size}
      height={size}
      style={{ objectFit: "contain" }}
    />
  );
}

const stats = [
  {
    value: "7 in 10",
    label:
      "cases exhibited identifiable and repeatable fatal energy pathway patterns"
  },
  {
    value: "200K+",
    label:
      "incident cases studied across multiple industries and sectors"
  },
  {
    value: "83%",
    label:
      "of severe events had survivable outcomes — yet extreme fatal physics"
  }
];

const bullets = [
  "Find high-consequence patterns buried in anonymized low-severity incident data",
  "Prioritize safety reviews by fatal-risk proximity, not just frequency",
  "Create an owner-ready evidence trail for contractor and operational risk governance",
  "Start with a limited, anonymized dataset before any larger engagement"
];

export default function SiftSystemicsLandingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    interest: "Incident / near-miss review",
    message: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value
    }));
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-8">
        <a href="#top" className="block">
          <SiftLogo size={86} />
        </a>

        <a
          href="#pilot"
          className="bg-black px-5 py-3 text-xs font-black uppercase tracking-wide text-white md:px-7 md:py-4"
        >
          Got Data?
        </a>
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-16 pt-6 md:grid-cols-[1fr_0.9fr] md:px-8 md:pb-24">
          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.28em] text-black/50">
              Incident Data as Risk Intelligence
            </p>

            <h1 className="max-w-4xl text-6xl font-black uppercase leading-[0.92] tracking-[-0.06em] md:text-8xl">
                Fatal Physics?
              <br />
              <span className="text-black/60">
                Sift Happens.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-xl font-semibold leading-9 text-black/75">
              Sift Systemics helps safety leaders find
              fatal-risk pathways buried inside ordinary
              low-severity incidents, near misses, and
              routine observations already being collected.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#pilot"
                className="inline-flex items-center justify-center gap-3 bg-black px-7 py-4 text-sm font-black uppercase tracking-wide text-white"
              >
                Ready to learn more?
                <ArrowRight className="h-5 w-5" />
              </a>

              <a
                href="#pilot"
                className="inline-flex items-center justify-center gap-3 border-2 border-black px-7 py-4 text-sm font-black uppercase tracking-wide"
              >
                Discuss a pilot
                <Mail className="h-5 w-5" />
              </a>

              <a
                href="/industry-report.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 border-2 border-black px-7 py-4 text-sm font-black uppercase tracking-wide"
              >
                View Industry Report
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <SiftLogo size={430} />
          </div>
        </section>

        <section className="border-y border-black bg-black px-6 py-12 text-white md:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="border-white/25 md:border-r md:pr-8 last:border-r-0"
              >
                <div className="text-6xl font-black tracking-[-0.07em] md:text-7xl">
                  {stat.value}
                </div>

                <p className="mt-4 max-w-sm text-base font-semibold leading-7 text-white/75">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[0.9fr_1.1fr] md:px-8 md:py-24">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-black/45">
              Why it matters
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase leading-tight tracking-[-0.05em] md:text-6xl">
              Prevention is in the data.
              <br />
              Regardless of the outcome.
            </h2>
          </div>

          <div className="space-y-5">
            {bullets.map((item) => (
              <div
                key={item}
                className="flex gap-4 border-b border-black/15 pb-5"
              >
                <Check className="mt-1 h-6 w-6 shrink-0 stroke-[3]" />

                <p className="text-lg font-bold leading-8">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="pilot"
          className="bg-black px-6 py-16 text-white md:px-8 md:py-24"
        >
          <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-3 border border-white/30 px-4 py-3 text-sm font-black uppercase tracking-[0.2em] text-white/70">
                <ShieldCheck className="h-5 w-5" />
                Pilot interest
              </div>

              <h2 className="text-4xl font-black uppercase leading-tight tracking-[-0.05em] md:text-6xl">
                Interested in finding what your incident
                data is already telling you?
              </h2>

              <p className="mt-6 max-w-xl text-lg font-medium leading-8 text-white/75">
                Share a few details and Sift Systemics
                can discuss a limited pilot using
                anonymized incident, near-miss, or
                observation data.
              </p>
            </div>

            <form
              action="https://formspree.io/f/xvzydyka"
              method="POST"
              className="grid gap-4 bg-white p-6 text-black md:p-8"
            >
              <input
                type="hidden"
                name="_next"
                value="https://siftsystemics.com/thank-you"
              />

              <div className="grid gap-4 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-black uppercase tracking-wide">
                  Name

                  <input
                    className="border-2 border-black px-4 py-3 text-base font-medium normal-case"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </label>

                <label className="grid gap-2 text-sm font-black uppercase tracking-wide">
                  Email

                  <input
                    className="border-2 border-black px-4 py-3 text-base font-medium normal-case"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <label className="grid gap-2 text-sm font-black uppercase tracking-wide">
                Company

                <input
                  className="border-2 border-black px-4 py-3 text-base font-medium normal-case"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                />
              </label>

              <label className="grid gap-2 text-sm font-black uppercase tracking-wide">
                Area of interest

                <select
                  className="border-2 border-black px-4 py-3 text-base font-medium normal-case"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                >
                  <option>
                    Incident / near-miss review
                  </option>

                  <option>
                    Contractor safety oversight
                  </option>

                  <option>
                    Renewables or construction pilot
                  </option>

                  <option>
                    Owner risk governance
                  </option>

                  <option>
                    Insurance / underwriting discussion
                  </option>
                </select>
              </label>

              <label className="grid gap-2 text-sm font-black uppercase tracking-wide">
                How can SIFT happen in your organization?

                <textarea
                  className="min-h-32 border-2 border-black px-4 py-3 text-base font-medium normal-case"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </label>

              <button
                className="mt-2 inline-flex items-center justify-center gap-3 bg-black px-7 py-4 text-sm font-black uppercase tracking-wide text-white"
                type="submit"
              >
                Send pilot interest
                <ArrowRight className="h-5 w-5" />
              </button>

              <p className="text-sm font-medium leading-6 text-black/55">
                Form submissions are securely sent
                through Formspree directly to
                SIFT Systemics.
              </p>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
