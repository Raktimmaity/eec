// Benefits.jsx
import React from "react";
import { motion } from "framer-motion";

// Animate on mount (no whileInView / viewport)
const fade = (d = 0) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: "easeOut", delay: d },
});

// Icons (unchanged)
const I = {
  erp: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M4 7h16M4 12h10M4 17h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <rect x="3" y="4" width="18" height="16" rx="3" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M12 3v3m0 12v3M3 12h3m12 0h3M6 6l2 2m8 8 2 2m-12 0 2-2m8-8 2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="12" cy="12" r="3.8" fill="none" stroke="currentColor" strokeWidth="1.4"/>
    </svg>
  ),
  analytics: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M4 20V6m4 14V10m4 10V8m4 12V4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
    </svg>
  ),
  admin: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <rect x="3" y="4" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M7 20h10M9 8h6M9 12h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
  exam: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <rect x="5" y="3" width="14" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M8 7h8M8 11h8M8 15h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
  chat: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M4 18v-8a3 3 0 013-3h10a3 3 0 013 3v5a3 3 0 01-3 3H9l-5 3v-3z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  adaptive: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M12 3l3 5-3 5-3-5 3-5zM5 16h14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
      <circle cx="6" cy="19" r="1" /><circle cx="12" cy="19" r="1" /><circle cx="18" cy="19" r="1" />
    </svg>
  ),
  dashboards: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <rect x="3" y="4" width="8" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4" fill="none"/>
      <rect x="13" y="4" width="8" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4" fill="none"/>
      <rect x="3" y="13" width="8" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4" fill="none"/>
      <rect x="13" y="13" width="8" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4" fill="none"/>
    </svg>
  ),
  finance: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M4 20h16M6 16l4-6 3 4 5-8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" fill="none"/>
    </svg>
  ),
  cloud: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M7 18a4 4 0 010-8 5 5 0 119.8 1.1A3.5 3.5 0 1116.5 18H7z" stroke="currentColor" strokeWidth="1.4" fill="none"/>
    </svg>
  ),
};

const BENEFITS = [
  { title: "Integrated ERP & LMS", intro: "EEC seamlessly combines ERP and LMS to streamline school management while delivering an engaging, personalized learning experience.", icon: I.erp, accent: "text-sky-600" },
  { title: "AI & ML-Powered Personalization", intro: "Personalized learning paths adapt to each student’s strengths and weaknesses with ML-enhanced precision.", icon: I.ai, accent: "text-violet-600" },
  { title: "Real-Time Performance Analytics", intro: "Track progress instantly and generate detailed analytics for informed decisions.", icon: I.analytics, accent: "text-green-600" },
  { title: "Streamlined Administrative Processes", intro: "Automate scheduling, payroll, and reports for seamless school operations.", icon: I.admin, accent: "text-amber-700" },
  { title: "Smart Exam Reporting", intro: "Use AI to schedule, evaluate, and generate smart insights from exams.", icon: I.exam, accent: "text-rose-600" },
  { title: "AI-Driven Communication & Collaboration", intro: "Chatbots and real-time updates connect students, teachers, and parents better than ever.", icon: I.chat, accent: "text-pink-600" },
  { title: "Adaptive Learning Tools", intro: "Engaging, gamified content tailored to students’ pace and interests.", icon: I.adaptive, accent: "text-yellow-600" },
  { title: "Centralized Dashboards", intro: "Monitor performance, attendance, fees, and more in one place.", icon: I.dashboards, accent: "text-cyan-700" },
  { title: "Comprehensive Financial Management", intro: "Automated invoicing, reminders, and secure payment tracking.", icon: I.finance, accent: "text-emerald-600" },
  { title: "Cloud-Based Access & Security", intro: "Reliable cloud infrastructure ensures 24/7 access and robust data protection.", icon: I.cloud, accent: "text-slate-700" },
];

export default function Benefits({ items = BENEFITS }) {
  return (
    <div className="min-h-screen w-full">
      {/* Header */}
      <section className="mx-auto max-w-7xl px-6 pt-12 md:pt-16">
        <motion.div {...fade(0)}>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Benefits of EEC</h1>
          <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/70 px-3 py-1 text-xs font-medium text-amber-800 shadow-sm backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-500" />
            EEC Benefits
          </span>
        </motion.div>

        <motion.h1 {...fade(0.05)} className="text-3xl md:text-4xl font-extrabold tracking-tight" />

        <motion.p {...fade(0.1)} className="mt-3 max-w-3xl text-sm md:text-base leading-relaxed text-slate-700">
          A modern amber-glass UI, clear information hierarchy, and smart automation—so admins,
          teachers, students, and parents get more done with less friction.
        </motion.p>
      </section>

      {/* Benefits grid */}
      <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((b, i) => (
            <motion.article
              key={b.title + i}
              {...fade(0.04 * (i + 1))}
              className="group relative rounded-3xl bg-white/85 border border-amber-200/70 p-5 md:p-6 shadow-[0_6px_20px_rgba(17,24,39,0.08)] hover:shadow-[0_12px_30px_rgba(17,24,39,0.14)] transition-shadow backdrop-blur"
            >
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity [background:radial-gradient(420px_140px_at_18%_0%,rgba(251,191,36,0.16),transparent_60%)]"/>
              <header className="flex items-start gap-3">
                <div className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-50 border border-amber-200 ${b.accent}`}>
                  <span className="sr-only">Benefit icon</span>
                  {b.icon}
                </div>
                <h3 className="text-[17px] md:text-lg font-extrabold leading-6 tracking-tight">{b.title}</h3>
              </header>
              <p className="mt-2 text-sm md:text-[15px] leading-relaxed text-slate-700">{b.intro}</p>
              <div className="mt-6 h-6 rounded-2xl bg-gradient-to-b from-transparent to-black/5 blur-[6px] opacity-70" />
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-14">
        <motion.div {...fade(0.1)} className="rounded-2xl border border-amber-200 bg-white/80 p-6 md:p-8 shadow-md backdrop-blur">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h4 className="text-xl md:text-2xl font-bold">Ready to see these benefits in action?</h4>
              <p className="text-slate-700">We’ll align EEC to your workflows and roll out quickly.</p>
            </div>
            <a href="mailto:eec@electroniceducare.com" className="inline-flex items-center justify-center rounded-xl bg-amber-600 px-5 py-3 text-white font-semibold shadow-lg shadow-amber-500/20 hover:bg-amber-700 transition">
              Get a Demo
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
