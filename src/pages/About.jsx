// About.jsx
import React from "react";
import { motion } from "framer-motion";

const HERO_IMAGE = "/about-hero.jpg";

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut", delay: d },
});

export default function About() {
  return (
    <div className="min-h-screen w-full">
      {/* ===== HERO ===== */}
      <section className="relative h-[56vh] md:h-[68vh]">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: `url(${HERO_IMAGE})`,
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-slate-900/30" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-end px-6">
          <motion.div {...fade(0)}>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow text-right">
              About EEC
            </h1>
          </motion.div>
        </div>
        <div className="pointer-events-none absolute -bottom-1 left-0 right-0 h-10 bg-gradient-to-b from-transparent to-white dark:to-white" />
      </section>

      {/* ===== STATS ===== */}
      <motion.section
        {...fade(0.05)}
        className="-mt-8 md:-mt-10 relative z-20 mx-auto max-w-7xl px-6"
      >
        <div className="grid grid-cols-3 gap-3 md:gap-4">
          {[
            { k: "99.9%", v: "Uptime" },
            { k: "24×7", v: "Customer Support" },
            { k: "AI-Ready", v: "Insights" },
          ].map((s, i) => (
            <div
              key={i}
              className="rounded-xl border border-amber-200 bg-white/90 px-4 py-4 text-center shadow-sm backdrop-blur"
            >
              <div className="text-lg md:text-xl font-bold text-slate-900">
                {s.k}
              </div>
              <div className="text-xs md:text-sm font-medium text-amber-700">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ===== MAIN CONTENT ===== */}
      <main className="mx-auto max-w-7xl px-6 pb-16 md:pb-24 pt-10 md:pt-14">
        <motion.section {...fade(0.1)} className="space-y-6">
          {/* New paragraph card */}
          <div className="">
            <p className="mt-4 text-sm md:text-base leading-relaxed text-slate-800">
              Welcome to {" "}
              <span className="font-extrabold text-amber-500 text-2xl">
                Electronic Educare (EEC)
              </span>{" "}
              {/* unifies{" "} */}
              {/* <span className="font-medium">Learning Management</span> and{" "} */}
              {/* <span className="font-medium">Enterprise Resource Planning</span> */}
               where innovation meets education. EEC is a comprehensive platform that combines a state-of-the-art Learning Management System (LMS) with robust Enterprise Resource Planning (ERP) solutions tailored for schools. Our mission is to redefine education by blending technology with teaching, creating an environment where students are inspired to learn and grow.
            </p>
          </div>

          {/* Existing content cards */}
          <div className="rounded-2xl border border-amber-200/70 bg-white/90 p-6 shadow-sm backdrop-blur hover:shadow-md transition-all">
            <h2 className="text-xl md:text-2xl font-bold">Learning Management System</h2>
            <p className="mt-2 text-slate-700 leading-relaxed">
              EEC’s LMS brings a new era of technology-driven education, making learning engaging, personalized, and interactive. With features like gamified content, adaptive learning paths, and AI-powered insights, we ensure that students are not just learning but are excited to explore and understand concepts at their own pace. Teachers are equipped with dynamic tools to create compelling lessons, track progress, and meet the unique needs of every learner effectively.
            </p>
          </div>

          <div className="rounded-2xl border border-amber-200/70 bg-white/90 p-6 shadow-sm backdrop-blur hover:shadow-md transition-all">
            <h2 className="text-xl md:text-2xl font-bold">ERP for Institutions</h2>
            <p className="mt-2 text-slate-700 leading-relaxed">
              EEC also provides a powerful ERP solution that streamlines school administration. From attendance tracking to fee management and performance reporting, our ERP simplifies every operational aspect for administrators. Real-time insights, automated workflows, and efficient communication channels ensure smooth coordination across all stakeholders. By combining LMS and ERP on a single platform, EEC offers schools an all-in-one solution for modern education management. Whether it’s enhancing the learning experience or optimizing administrative processes, we are committed to empowering educators, students, and school leaders to achieve excellence.
            </p>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
