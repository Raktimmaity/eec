import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaBook, FaUserGraduate, FaBrain, FaBusAlt, FaClipboardList, FaUsersCog, FaMoneyBillWave, FaCheckCircle, FaChartLine, FaTasks, FaChalkboardTeacher } from "react-icons/fa";
import { FaFileArrowDown } from "react-icons/fa6";
import { IMAGES } from "../data/images";

const categories = [
  {
    key: "academics",
    title: "Academics Management",
    bg: "from-amber-100 via-amber-100 to-amber-200",
    image: IMAGES.academics,
    features: [
      { title: "Personalized Learning Paths", desc: "Tailored learning for every student.", icon: <FaTasks className="text-amber-600 text-3xl" /> },
      { title: "Progress Tracking", desc: "Insights and timely interventions.", icon: <FaChartLine className="text-emerald-600 text-3xl" /> },
      { title: "Lesson & Resource Management", desc: "Upload and organize content easily.", icon: <FaFileArrowDown className="text-sky-600 text-3xl" /> },
      { title: "Interactive Assessments", desc: "Engaging quizzes and tests.", icon: <FaChartLine className="text-indigo-600 text-3xl" /> },
    ],
  },
  {
    key: "students",
    title: "Student Management",
    bg: "from-amber-100 via-amber-100 to-amber-200",
    image: IMAGES.students,
    features: [
      { title: "Attendance", desc: "Real-time tracking.", icon: <FaCheckCircle className="text-indigo-600 text-3xl" /> },
      { title: "Profiles", desc: "Centralized student data.", icon: <FaChalkboardTeacher className="text-pink-600 text-3xl" /> },
    ],
  },
  {
    key: "ai",
    title: "AI & ML Features",
    bg: "from-amber-100 via-amber-100 to-amber-200",
    image: IMAGES.ai,
    features: [
      { title: "AI Insights", desc: "Data-driven recommendations.", icon: <FaBrain className="text-amber-700 text-3xl" /> },
      { title: "Predictive Analysis", desc: "Forecast performance trends.", icon: <FaChartLine className="text-amber-600 text-3xl" /> },
    ],
  },
  {
    key: "library",
    title: "E-Library & Transportation",
    bg: "from-amber-100 via-amber-100 to-amber-200",
    image: IMAGES.library,
    features: [
      { title: "Digital Resources", desc: "Access e-books and materials.", icon: <FaBook className="text-orange-600 text-3xl" /> },
      { title: "Transport Tracking", desc: "Real-time bus tracking.", icon: <FaBusAlt className="text-sky-600 text-3xl" /> },
    ],
  },
  {
    key: "exam",
    title: "Exam Management",
    bg: "from-amber-100 via-amber-100 to-amber-200",
    image: IMAGES.exam,
    features: [
      { title: "Exam Scheduling", desc: "Organize schedules easily.", icon: <FaClipboardList className="text-amber-700 text-3xl" /> },
      { title: "Online Assessments", desc: "Secure digital tests.", icon: <FaTasks className="text-red-600 text-3xl" /> },
    ],
  },
  {
    key: "hr",
    title: "HR Management",
    bg: "from-amber-100 via-amber-100 to-amber-200",
    image: IMAGES.hr,
    features: [
      { title: "Staff Profiles", desc: "Manage teacher & staff info.", icon: <FaUsersCog className="text-rose-600 text-3xl" /> },
      { title: "Payroll", desc: "Automated salary processing.", icon: <FaMoneyBillWave className="text-emerald-600 text-3xl" /> },
    ],
  },
  {
    key: "finance",
    title: "Finance Management",
    bg: "from-amber-100 via-amber-100 to-amber-200",
    image: IMAGES.finance,
    features: [
      { title: "Fee Collection", desc: "Seamless online payments.", icon: <FaMoneyBillWave className="text-emerald-600 text-3xl" /> },
      { title: "Expense Reports", desc: "Track & optimize expenses.", icon: <FaChartLine className="text-sky-600 text-3xl" /> },
    ],
  },
];

const Features = () => {
  const [activeSection, setActiveSection] = useState("academics");

  useEffect(() => {
    let observer;
    const sections = document.querySelectorAll(".feature-section");
    if (sections.length) {
      observer = new IntersectionObserver(
        (entries) => entries.forEach((entry) => { if (entry.isIntersecting) setActiveSection(entry.target.id); }),
        { threshold: 0.5 }
      );
      sections.forEach((sec) => observer.observe(sec));
    }
    return () => observer && observer.disconnect();
  }, []);

  return (
    <section className="relative">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative text-4xl md:text-5xl font-extrabold text-center py-16 text-slate-900"
      >
        Our <span className="text-amber-600">Features</span>
      </motion.h2>

      {categories.map((cat, idx) => (
        <motion.div
          key={cat.key}
          id={cat.key}
          className="feature-section relative min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 md:py-20 px-6"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Image */}
          <img
            src={cat.image}
            alt={cat.title}
            loading="lazy"
            className={`w-full lg:w-[45%] object-cover ${idx % 2 === 0 ? "order-1" : "order-2"}`}
          />

          {/* Auto-scrolling carousel of feature cards */}
          <div className={`w-full lg:w-1/2 ${idx % 2 === 0 ? "order-2" : "order-1"}`}>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{cat.title}</h3>

            {/* Marquee container */}
            <div className="relative overflow-hidden">
              {/* fade edges for a smoother visual */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white via-white/60 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white via-white/60 to-transparent" />

              {/* Track: duplicate items to make a seamless loop */}
              <div
                className="marquee-track flex w-max gap-6 will-change-transform"
                style={{
                  // Speed auto-adjusts with item count (slower when more cards)
                  // You can hardcode like '22s' if you want a fixed speed.
                  ["--marquee-duration"]: `${Math.max(18, cat.features.length * 6)}s`,
                }}
              >
                {[...cat.features, ...cat.features].map((f, i) => (
                  <div
                    key={`${f.title}-${i}`}
                    className="min-w-[240px] max-w-[280px] p-6 rounded-3xl shadow-xl bg-white/75 backdrop-blur-xl border border-amber-200"
                    aria-hidden={i >= cat.features.length ? true : undefined}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-3">{f.icon}</div>
                      <h4 className="font-bold text-lg text-slate-900 mb-2">{f.title}</h4>
                      <p className="text-sm text-slate-700">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* optional: small hint / remove if not needed */}
            {/* <p className="mt-3 text-xs text-slate-500">Hover to pause</p> */}
          </div>
        </motion.div>
      ))}

      {/* Styles for the infinite marquee */}
      <style>{`
        /* Infinite right-to-left scroll.
           We duplicate the sequence, then translate the whole track by -50% so the 2nd copy aligns seamlessly. */
        .marquee-track {
          animation: eec-marquee var(--marquee-duration, 22s) linear infinite;
        }
        @keyframes eec-marquee {
          0%   { transform: translate3d(0,0,0); }
          100% { transform: translate3d(-50%,0,0); }
        }
        /* Pause on hover for accessibility/reading */
        .marquee-track:hover { animation-play-state: paused; }

        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; transform: none; }
        }
      `}</style>
    </section>
  );
};

export default Features;
