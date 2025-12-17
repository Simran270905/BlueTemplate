import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Details from "../components/Detail";
import WeddingTimeline from "../components/WeddingTimeLine";
import WeddingInvite from "../components/WeddingInvite";
import SaveTheDate from "../components/SaveTheDate";
import EntouragePrimary from "../components/EntouragePrimary";
import EntourageSecondary from "../components/EntourageSecondary";

const slides = [
  { id: 0, label: "Save the Date", component: <SaveTheDate /> },
  { id: 1, label: "Invite",        component: <WeddingInvite /> },
  { id: 2, label: "Details",       component: <Details /> },
  { id: 3, label: "Timeline",      component: <WeddingTimeline /> },
  { id: 4, label: "Entourage 1",   component: <EntouragePrimary /> },
  { id: 5, label: "Entourage 2",   component: <EntourageSecondary /> },
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 80 : -80,
      opacity: 0,
    }),
  };

  // small shiny particles in background
  const particles = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 6,
    duration: 8 + Math.random() * 5,
    left: Math.random() * 100,
    top: Math.random() * 100,
  }));

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#fbe9dd] via-[#c7d8ff] to-[#9fb9ff]">
      {/* broad blue glow */}
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute -left-40 top-1/4 w-80 h-80 rounded-full bg-[#8FA7BF]/28 blur-3xl" />
        <div className="absolute -right-40 bottom-0 w-96 h-96 rounded-full bg-[#6B9ACF]/28 blur-3xl" />
        <div className="absolute left-1/3 -top-24 w-72 h-72 rounded-full bg-[#A3BFFA]/22 blur-3xl" />
      </div>

      {/* blue spotlight right under the card */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[72vw] max-w-5xl h-[60vh] rounded-[48px] bg-[#8FA7BF]/55 blur-3xl" />
      </div>

      {/* some very soft sparkles */}
      <div className="pointer-events-none absolute inset-0">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-gradient-to-r from-[#A3BFFA]/70 to-[#6B9ACF]/50 shadow-md"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.left}%`,
              top: `${p.top}%`,
            }}
            animate={{
              opacity: [0.2, 0.7, 0.2],
              y: [0, -12, 0],
              x: [0, 8, -4, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
          />
        ))}
      </div>

      {/* slider wrapper */}
      <div className="w-full max-w-5xl px-4 md:px-8 relative z-10">
        <div className="relative min-h-[80vh] flex items-center justify-center">
          <AnimatePresence custom={current} mode="wait">
            <motion.div
              key={current}
              custom={current}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full flex justify-center"
            >
              {slides[current].component}
            </motion.div>
          </AnimatePresence>

          {/* left/right buttons – blue accented */}
          <button
            onClick={prev}
            className="absolute left-0 md:-left-10 top-1/2 -translate-y-1/2
                       bg-white/90 text-[#6B9ACF]
                       hover:bg-[#8FA7BF]/95 hover:text-white
                       backdrop-blur-sm rounded-full shadow-lg
                       px-4 py-3 text-lg font-light
                       transition-all duration-300
                       hover:shadow-[0_10px_30px_rgba(143,167,191,0.7)]
                       hover:scale-105"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute right-0 md:-right-10 top-1/2 -translate-y-1/2
                       bg-white/90 text-[#6B9ACF]
                       hover:bg-[#8FA7BF]/95 hover:text-white
                       backdrop-blur-sm rounded-full shadow-lg
                       px-4 py-3 text-lg font-light
                       transition-all duration-300
                       hover:shadow-[0_10px_30px_rgba(143,167,191,0.7)]
                       hover:scale-105"
          >
            ›
          </button>
        </div>

        {/* dots / labels */}
        <div className="flex justify-center gap-3 mt-6 flex-wrap">
          {slides.map((slide, index) => (
            <motion.button
              key={slide.id}
              onClick={() => setCurrent(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium tracking-wide
                          backdrop-blur-sm transition-all duration-300
                          ${
                            index === current
                              ? "bg-gradient-to-r from-[#6B9ACF] to-[#8FA7BF] text-white shadow-[0_10px_25px_rgba(107,154,207,0.6)]"
                              : "bg-white/85 text-[#6B9ACF] hover:bg-[#e5eeff] shadow-md"
                          }`}
            >
              {slide.label}
            </motion.button>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
