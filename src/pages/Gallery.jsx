// Gallery.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "/gallery1.jpeg";
import img2 from "/gallery2.jpeg";
import img3 from "/gallery3.jpeg";
import img4 from "/gallery4.jpeg";
import img5 from "/gallery5.jpeg";

// Animate on mount (no whileInView / viewport)
const fade = (d = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: "easeOut", delay: d },
});

const POP = {
  initial: { opacity: 0, scale: 0.96, y: 8 },
  animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.22, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.98, y: 4, transition: { duration: 0.18, ease: "easeIn" } },
};

// Masonry columns (use your own images)
const COLS = [
  [img1],
  [img2],
  [img3],
  [img4],
];

function useEsc(handler) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && handler();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handler]);
}

function Lightbox({ open, onClose, src }) {
  const cardRef = useRef(null);
  useEsc(() => open && onClose());

  useEffect(() => {
    if (!open) return;
    const prev = document.activeElement;
    return () => prev && prev.focus?.();
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
        >
          {/* Overlay closes on click */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            {...POP}
            ref={cardRef}
            className="relative mx-auto mt-20 md:w-[30%] rounded border border-amber-200/70 bg-white/95 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={src} alt="Preview" className="w-full h-auto max-h-[78vh] object-cover rounded" />
            <button
              onClick={onClose}
              className="absolute top-3 right-3 rounded-lg bg-white/90 px-3 py-1.5 text-sm font-medium text-slate-700 shadow hover:bg-white"
              aria-label="Close"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState("");

  const allImages = useMemo(() => COLS.flat(), []);
  const openLightbox = (src) => { setImgSrc(src); setOpen(true); };

  return (
    <div className="min-h-screen w-full">
      {/* Header */}
      <section className="mx-auto max-w-7xl px-6 pt-12 md:pt-16">
        <motion.div {...fade(0)}>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Explore Our Gallery</h1>
          <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/70 px-3 py-1 text-xs font-medium text-amber-800 shadow-sm backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-500" />
            Gallery
          </span>
        </motion.div>
        <motion.h1 {...fade(0.05)} className="text-lg md:text-4xl font-extrabold tracking-tight" />
        <motion.p {...fade(0.1)} className="mt-3 max-w-3xl text-sm md:text-base text-slate-700">
          A professional masonry album with smooth previews, Memories &amp; Moments — beautifully organized.
        </motion.p>
      </section>

      {/* Masonry Grid */}
      <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {COLS.map((col, ci) => (
            <div key={ci} className="grid gap-4">
              {col.map((src, ri) => (
                <motion.button
                  key={ri}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.28, ease: "easeOut", delay: 0.06 * (ci + ri) }}
                  onClick={() => openLightbox(src)}
                  className="self-start group relative rounded-2xl bg-white/80 border border-amber-200/70 p-1 shadow-[0_6px_20px_rgba(17,24,39,0.08)] hover:shadow-[0_12px_28px_rgba(17,24,39,0.14)] transition-shadow backdrop-blur text-left"
                >
                  {/* subtle hover glow */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity [background:radial-gradient(220px_72px_at_18%_0%,rgba(251,191,36,0.16),transparent_60%)]" />
                  <img src={src} alt={`EEC gallery ${ci}-${ri}`} className="h-auto w-full rounded-xl object-cover" loading="lazy" />
                  {/* lift shadow */}
                  <div className="mt-2 h-4 rounded-xl bg-gradient-to-b from-transparent to-black/5 blur-[5px] opacity-70" />
                </motion.button>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox open={open} onClose={() => setOpen(false)} src={imgSrc} />
    </div>
  );
}
