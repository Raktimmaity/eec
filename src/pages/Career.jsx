// src/pages/Careers.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { JOBS } from "../data/jobs";
import {
  FaBolt, FaHeart, FaUsers, FaLaptopCode, FaGraduationCap, FaGlobeAsia,
  FaBalanceScale, FaClock, FaMoneyBillWave, FaShieldAlt, FaChartLine, FaHandHoldingHeart
} from "react-icons/fa";

// Animate on mount (no whileInView / viewport)
const fade = (d = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: "easeOut", delay: d },
});

export default function Careers() {
  return (
    <div className="min-h-screen w-full">
      {/* Header */}
      <section className="mx-auto max-w-7xl px-6 pt-12 md:pt-16">
        <motion.div {...fade(0)}>
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/70 px-3 py-1 text-xs font-medium text-amber-800 shadow-sm backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-500" />
            Current Openings
          </span>
        </motion.div>
        <motion.h1 {...fade(0.05)} className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">
          Build the future of education with EEC
        </motion.h1>
        <motion.p {...fade(0.1)} className="mt-3 max-w-3xl text-sm md:text-base text-slate-700">
          Join a product-driven team shaping a modern LMS + ERP—clear design, reliable tech,
          and real impact for institutions.
        </motion.p>
      </section>

      {/* Job cards */}
      <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <div className="grid gap-6 md:grid-cols-3">
          {(JOBS ?? []).map((job, i) => (
            <motion.article
              key={job.slug || i}
              {...fade(0.05 * (i + 1))}
              className="group rounded-3xl border border-amber-200/70 bg-white/85 p-6 shadow-[0_6px_20px_rgba(17,24,39,0.08)] hover:shadow-[0_12px_30px_rgba(17,24,39,0.14)] transition-shadow backdrop-blur"
            >
              <header>
                <h3 className="text-lg md:text-xl font-extrabold tracking-tight">{job.title}</h3>
                <p className="mt-1 text-slate-700">{job.summary}</p>
              </header>

              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {job.bullets?.map((b, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-amber-500" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Link
                  to={`/careers/${job.slug}`}
                  className="inline-flex items-center justify-center rounded bg-amber-600 px-4 py-2 text-white text-sm font-semibold shadow-lg shadow-amber-500/20 hover:bg-amber-700 transition"
                >
                  View Details
                </Link>
              </div>
            </motion.article>
          ))}

          {(!JOBS || JOBS.length === 0) && (
            <motion.div {...fade(0.1)} className="md:col-span-3 rounded-2xl border border-amber-200 bg-white/80 p-6 text-slate-700">
              No openings right now. Please check back soon.
            </motion.div>
          )}
        </div>
      </section>

      {/* Why Join EEC — expanded */}
      <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
        <motion.h2 {...fade(0)} className="text-2xl md:text-3xl font-extrabold tracking-tight text-center">
          Why Join EEC?
        </motion.h2>

        {/* 1) Big reasons */}
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            { icon: <FaBolt />, title: "Meaningful Impact", desc: "Ship features that improve learning outcomes for thousands of students and educators." },
            { icon: <FaUsers />, title: "Small, Senior Team", desc: "Work with caring, fast-moving peers who value clarity, ownership, and craftsmanship." },
            { icon: <FaLaptopCode />, title: "Modern Stack", desc: "React + Vite, Tailwind, analytics-driven product loops, and thoughtful DX across the board." },
          ].map((x, i) => (
            <motion.div
              key={x.title}
              {...fade(0.05 * (i + 1))}
              className="rounded-2xl border border-amber-200/70 bg-white/80 p-6 shadow-sm backdrop-blur"
            >
              <div className="text-xl font-bold flex items-center gap-2">
                <span className="text-amber-600">{x.icon}</span>
                {x.title}
              </div>
              <p className="mt-2 text-slate-700">{x.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* 2) Perks & benefits */}
        <motion.div {...fade(0.2)} className="mt-10 rounded-2xl border border-amber-200/70 bg-white/85 p-6 shadow-sm backdrop-blur">
          <h3 className="text-xl font-bold">Perks & Benefits</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-sm text-slate-800">
            <div className="flex items-start gap-3">
              <FaClock className="mt-0.5 text-amber-600" />
              <div><div className="font-semibold">Flexible Hours</div><p className="text-slate-700">Own your schedule—optimize for flow, not facetime.</p></div>
            </div>
            <div className="flex items-start gap-3">
              <FaMoneyBillWave className="mt-0.5 text-amber-600" />
              <div><div className="font-semibold">Competitive Pay</div><p className="text-slate-700">Fair, transparent compensation aligned to impact.</p></div>
            </div>
            <div className="flex items-start gap-3">
              <FaShieldAlt className="mt-0.5 text-amber-600" />
              <div><div className="font-semibold">Health & Wellness</div><p className="text-slate-700">Coverage and wellness support to do your best work.</p></div>
            </div>
            <div className="flex items-start gap-3">
              <FaGraduationCap className="mt-0.5 text-amber-600" />
              <div><div className="font-semibold">Learning Budget</div><p className="text-slate-700">Books, courses, conferences—grow with intention.</p></div>
            </div>
            <div className="flex items-start gap-3">
              <FaChartLine className="mt-0.5 text-amber-600" />
              <div><div className="font-semibold">Career Growth</div><p className="text-slate-700">Clear ladders and mentorship to level up quickly.</p></div>
            </div>
            <div className="flex items-start gap-3">
              <FaGlobeAsia className="mt-0.5 text-amber-600" />
              <div><div className="font-semibold">Hybrid-Remote</div><p className="text-slate-700">Work from anywhere with optional in-person jams.</p></div>
            </div>
          </div>
        </motion.div>


        {/* CTA */}
        <motion.div {...fade(0.4)} className="mt-10 text-center">
          <Link
            to="/careers"
            className="inline-flex items-center justify-center rounded-xl bg-amber-600 px-6 py-3 text-white font-semibold shadow-lg shadow-amber-500/20 hover:bg-amber-700 transition"
          >
            See open roles
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
