import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaBook, FaUserGraduate, FaBrain, FaBusAlt, FaClipboardList, FaUsersCog, FaMoneyBillWave,
  FaCheckCircle, FaChartLine, FaTasks, FaChalkboardTeacher, FaAward, FaTrophy, FaRegLightbulb,
  FaClock, FaShieldAlt, FaSatelliteDish, FaRoute, FaFileAlt, FaListAlt, FaBullseye, FaBell,
  FaFileSignature, FaUserShield, FaIdCard, FaMoneyCheckAlt, FaReceipt, FaHistory, FaBellSlash
} from "react-icons/fa";
import { FaFileArrowDown } from "react-icons/fa6";
import { IMAGES } from "../data/images";

const categories = [
  {
    key: "academics",
    title: "Academics Management",
    bg: "from-amber-100 via-amber-100 to-amber-200",
    image: IMAGES.academics,
    features: [
      {
        title: "Personalized Learning Paths",
        desc: "EEC offers tailored learning experiences, adapting to each student’s pace and abilities. This ensures that every student gets the right content to meet their individual educational needs effectively.",
        icon: <FaBullseye className="text-amber-600 text-3xl" />
      },
      {
        title: "Progress Tracking",
        desc: "Teachers and students can easily monitor progress through detailed reports. Real-time analytics help identify strengths, weaknesses, and areas for improvement, allowing for timely interventions and goal adjustments.",
        icon: <FaAward className="text-emerald-600 text-3xl" />
      },
      {
        title: "Lesson & Resource Management",
        desc: "Teachers can upload and organize lessons, worksheets, videos, and assessments. This feature ensures smooth resource management, enhancing classroom learning and providing students with easy access to materials and activities.",
        icon: <FaFileArrowDown className="text-sky-600 text-3xl" />
      },
      {
        title: "Interactive Assessments",
        desc: "EEC provides quizzes and self-assessments to help students gauge their understanding. Students can unlock further content as they complete assessments, motivating them to progress and learn continuously with engaging activities.",
        icon: <FaListAlt className="text-indigo-600 text-3xl" />
      },
    ],
  },
  {
    key: "students",
    title: "Student Management",
    bg: "from-amber-100 via-amber-100 to-amber-200",
    image: IMAGES.students,
    features: [
      {
        title: "Personalized Dashboard",
        desc: "Students have access to their own personalized dashboard, where they can track learning progress, achievements, and upcoming lessons. It provides a clear overview of their academic and wellness status.",
        icon: <FaUserGraduate className="text-indigo-600 text-3xl" />
      },
      {
        title: "Progress Monitoring",
        desc: "Real-time progress tracking allows students to see their strengths and areas for improvement. Detailed analytics guide students to stay on track, making learning goals more achievable and motivating.",
        icon: <FaChartLine className="text-pink-600 text-3xl" />
      },
      {
        title: "Progress Reward System",
        desc: "Students earn points and rewards for completing lessons, quizzes, and tasks. These points unlock new stages, providing a fun and motivating learning experience that encourages continuous growth and engagement.",
        icon: <FaTrophy className="text-amber-600 text-3xl" />
      },
      {
        title: "Learning Analytics",
        desc: "EEC provides students with insightful learning analytics. This data helps identify performance patterns, offering actionable feedback and recommendations to improve learning outcomes and boost academic success.",
        icon: <FaRegLightbulb className="text-emerald-600 text-3xl" />
      },
    ],
  },
  {
    key: "ai",
    title: "AI & ML Features",
    bg: "from-amber-100 via-amber-100 to-amber-200",
    image: IMAGES.ai,
    features: [
      {
        title: "Tailored Learning Journeys",
        desc: "AI customizes learning paths based on student performance, interests, and pace, ensuring an optimized and personal educational experience.",
        icon: <FaBrain className="text-amber-700 text-3xl" />
      },
      {
        title: "Smart Progress Insights",
        desc: "Machine Learning analyzes student data to generate insights and recommendations for targeted improvements in real-time.",
        icon: <FaFileAlt className="text-amber-600 text-3xl" />
      },
      {
        title: "Predictive Performance Alerts",
        desc: "AI anticipates student outcomes and flags potential challenges, providing early intervention opportunities for enhanced academic success.",
        icon: <FaBell className="text-rose-600 text-3xl" />
      },
      {
        title: "Instant Automated Feedback",
        desc: "ML algorithms assess assignments and assessments, providing immediate, personalized feedback to support rapid student growth.",
        icon: <FaFileSignature className="text-indigo-600 text-3xl" />
      },
    ],
  },
  {
    key: "library",
    title: "E-Library & Transportation",
    bg: "from-amber-100 via-amber-100 to-amber-200",
    image: IMAGES.library,
    features: [
      {
        title: "Digital E-Library Access",
        desc: "A comprehensive online library for students to access study materials, e-books, and resources anytime, enhancing learning flexibility and convenience.",
        icon: <FaBook className="text-orange-600 text-3xl" />
      },
      {
        title: "Real-Time Fleet Tracking",
        desc: "Track and manage school buses or other transport vehicles in real time, ensuring smooth operations and timely arrivals.",
        icon: <FaSatelliteDish className="text-sky-600 text-3xl" />
      },
      {
        title: "Enhanced Safety Features",
        desc: "Monitor vehicle health and driver behavior, guaranteeing student safety during transit with constant safety checks and alerts.",
        icon: <FaShieldAlt className="text-emerald-600 text-3xl" />
      },
      {
        title: "GPS-Based Student Tracking",
        desc: "Secure tracking of students from pick-up to drop-off, providing parents and schools with peace of mind.",
        icon: <FaRoute className="text-indigo-600 text-3xl" />
      },
    ],
  },
  {
    key: "exam",
    title: "Exam Management",
    bg: "from-amber-100 via-amber-100 to-amber-200",
    image: IMAGES.exam,
    features: [
      {
        title: "Seamless Exam Scheduling",
        desc: "EEC allows schools to schedule exams efficiently, with automated reminders for students and teachers to stay on track.",
        icon: <FaClipboardList className="text-amber-700 text-3xl" />
      },
      {
        title: "Secure Online Assessments",
        desc: "Conduct online exams with secure, customizable question formats, ensuring academic integrity while providing flexibility in test-taking.",
        icon: <FaTasks className="text-red-600 text-3xl" />
      },
      {
        title: "Instant Result Generation",
        desc: "After exam completion, results are automatically generated and shared, providing students and teachers with immediate feedback.",
        icon: <FaCheckCircle className="text-emerald-600 text-3xl" />
      },
      {
        title: "Performance Analytics",
        desc: "Detailed analytics of exam performance, highlighting strengths and areas for improvement, helping students track progress.",
        icon: <FaChartLine className="text-indigo-600 text-3xl" />
      },
    ],
  },
  {
    key: "hr",
    title: "HR Management",
    bg: "from-amber-100 via-amber-100 to-amber-200",
    image: IMAGES.hr,
    features: [
      {
        title: "Attendance Monitoring",
        desc: "Automated tracking of both staff and students; attendance with notifications for absenteeism.",
        icon: <FaIdCard className="text-rose-600 text-3xl" />
      },
      {
        title: "Leave Management",
        desc: "Streamlined leave request and approval process, maintaining accurate leave records for staff.",
        icon: <FaClock className="text-amber-600 text-3xl" />
      },
      {
        title: "HR Insights",
        desc: "Analytics to monitor key metrics like staff performance and attendance, aiding management decisions.",
        icon: <FaUserShield className="text-emerald-600 text-3xl" />
      },
      {
        title: "Employee Records",
        desc: "Centralized management of staff data, including roles, qualifications, and performance history.",
        icon: <FaFileAlt className="text-indigo-600 text-3xl" />
      },
    ],
  },
  {
    key: "finance",
    title: "Finance Management",
    bg: "from-amber-100 via-amber-100 to-amber-200",
    image: IMAGES.finance,
    features: [
      {
        title: "Fee Payment Management",
        desc: "EEC offers a streamlined system for fee collection with multiple payment gateways, enabling smooth, hassle-free payments for parents and schools.",
        icon: <FaMoneyCheckAlt className="text-emerald-600 text-3xl" />
      },
      {
        title: "Financial Due Reports",
        desc: "Automatically generated reports on outstanding payments, providing schools with real-time visibility into pending dues and allowing for timely follow-ups.",
        icon: <FaReceipt className="text-sky-600 text-3xl" />
      },
      {
        title: "Payment History Reports",
        desc: "Detailed payment transaction reports, giving schools and parents easy access to historical payment data and receipts.",
        icon: <FaHistory className="text-amber-600 text-3xl" />
      },
      {
        title: "Payment Reminders Payment",
        desc: "Automated reminders sent to parents regarding upcoming or overdue fees, ensuring timely payments and reducing manual follow-ups.",
        icon: <FaBellSlash className="text-rose-600 text-3xl" />
      },
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
        (entries) =>
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveSection(entry.target.id);
          }),
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

      {categories.map((cat, idx) => {
        // ensure: image first on mobile, alternate on lg+
        const imageOrder = idx % 2 === 0 ? "order-1 lg:order-1" : "order-1 lg:order-2";
        const featuresOrder = idx % 2 === 0 ? "order-2 lg:order-2" : "order-2 lg:order-1";

        return (
          <motion.div
            key={cat.key}
            id={cat.key}
            className="feature-section relative min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 py-2 md:py-20 px-6"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Image */}
            <img
              src={cat.image}
              alt={cat.title}
              loading="lazy"
              className={`w-full lg:w-[45%] object-cover ${imageOrder}`}
            />

            {/* Auto-scrolling carousel of feature cards */}
            <div className={`w-full lg:w-1/2 ${featuresOrder}`}>
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
                    ["--marquee-duration"]: `${Math.max(18, cat.features.length * 6)}s`,
                  }}
                >
                  {[...cat.features, ...cat.features].map((f, i) => (
                    <div
                      key={`${f.title}-${i}`}
                      className="min-w-[240px] max-w-[280px] p-6 rounded-3xl bg-white/75 backdrop-blur-xl border border-amber-200"
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
        );
      })}

      {/* Styles for the infinite marquee */}
      <style>{`
        .marquee-track {
          animation: eec-marquee var(--marquee-duration, 22s) linear infinite;
        }
        @keyframes eec-marquee {
          0%   { transform: translate3d(0,0,0); }
          100% { transform: translate3d(-50%,0,0); }
        }
        .marquee-track:hover { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; transform: none; }
        }
      `}</style>
    </section>
  );
};

export default Features;
