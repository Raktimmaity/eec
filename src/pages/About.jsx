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
        <div className="absolute inset-0 bg-slate-900/5" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-end px-6">
          <motion.div {...fade(0)}>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow text-right">
              About EEC
            </h1>
          </motion.div>
        </div>
        <div className="pointer-events-none absolute -bottom-1 left-0 right-0 h-10 bg-gradient-to-b from-transparent to-white dark:to-white" />
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <main className="mx-auto max-w-7xl px-6 pb-16 md:pb-24 pt-10 md:pt-14">
        <motion.section {...fade(0.1)} className="space-y-10">

          {/* Our Story */}
          <div className="">
            {/* <h2 className="text-2xl font-bold">Our Story</h2> */}
            <p className="mt-3 text-slate-700 leading-relaxed">
              <span className="font-extrabold text-amber-500">Electronic Educare (EEC) {" "}</span>
              was founded with a simple but ambitious goal: to revolutionize how schools
              manage, teach, and grow. At the turn of the millennium, when many schools
              were still dependent on paper registers, manual fee collection, and endless
              calculations, EEC envisioned a future where technology would automate these
              tasks and allow educators to focus on what truly matters—teaching and learning.
            </p>
            <p className="mt-3 text-slate-700 leading-relaxed">
              From the very beginning, EEC has been more than just software. It has been a
              movement to eliminate inefficiencies, reduce errors, and enable schools to
              communicate seamlessly with parents, students, teachers, and administrators.
              Over the years, our platform has grown from a simple management system into
              a robust 360° ERP + LMS solution that connects every aspect of school life
              under one secure, intelligent platform.
            </p>
            {/* <p className="mt-3 text-slate-700 leading-relaxed">
              As technology advanced—from bulky 700 MHz desktops to today’s multi-GHz devices,
              and from 20 GB hard drives to terabyte-sized SSDs—EEC has kept pace, ensuring
              schools always benefit from innovation and speed. What once seemed futuristic
              is now essential: secure data protection, AI-ready insights, and experiential
              learning tools that go beyond the classroom walls.
            </p> */}
          </div>

          {/* Our Journey */}
          {/* <div className="rounded-2xl border border-amber-200/70 bg-white/90 p-6 shadow-sm backdrop-blur">
            <h2 className="text-2xl font-bold">Our Journey</h2>
            <p className="mt-3 text-slate-700 leading-relaxed">
              Over the years, EEC has continuously evolved:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-slate-700">
              <li><strong>2000s:</strong> Solved challenges like report card preparation, fee leakage,
                admissions, salary/PF management, and library book tracking with one of the first
                school ERP systems in India.</li>
              <li><strong>2010s:</strong> Expanded into cloud-based platforms, enabling schools to manage
                operations anytime, anywhere with real-time insights.</li>
              <li><strong>2020:</strong> With the launch of NEP 2020, our research team pivoted to
                competency-based assessments and new teaching-learning models aligned with
                21st-century skills.</li>
              <li><strong>2022:</strong> Introduced Experiential Learning solutions, launched at the
                All India Experiential Learning Summit in New Delhi, witnessed by 600+ principals,
                educationists, and leaders.</li>
              <li><strong>Today:</strong> Serving hundreds of schools across India, delivering
                AI-powered insights, safe and secure systems, and a complete ecosystem
                where innovation meets education.</li>
            </ul>
          </div> */}

          {/* Vision */}
          <div className="rounded-2xl border border-amber-200/70 bg-white/90 p-6 shadow-sm backdrop-blur">
            <h2 className="text-2xl font-bold">Our Vision</h2>
            <p className="mt-3 text-slate-700 leading-relaxed">
              To become a game-changer in the ed-tech world with revolutionary K-12 solutions
              that transform schools from “good” to “best”, nurture students into champions
              for life, and add lasting value to every stakeholder in education.
            </p>
          </div>

          {/* Mission */}
          <div className="rounded-2xl border border-amber-200/70 bg-white/90 p-6 shadow-sm backdrop-blur">
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-slate-700">
              <li>Empower schools with revolutionary ERP tools, freeing management to focus on growth.</li>
              <li>Automate communication between students, teachers, parents, and administrators.</li>
              <li>Support teachers with advanced resources, HD content, and mentoring tools.</li>
              <li>Enable students with after-school learning, deeper understanding, and
                employable skills.</li>
              <li>Promote innovation, speed, and security as the pillars of a modern education system.</li>
            </ul>
          </div>

          {/* Core Values */}
          {/* <div className="rounded-2xl border border-amber-200/70 bg-white/90 p-6 shadow-sm backdrop-blur">
            <h2 className="text-2xl font-bold">Our Core Values</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-slate-700">
              <li>Demanding Excellence</li>
              <li>Challenging the Status Quo</li>
              <li>Speaking from Meaningful Experience</li>
              <li>Continuous Learning</li>
              <li>Responsive and Result-Oriented</li>
              <li>Building Relationships for Life</li>
            </ul>
          </div> */}
        </motion.section>
      </main>
    </div>
  );
}
