import React from "react";
import { motion } from "framer-motion";
import { FaBolt, FaGlobe, FaLaptopCode } from "react-icons/fa";

const userCentricFeatures = [
  {
    title: "Speed Optimized for All Users",
    desc: "Lightweight and fast, even on slower internet connections.",
    icon: <FaBolt className="text-amber-500 text-4xl" />,
  },
  {
    title: "Web-Based Convenience",
    desc: "No installs. Works on any device with a browser.",
    icon: <FaGlobe className="text-sky-500 text-4xl" />,
  },
  {
    title: "Intuitive Interface",
    desc: "Simple, clean UI that anyone can use comfortably.",
    icon: <FaLaptopCode className="text-purple-500 text-4xl" />,
  },
];

const UserCentric = () => {
  return (
    <section className="relative py-20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-center text-slate-900 mb-16"
      >
        User-Centric Design & Seamless Access
      </motion.h2>

      <div className="grid gap-10 md:grid-cols-3 max-w-7xl mx-auto px-6">
        {userCentricFeatures.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="relative bg-white/75 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-amber-200 hover:shadow-2xl hover:scale-[1.03] transition group"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-200/20 to-amber-100/20 opacity-0 group-hover:opacity-100 transition" />
            <div className="relative z-10 flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-amber-100 shadow-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default UserCentric;
