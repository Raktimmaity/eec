// FeaturesPage.jsx
import React from "react";
import { motion } from "framer-motion";

// ===== Image path (put Features.jpg into /public as features-hero.jpg) =====
const HERO_IMAGE = "/Features.jpg";

// Animate on mount
const fade = (d = 0) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: "easeOut", delay: d },
});

// --- Your existing features (kept as-is) ---
const DEFAULT_FEATURES = [
  {
    title: "AI – Powered Personalization",
    desc:
      "Learning paths are tailored using AI, ensuring every child gets content, quizzes, and support that match their pace and strengths.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7">
        <path d="M8 10h8M8 14h5M4 9a8 8 0 1116 0v6a8 8 0 11-16 0V9z"
          fill="none" stroke="currentColor" strokeWidth="1.6"
          strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    accent: "text-blue-600",
    dot: "bg-blue-500",
  },
  {
    title: "Emotional Well-being Integration",
    desc:
      "Built-in tools for mindfulness, stress tracking, and counseling support help nurture happier and more balanced students.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7">
        <path d="M12 3v18M5 8l7-5 7 5M5 16l7 5 7-5"
          fill="none" stroke="currentColor" strokeWidth="1.6"
          strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    accent: "text-violet-600",
    dot: "bg-violet-500",
  },
  {
    title: "Adapts to Each Child’s Learning Style",
    desc:
      "Whether visual, auditory, or hands-on learners—EEC adjusts lessons and assessments to fit how each child learns best.",
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
    title: "One App for Everything",
    desc:
      "All academic, administrative, and communication needs in a single secure platform—no need for multiple apps.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7">
        <path d="M4 19V5m0 9 4-4 4 4 6-6m-2 0h2v2"
          fill="none" stroke="currentColor" strokeWidth="1.8"
          strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    accent: "text-green-600",
    dot: "bg-green-500",
  },
  {
    title: "Bridge Between School & Home",
    desc:
      "Parents stay updated in real time on progress, assignments, and emotional health, creating a transparent school–home connection.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7">
        <path d="M4 19V5m0 9 4-4 4 4 6-6m-2 0h2v2"
          fill="none" stroke="currentColor" strokeWidth="1.8"
          strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    accent: "text-green-600",
    dot: "bg-green-500",
  },
  {
    title: "Reduces Dependence on Private Tutors",
    desc:
      "Personalized guidance and built-in doubt-solving reduce the need for extra tuition, saving both time and money.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7">
        <path d="M4 19V5m0 9 4-4 4 4 6-6m-2 0h2v2"
          fill="none" stroke="currentColor" strokeWidth="1.8"
          strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    accent: "text-green-600",
    dot: "bg-green-500",
  },
  {
    title: "Paperless & Eco-Friendly",
    desc:
      "Digital assignments, reports, and communication minimize paper use—making learning sustainable and environmentally responsible.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7">
        <path d="M4 19V5m0 9 4-4 4 4 6-6m-2 0h2v2"
          fill="none" stroke="currentColor" strokeWidth="1.8"
          strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    accent: "text-green-600",
    dot: "bg-green-500",
  },
];

export default function FeaturesPage({ items = DEFAULT_FEATURES }) {
  return (
    <div className="min-h-screen w-full">
      {/* ===== PARALLAX HERO ===== */}
      <section className="relative h-[54vh] md:h-[66vh]">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: `url(${HERO_IMAGE})`,
            backgroundAttachment: "fixed", // native parallax
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#120f08]/30 via-[#0b0a09]/10 to-transparent" />
        <div className="relative z-10 mx-auto flex h-full w-full items-center px-6">
          <motion.div {...fade(0)} className="w-full">
            {/* <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/70 bg-amber-50/70 px-3 py-1 text-xs font-medium text-amber-800 shadow-sm backdrop-blur">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-500" />
              EEC Features
            </span> */}
            <h1 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow text-right w-full">
              Features of EEC
            </h1>
            {/* <p className="mt-3 max-w-2xl text-sm md:text-base leading-relaxed text-white/90">
              Crafted with clarity, speed and the EEC amber-glass theme.
            </p> */}
          </motion.div>
        </div>
        <div className="pointer-events-none absolute -bottom-1 left-0 right-0 h-10 bg-gradient-to-b from-transparent to-white" />
      </section>

      {/* ===== FEATURE “CAPSULES” (non-card design) ===== */}
      <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <div className="grid gap-8 sm:grid-cols-2">
          {items.map((f, i) => (
            <motion.article
              key={f.title + i}
              {...fade(0.06 * (i + 1))}
              className="
                relative group isolate overflow-hidden rounded-2xl
                bg-white/85 backdrop-blur
                shadow-[0_8px_26px_rgba(17,24,39,0.10)]
                ring-1 ring-amber-300/50
                hover:shadow-[0_14px_36px_rgba(17,24,39,0.16)]
                transition-all will-change-transform
                hover:-translate-y-0.5
              "
            >
              {/* Amber ribbon at left (EEC theme) */}
              <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600" />

              {/* Soft aurora glow on hover */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity
                              [background:radial-gradient(380px_120px_at_20%_0%,rgba(251,191,36,0.18),transparent_60%)]" />

              {/* Floating “coin” icon */}
              <div
                className={`
                  absolute -top-2 -left-2 h-14 w-14 rounded-2xl
                  bg-amber-500 text-white shadow-xl shadow-amber-500/30
                  grid place-items-center ring-2 ring-amber-200
                `}
              >
                <div className="w-7 h-7 opacity-95 ml-2">{f.icon}</div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-7 pl-10 sm:pl-12">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-slate-700">
                  {f.desc}
                </p>

                {/* Bottom shadow puck => “floating capsule” */}
                {/* <div className="mt-6 h-6 rounded-2xl bg-gradient-to-b from-transparent to-black/5 blur-[6px] opacity-70" /> */}
              </div>

              {/* Decorative amber dots (unique look, not a card) */}
              <div className="absolute right-3 top-3 h-2 w-2 rounded-full bg-amber-400/80" />
              <div className="absolute right-6 top-7 h-1.5 w-1.5 rounded-full bg-amber-500/80" />
              <div className="absolute right-9 top-11 h-1.5 w-1.5 rounded-full bg-amber-600/70" />
            </motion.article>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      {/* <section className="mx-auto max-w-7xl px-6 pb-14">
        <motion.div
          {...fade(0.1)}
          className="rounded-2xl border border-amber-300/70 bg-white/85 p-6 md:p-8 shadow-md backdrop-blur"
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h4 className="text-xl md:text-2xl font-bold text-slate-900">
                Want a tailored feature set for your institute?
              </h4>
              <p className="text-slate-700">
                We’ll map EEC modules to your exact workflows and roll out fast.
              </p>
            </div>
            <a
              href="mailto:eec@electroniceducare.com"
              className="inline-flex items-center justify-center rounded-xl bg-amber-600 px-5 py-3 text-white font-semibold shadow-lg shadow-amber-500/25 hover:bg-amber-700 transition"
            >
              Get a Demo
            </a>
          </div>
        </motion.div>
      </section> */}
    </div>
  );
}
