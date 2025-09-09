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
              <span className="font-extrabold text-amber-500">Electronic Educare (EEC), {" "}</span>
              we believe education goes beyond textbooks and exams. Schools today need a partner that not only supports academic excellence but also nurtures emotional well-being and builds stronger connections between students, teachers, and parents.
            </p>
            <p className="mt-3 text-slate-700 leading-relaxed">
              EEC is more than an LMS — it’s a complete AI-powered school ecosystem. From classrooms to staff rooms, from parents to principals, EEC unites every stakeholder on one secure, paperless, and intelligent platform.
            </p>
            <p className="mt-3 text-slate-700 leading-relaxed">
              Guided by our unique 4R Philosophy — Reflect, Revise, Retrieve, Repeat — EEC ensures learning is continuous, adaptive, and meaningful. With features like personalized AI learning, smart administration, advanced LMS, and well-being monitoring, we help schools create confident learners, empowered teachers, and satisfied parents.
            </p>
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
              At EEC, we envision a future where education transcends boundaries — a world where every learner, every teacher, and every institution is empowered with technology that makes learning smarter, seamless, and truly transformative. Our vision is to be the catalyst of change in the education ecosystem, uniting schools and students through a platform that fosters knowledge, creativity, well-being, and growth. We aim to shape a generation of learners who are not only academically excellent but also confident, emotionally strong, and future-ready.
            </p>
          </div>

          {/* Mission */}
          <div className="rounded-2xl border border-amber-200/70 bg-white/90 p-6 shadow-sm backdrop-blur">
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p>Our mission is to redefine learning and institutional growth by building an intelligent, inclusive, and integrated education ecosystem. We are committed to:</p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-slate-700">
              <li><strong>Empowering Institutions:</strong> Delivering powerful LMS & ERP solutions that simplify operations, enhance teaching, and optimize academic outcomes.</li>
              <li><strong>Empowering Institutions:</strong> Delivering powerful LMS & ERP solutions that simplify operations, enhance teaching, and optimize academic outcomes.</li>
              <li><strong>Seamless Collaboration:</strong> Bridging the gap between schools, teachers, parents, and students with transparent communication and real-time tracking.</li>
              <li><strong>Holistic Education:</strong> Encouraging not just knowledge acquisition but also critical thinking, creativity, mental wellness, and life skills.</li>
              <li><strong>Scalable & Inclusive Innovation:</strong> Offering solutions that are affordable, flexible, and impactful, ensuring quality education for learners across all backgrounds.</li>
              <li><strong>Future-Driven Excellence:</strong> Preparing institutions and learners to thrive in a rapidly changing digital-first world, where education is not just taught but truly experienced.</li>
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
