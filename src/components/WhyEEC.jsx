import React from "react";
import { motion } from "framer-motion";
import { FaBrain, FaChartLine, FaLaptopCode, FaChartBar } from "react-icons/fa";

const WhyEEC = () => {
  const items = [
    {
      title: "AI-Powered Learning Insights",
      desc: "EEC utilizes artificial intelligence to analyze student progress and learning patterns, offering personalized recommendations that enhance each student’s learning journey.",
      icon: <FaBrain className="text-4xl text-amber-600" />,
      corners: ["bg-amber-400/40", "bg-yellow-400/40"],
    },
    {
      title: "Adaptive Learning Paths",
      desc: "With machine learning algorithms, EEC tailors educational content to the individual needs of each student, ensuring they learn at their own pace and level of understanding.",
      icon: <FaLaptopCode className="text-4xl text-amber-700" />,
      corners: ["bg-amber-300/40", "bg-amber-500/40"],
    },
    {
      title: "Advanced LMS Features",
      desc: "EEC’s Learning Management System (LMS) is designed for the future of education, with tools for interactive lessons, gamified content, and real-time assessments that keep students engaged.",
      icon: <FaChartLine className="text-4xl text-emerald-600" />,
      corners: ["bg-emerald-400/40", "bg-teal-400/40"],
    },
    {
      title: "Data-Driven Monitoring",
      desc: "Through AI and machine learning, EEC provides educators with real-time performance tracking, highlighting areas of improvement and helping create customized learning interventions for each student.",
      icon: <FaChartBar className="text-4xl text-sky-600" />,
      corners: ["bg-sky-400/40", "bg-indigo-400/40"],
    },
  ];

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="absolute top-10 left-10 w-72 h-72 bg-amber-300/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl -z-10" />

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 text-center"
      >
        Why Choose <span className="text-amber-600">EEC?</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-slate-600 max-w-2xl mx-auto mb-14 text-lg text-center"
      >
        EEC blends <span className="font-semibold text-slate-800">AI, adaptive learning,</span> and a robust LMS to deliver a{" "}
        <span className="font-semibold text-amber-700">future-ready educational experience.</span>
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="relative group p-8 rounded-2xl shadow-lg border border-amber-200 bg-white/75 backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:border-amber-400"
          >
            <div className={`absolute -top-6 -left-6 w-20 h-20 ${item.corners[0]} rounded-full blur-2xl opacity-70`} />
            <div className={`absolute -bottom-6 -right-6 w-20 h-20 ${item.corners[1]} rounded-full blur-2xl opacity-70`} />

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-amber-50 shadow-md">
                {item.icon}
              </div>
              <h3 className="font-bold text-lg mb-2 text-slate-900">{item.title}</h3>
              <p className="text-sm text-slate-700 leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyEEC;
