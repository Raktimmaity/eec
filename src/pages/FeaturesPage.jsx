// Features.jsx
import React from "react";
import { motion } from "framer-motion";

// Animate on mount (no whileInView / viewport)
const fade = (d = 0) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: "easeOut", delay: d },
});

const DEFAULT_FEATURES = [
  {
    title: "Personalized, AI-Driven Learning",
    desc:
      "EEC utilizes advanced AI to deliver tailored learning experiences, adapting to each student’s unique needs and pace. This dynamic approach ensures focused academic growth, fostering a deeper understanding of subjects.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7">
        <path
          d="M8 10h8M8 14h5M4 9a8 8 0 1116 0v6a8 8 0 11-16 0V9z"
          fill="none" stroke="currentColor" strokeWidth="1.6"
          strokeLinecap="round" strokeLinejoin="round"
        />
      </svg>
    ),
    accent: "text-blue-600",
    dot: "bg-blue-500",
  },
  {
    title: "Engaging Interactive Content",
    desc:
      "With multimedia-rich, real-world-based lessons, EEC transforms traditional learning into an immersive experience. Students engage with content that not only informs but also motivates them to explore and excel.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7">
        <path
          d="M12 3v18M5 8l7-5 7 5M5 16l7 5 7-5"
          fill="none" stroke="currentColor" strokeWidth="1.6"
          strokeLinecap="round" strokeLinejoin="round"
        />
      </svg>
    ),
    accent: "text-violet-600",
    dot: "bg-violet-500",
  },
  {
    title: "Seamless Flexiblility and Access",
    desc:
      "EEC offers unmatched flexibility, allowing students to access learning materials anytime, anywhere, on any device. This ensures that learning can continue uninterrupted, adapting to the student's schedule and pace.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7">
        <rect x="6" y="2" width="12" height="20" rx="2" ry="2"
          stroke="currentColor" strokeWidth="1.6" fill="none" />
        <circle cx="12" cy="18" r="1" fill="currentColor" />
      </svg>
    ),
    accent: "text-slate-700",
    dot: "bg-slate-600",
  },
  {
    title: "Collaborative Learning and Future-Ready Skills",
    desc:
      "EEC fosters collaboration through froup projects and peer interaction while equipping students with critical skills such as problem-solving, digital literacy, and teamwork. These skills are essential for success in both academic and professional spheres.",

    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7">
        <path
          d="M4 19V5m0 9 4-4 4 4 6-6m-2 0h2v2"
          fill="none" stroke="currentColor" strokeWidth="1.8"
          strokeLinecap="round" strokeLinejoin="round"
        />
      </svg>
    ),
    accent: "text-green-600",
    dot: "bg-green-500",
  },
  {
    title: "Personalized Learning Paths",
    desc:
      "EEC will use AI to analyze a student's progress, strengths and Weaknesses, then recomended customized study plans, worksheets then video lessons tailored to their needs",

    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7">
        <path
          d="M4 19V5m0 9 4-4 4 4 6-6m-2 0h2v2"
          fill="none" stroke="currentColor" strokeWidth="1.8"
          strokeLinecap="round" strokeLinejoin="round"
        />
      </svg>
    ),
    accent: "text-green-600",
    dot: "bg-green-500",
  },
  {
    title: "Real-Time Performance Insights",
    desc:
      "Throgh continues feedback and AI-driven analytics, EEC tracks and monitors student progress, providing immediate insights and recommendations. This ensures that stdents and educators are always aligned with academic goals, facilitating timely interventions.",

    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7">
        <path
          d="M4 19V5m0 9 4-4 4 4 6-6m-2 0h2v2"
          fill="none" stroke="currentColor" strokeWidth="1.8"
          strokeLinecap="round" strokeLinejoin="round"
        />
      </svg>
    ),
    accent: "text-green-600",
    dot: "bg-green-500",
  },
];

export default function FeaturesPage({ items = DEFAULT_FEATURES }) {
  return (
    <div className="min-h-screen w-full">
      {/* Top section */}
      <section className="mx-auto max-w-7xl px-6 pt-12 md:pt-16">
        <motion.div {...fade(0)}>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Our Features
          </h1>
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/70 px-3 py-1 text-xs font-medium text-amber-800 shadow-sm backdrop-blur mt-8">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-500" />
            EEC Features
          </span>
        </motion.div>

        <motion.h1
          {...fade(0.05)}
          className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900"
        />

        <motion.p
          {...fade(0.1)}
          className="mt-3 max-w-3xl text-sm md:text-base leading-relaxed text-slate-700"
        >
          A clean, accessible, and delightful experience—using the EEC amber glass theme—so teachers,
          students, and admins can focus on what matters.
        </motion.p>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <div className="grid gap-8 sm:grid-cols-2">
          {items.map((f, i) => (
            <motion.div
              key={f.title + i}
              {...fade(0.05 * (i + 1))}
              className="group relative rounded-3xl bg-white/85 border border-amber-200/70 p-8 shadow-[0_6px_20px_rgba(17,24,39,0.08)] hover:shadow-[0_10px_28px_rgba(17,24,39,0.12)] transition-shadow backdrop-blur"
            >
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity [background:radial-gradient(400px_120px_at_20%_0%,rgba(251,191,36,0.15),transparent_60%)]" />
              <div className="flex flex-col items-center text-center">
                <div className={`mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 border border-amber-200 shadow-sm ${f.accent}`}>
                  <div className="opacity-90">{f.icon}</div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-slate-700 max-w-[48ch]">
                  {f.desc}
                </p>
              </div>
              <div className="mt-6 h-6 rounded-2xl bg-gradient-to-b from-transparent to-black/5 blur-[6px] opacity-70" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-14">
        <motion.div
          {...fade(0.1)}
          className="rounded-2xl border border-amber-200 bg-white/80 p-6 md:p-8 shadow-md backdrop-blur"
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h4 className="text-xl md:text-2xl font-bold text-slate-900">
                Want a tailored feature set for your institute?
              </h4>
              <p className="text-slate-700">
                We’ll map EEC modules to your exact workflows and rollout fast.
              </p>
            </div>
            <a
              href="mailto:eec@electroniceducare.com"
              className="inline-flex items-center justify-center rounded-xl bg-amber-600 px-5 py-3 text-white font-semibold shadow-lg shadow-amber-500/20 hover:bg-amber-700 transition"
            >
              Get a Demo
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
