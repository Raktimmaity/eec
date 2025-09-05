// Modules.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/** ---------- Theme Animations (mount-based) ---------- */
const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: "easeOut", delay: d },
});
const pop = {
  initial: { opacity: 0, scale: 0.96, y: 10 },
  animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.98, y: 4, transition: { duration: 0.18, ease: "easeIn" } },
};

/** ---------- Icons (inline SVG to avoid extra deps) ---------- */
const I = {
  fee: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M4 7h16M4 12h16M8 17h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <rect x="3" y="4" width="18" height="16" rx="3" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  ),
  bus: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <rect x="4" y="5" width="16" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M7 17v1M17 17v1M6 10h12M7 14h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  hr: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <circle cx="12" cy="8" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 20c0-4 3.6-6 8-6s8 2 8 6" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  mobile: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <rect x="7" y="2" width="10" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="18" r="1" />
    </svg>
  ),
  exam: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <rect x="5" y="3" width="14" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  parent: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M4 18v-6a3 3 0 013-3h10a3 3 0 013 3v3a3 3 0 01-3 3H9l-5 3v-3z" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  ),
  lms: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M4 7h16M7 3h10M6 11h7m-7 4h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="3" y="5" width="18" height="16" rx="3" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  ),
};

/** ---------- Data ---------- */
const MODULES = [
  {
    key: "fee",
    title: "Fee Collection",
    accent: "text-sky-600",
    icon: I.fee,
    bullets: [
      "Online payments (cards, UPI, net banking).",
      "Auto-generated receipts and reminders.",
      "Dues, concessions, scholarships tracking.",
      "Export to finance & audit logs.",
    ],
  },
  {
    key: "transport",
    title: "Transport & GPS",
    accent: "text-green-600",
    icon: I.bus,
    bullets: [
      "Live bus tracking with route geofences.",
      "Stop management & driver roster.",
      "Parent pickup alerts and notifications.",
      "Compliance & maintenance logs.",
    ],
  },
  {
    key: "hr",
    title: "HR Management",
    accent: "text-violet-600",
    icon: I.hr,
    bullets: [
      "Staff onboarding & digital records.",
      "Attendance, leaves & payroll add-ons.",
      "Role-based permissions and approvals.",
      "Performance reviews & documents.",
    ],
  },
  {
    key: "mobile",
    title: "Mobile & Web App",
    accent: "text-pink-600",
    icon: I.mobile,
    bullets: [
      "Student/parent/teacher portals.",
      "Push notifications & messaging.",
      "Assignments, lesson plans, calendars.",
      "Multi-language & accessibility options.",
    ],
  },
  {
    key: "exam",
    title: "Exam Management",
    accent: "text-indigo-600",
    icon: I.exam,
    bullets: [
      "Schedules, seating & hall tickets.",
      "Question banks & objective/subjective.",
      "On-screen evaluation & analytics.",
      "Report cards & transcripts.",
    ],
  },
  {
    key: "parent",
    title: "Parent Communication",
    accent: "text-amber-700",
    icon: I.parent,
    bullets: [
      "Announcements & two-way chat.",
      "Attendance/fee alerts & reminders.",
      "PTM scheduling & feedback loops.",
      "Media gallery & document vault.",
    ],
  },
];

const HIGHLIGHT = {
  title: "Learning Management Software",
  desc:
    "Adaptive, gamified, and AI-integrated LMS with progress tracking, lesson planning, and student analytics.",
  accent: "text-slate-50",
  icon: I.lms,
};

/** ---------- Modal (accessible) ---------- */
function useOnKeyDown(handler) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") handler(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handler]);
}

function Modal({ open, onClose, title, items, icon, accent = "" }) {
  const cardRef = useRef(null);

  useEffect(() => {
    if (open && cardRef.current) {
      const btn = cardRef.current.querySelector("[data-close]");
      btn?.focus();
    }
  }, [open]);
  useOnKeyDown(() => open && onClose());

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-modal="true"
          role="dialog"
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" onClick={onClose} />
          {/* Card */}
          <motion.div
            {...pop}
            ref={cardRef}
            className="relative mx-auto mt-24 w-[92%] max-w-2xl rounded-3xl border border-amber-200/70 bg-white/95 p-5 md:p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <header className="flex items-start gap-3">
              <div className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-50 border border-amber-200 ${accent}`} aria-hidden="true">
                {icon}
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-extrabold tracking-tight">{title}</h3>
                <p className="text-sm text-slate-600">Detailed features available in this module</p>
              </div>
              <button
                data-close
                onClick={onClose}
                className="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-100"
                aria-label="Close"
              >
                ✕
              </button>
            </header>

            <div className="mt-4 grid gap-2">
              {items?.map((t, i) => (
                <div key={i} className="flex gap-2 text-[15px] text-slate-800">
                  <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-amber-500" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/** ---------- Page ---------- */
export default function Modules() {
  const [active, setActive] = useState(null); // key of selected module
  const selected = useMemo(() => MODULES.find((m) => m.key === active), [active]);

  return (
    <div className="min-h-screen w-full">
      {/* Header */}
      <section className="mx-auto max-w-7xl px-6 pt-12 md:pt-16">
        <motion.div {...fadeUp(0)}>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Our Modules</h1>
          <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/70 px-3 py-1 text-xs font-medium text-amber-800 shadow-sm backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-500" />
            EEC Modules
          </span>
        </motion.div>

        <motion.h1 {...fadeUp(0.05)} className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight" />

        <motion.p {...fadeUp(0.1)} className="max-w-3xl text-sm md:text-base leading-relaxed text-slate-700">
          Click any module to see its detailed feature list. Close the popup by clicking outside
          the card or pressing <span className="font-semibold">Esc</span>.
        </motion.p>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MODULES.map((m, i) => (
            <motion.button
              key={m.key}
              {...fadeUp(0.04 * (i + 1))}
              onClick={() => setActive(m.key)}
              className="group relative text-left rounded-3xl bg-white/85 border border-amber-200/70 p-6 shadow-[0_6px_20px_rgba(17,24,39,0.08)] hover:shadow-[0_12px_30px_rgba(17,24,39,0.14)] transition-shadow backdrop-blur focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity [background:radial-gradient(420px_140px_at_18%_0%,rgba(251,191,36,0.16),transparent_60%)]" />
              <div className="flex items-center gap-3">
                <div className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-50 border border-amber-200 ${m.accent}`}>
                  {m.icon}
                </div>
                <h3 className="text-[17px] md:text-lg font-bold tracking-tight">{m.title}</h3>
              </div>
              <div className="mt-4 h-6 rounded-2xl bg-gradient-to-b from-transparent to-black/5 blur-[6px] opacity-70" />
              <p className="font-bold animate-pulse text-xs text-amber-700">Click here to view all details</p>
            </motion.button>
          ))}
        </div>

        {/* Highlight bar */}
        <motion.div {...fadeUp(0.08)} className="mt-6 rounded-2xl border border-slate-800/20 bg-slate-900 text-slate-100 p-6 md:p-7 shadow-lg">
          <div className="flex items-start gap-3">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-800/60 border border-slate-700">
              {HIGHLIGHT.icon}
            </div>
            <div>
              <h4 className="text-lg md:text-xl font-extrabold">{HIGHLIGHT.title}</h4>
              <p className="text-[15px] md:text-base opacity-90">{HIGHLIGHT.desc}</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Modal */}
      <Modal
        open={!!active}
        onClose={() => setActive(null)}
        title={selected?.title}
        items={selected?.bullets || []}
        icon={selected?.icon}
        accent={selected?.accent}
      />
    </div>
  );
}
