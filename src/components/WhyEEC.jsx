import React, { useMemo } from "react";
import { LazyMotion, m, domAnimation } from "framer-motion";
import { FaBrain, FaChartLine, FaLaptopCode, FaChartBar } from "react-icons/fa";

const WhyEEC = React.memo(() => {
  const items = useMemo(() => ([
    {
      title: "AI-Powered Learning Insights",
      desc: "EEC utilizes artificial intelligence to analyze student progress and learning patterns, offering personalized recommendations that enhance each student’s learning journey.",
      icon: <FaBrain className="text-4xl text-amber-600" />,
      corners: ["bg-amber-300/35", "bg-yellow-300/35"],
    },
    {
      title: "Adaptive Learning Paths",
      desc: "With machine learning algorithms, EEC tailors educational content to the individual needs of each student, ensuring they learn at their own pace and level of understanding.",
      icon: <FaLaptopCode className="text-4xl text-amber-700" />,
      corners: ["bg-amber-200/35", "bg-amber-400/35"],
    },
    {
      title: "Advanced LMS Features",
      desc: "EEC’s Learning Management System (LMS) is designed for the future of education, with tools for interactive lessons, gamified content, and real-time assessments that keep students engaged.",
      icon: <FaChartLine className="text-4xl text-emerald-600" />,
      corners: ["bg-emerald-300/35", "bg-teal-300/35"],
    },
    {
      title: "Data-Driven Monitoring",
      desc: "Through AI and machine learning, EEC provides educators with real-time performance tracking, highlighting areas of improvement and helping create customized learning interventions for each student.",
      icon: <FaChartBar className="text-4xl text-sky-600" />,
      corners: ["bg-sky-300/35", "bg-indigo-300/35"],
    },
  ]), []);

  // Parent/child variants for fewer observers + better batching
  const container = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, when: "beforeChildren", staggerChildren: 0.12 },
    },
  };

  const itemV = {
    hidden: { opacity: 0, y: 28, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
  };

  return (
    <section
      className="relative py-20 px-6 overflow-hidden"
      style={{
        contentVisibility: "auto",           // skip layout/paint offscreen
        containIntrinsicSize: "800px",       // reserve space to avoid reflow
      }}
    >
      {/* Decorative glows — keep light to avoid heavy blurs */}
      <div className="pointer-events-none absolute top-10 left-10 w-60 h-60 rounded-full bg-amber-300/25 blur-2xl -z-10" />
      <div className="pointer-events-none absolute bottom-10 right-10 w-60 h-60 rounded-full bg-amber-200/25 blur-2xl -z-10" />

      <LazyMotion features={domAnimation} strict>
        <m.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={container}
          className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 text-center"
        >
          Why Choose <span className="text-amber-600">EEC?</span>
        </m.h2>

        <m.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={container}
          className="text-slate-600 max-w-2xl mx-auto mb-14 text-lg text-center"
        >
          EEC blends <span className="font-semibold text-slate-800">AI, adaptive learning,</span> and a robust LMS to deliver a{" "}
          <span className="font-semibold text-amber-700">future-ready educational experience.</span>
        </m.p>

        <m.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto"
        >
          {items.map((item, i) => (
            <m.article
              key={i}
              variants={itemV}
              className={[
                "relative group p-6 md:p-8 rounded-2xl border border-amber-200",
                // Removed backdrop-blur (expensive); keep semi-transparent background for glass vibe
                "bg-white/80",
                // Lighter shadow to reduce paint cost
                "shadow-md hover:shadow-lg transition-shadow duration-200",
                // GPU accel + will-change for smoothness
                "transform-gpu",
                "md:hover:scale-[1.02]",        // no hover scale on touch devices
              ].join(" ")}
              style={{ willChange: "transform, opacity" }}
            >
              {/* Soft corner glows (reduced size/blur) */}
              <div className={`absolute -top-4 -left-4 w-16 h-16 ${item.corners[0]} rounded-full blur-xl opacity-70`} />
              <div className={`absolute -bottom-4 -right-4 w-16 h-16 ${item.corners[1]} rounded-full blur-xl opacity-70`} />

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-amber-50 shadow">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-700 leading-relaxed">{item.desc}</p>
              </div>
            </m.article>
          ))}
        </m.div>

        {/* Respect prefers-reduced-motion */}
        <style>{`
          @media (prefers-reduced-motion: reduce) {
            * {
              animation-duration: 0.001ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.001ms !important;
              scroll-behavior: auto !important;
            }
          }
        `}</style>
      </LazyMotion>
    </section>
  );
});

export default WhyEEC;
