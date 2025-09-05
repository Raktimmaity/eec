// About.jsx
import React from "react";
import { motion } from "framer-motion";

// Animate on mount (no whileInView)
const fade = (d = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut", delay: d },
});

export default function About() {
  return (
    <div className="min-h-screen w-full">
      <main className="mx-auto max-w-7xl px-6 pb-16 md:pb-24 pt-10 md:pt-14">
        {/* Page header */}
        <motion.header {...fade(0)}>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            About EEC
          </h1>
          <p className="mt-3 w-full text-sm md:text-base leading-relaxed text-slate-700">
            <span className="font-semibold text-amber-800">Electronic Educare (EEC)</span> unifies{" "}
            <span className="font-medium">Learning Management</span> and{" "}
            <span className="font-medium">Enterprise Resource Planning</span> into one elegant platform.
            We focus on clarity, performance, and measurable outcomes for your community.
          </p>
        </motion.header>

        {/* Main row */}
        <section className="mt-10 grid gap-10 md:grid-cols-[1.15fr_1fr]">
          {/* Left: Image + stats */}
          <motion.div {...fade(0.05)} className="relative self-start">
            <img
              src="/about-us.png"
              alt="EEC — Electronic Educare"
              className="w-full object-cover"
              loading="lazy"
            />
            <div className="mt-5 grid grid-cols-3 gap-3">
              {[
                { k: "99.9%", v: "Uptime" },
                { k: "24x7", v: "Customer Support" },
                { k: "AI-Ready", v: "Insights" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-amber-200 bg-white/80 px-4 py-3 text-center shadow-sm backdrop-blur"
                >
                  <div className="text-lg font-bold">{s.k}</div>
                  <div className="text-xs font-medium text-amber-700">{s.v}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Copy cards */}
          <motion.div {...fade(0.1)} className="space-y-6">
            <div className="rounded-2xl border border-amber-200/70 bg-white/80 p-6 shadow-sm backdrop-blur hover:scale-105 transition-all">
              <h2 className="text-xl md:text-2xl font-bold">Learning Management System</h2>
              <p className="mt-2 text-slate-700 leading-relaxed">
                Adaptive learning paths, lesson planning, assessments, analytics, and engaging
                student experiences—with teacher-friendly tools and progress tracking.
              </p>
              <ul className="mt-4 grid gap-2 text-sm text-slate-700">
                <li className="flex gap-2">
                  <span className="inline-block h-2 w-2 mt-2 rounded-full bg-amber-500" />
                  Content repository, quizzes, grading, and feedback loops
                </li>
                <li className="flex gap-2">
                  <span className="inline-block h-2 w-2 mt-2 rounded-full bg-amber-500" />
                  Class schedules, assignments, submissions, and remarks
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-amber-200/70 bg-white/80 p-6 shadow-sm backdrop-blur hover:scale-105 transition-all">
              <h2 className="text-xl md:text-2xl font-bold">ERP for Institutions</h2>
              <p className="mt-2 text-slate-700 leading-relaxed">
                Centralize attendance, fees, communication, inventory, and reports. Automations keep
                teams aligned while dashboards surface what matters.
              </p>
              <ul className="mt-4 grid gap-2 text-sm text-slate-700">
                <li className="flex gap-2">
                  <span className="inline-block h-2 w-2 mt-2 rounded-full bg-amber-500" />
                  Role-based access, approvals, and audit history
                </li>
                <li className="flex gap-2">
                  <span className="inline-block h-2 w-2 mt-2 rounded-full bg-amber-500" />
                  Finance overview, receipts, dues, and compliance exports
                </li>
              </ul>
            </div>
          </motion.div>
        </section>

        {/* CTA */}
        <motion.section
          {...fade(0.15)}
          className="mt-12 md:mt-16 rounded-2xl border border-amber-200/70 bg-white/80 p-6 md:p-8 shadow-md backdrop-blur"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl md:text-2xl font-bold">Ready to modernize your institution?</h3>
              <p className="mt-1 text-slate-700">Let’s tailor EEC to your workflows and launch quickly.</p>
            </div>
            <a
              href="mailto:eec@electroniceducare.com"
              className="inline-flex items-center justify-center rounded-xl bg-amber-600 px-5 py-3 text-white font-semibold shadow-lg shadow-amber-500/20 hover:bg-amber-700 transition"
            >
              Get a Demo
            </a>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
