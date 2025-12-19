// src/pages/Home.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import SaveTheDate from "../components/SaveTheDate";
import WeddingInvite from "../components/WeddingInvite";
import Details from "../components/Detail";
import WeddingTimeline from "../components/WeddingTimeLine";
import EntouragePrimary from "../components/EntouragePrimary";
import EntourageSecondary from "../components/EntourageSecondary";

import couple1 from "../assets/Image/couple.jpg";
import couple2 from "../assets/Image/couple1.jpg";
import couple3 from "../assets/Image/couple2.jpg";
import couple4 from "../assets/Image/couple3.jpg";
import couple5 from "../assets/Image/couple4.jpg";
import couple6 from "../assets/Image/couple5.jpg";

const cards = [
  <SaveTheDate />,
  <WeddingInvite />,
  <Details />,
  <WeddingTimeline />,
  <EntouragePrimary />,
  <EntourageSecondary />,
];

const coupleImages = [couple1, couple2, couple3, couple4, couple5, couple6];

export default function Home() {
  const [index, setIndex] = useState(0);
  const swipeThreshold = 50;

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -swipeThreshold && index < cards.length - 1) {
      setIndex((i) => i + 1);
    } else if (info.offset.x > swipeThreshold && index > 0) {
      setIndex((i) => i - 1);
    }
  };

  const nextPage = () => {
    if (index < cards.length - 1) setIndex((i) => i + 1);
  };

  const prevPage = () => {
    if (index > 0) setIndex((i) => i - 1);
  };

  return (
    <main
      className="
        relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden
        bg-gray-900
        md:bg-gradient-to-b md:from-[#fbe9dd] md:via-[#c7d8ff] md:to-[#9fb9ff]
      "
    >
      <div className="w-full max-w-[1200px] flex flex-col items-center justify-center relative h-[80vh] md:h-screen">
        {/* DESKTOP TWO-PANEL */}
        <div className="hidden md:flex w-full h-[700px] gap-6 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragEnd={handleDragEnd}
              className="flex w-full h-full cursor-grab active:cursor-grabbing"
              style={{ perspective: 2000 }}
              initial={{ rotateY: 15, opacity: 0.8 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: -15, opacity: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {/* LEFT PANEL */}
              <div className="w-1/2 min-h-[700px] flex flex-col bg-white rounded-l-2xl shadow-lg overflow-y-auto p-6 border border-[#8FA7BF]/30">
                {index % 2 === 0 ? (
                  cards[index]
                ) : (
                  <motion.img
                    src={coupleImages[index]}
                    alt="Couple"
                    className="w-full h-auto object-cover rounded-l-2xl"
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  />
                )}
              </div>

              {/* RIGHT PANEL */}
              <div className="w-1/2 min-h-[800px] flex flex-col bg-white rounded-r-2xl shadow-lg overflow-y-auto p-3 border border-[#8FA7BF]/30">
                {index % 2 === 0 ? (
                  <motion.img
                    src={coupleImages[index]}
                    alt="Couple"
                    className="w-full h-auto object-cover rounded-r-2xl"
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  />
                ) : (
                  cards[index]
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* DESKTOP SWIPE BUTTONS */}
          <motion.div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 pointer-events-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: index === 0 && index < cards.length - 1 ? 1 : 0.4,
              y: 0,
            }}
            transition={{
              opacity: { duration: 0.5, repeat: Infinity, repeatType: "reverse" },
            }}
          >
            {index > 0 && (
              <motion.button
                onClick={prevPage}
                className="px-4 py-2 bg-white/90 backdrop-blur-sm border border-[#8FA7BF]/70 text-[#8FA7BF] text-xs font-medium rounded-lg shadow-lg pointer-events-auto hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ← Prev
              </motion.button>
            )}

            <motion.button
              onClick={nextPage}
              className="px-4 py-2 bg-gradient-to-r from-[#8FA7BF]/30 to-[#9fb9ff]/30 backdrop-blur-sm border border-[#8FA7BF]/70 text-[#8FA7BF] text-xs font-medium rounded-lg shadow-lg pointer-events-auto hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Swipe →
            </motion.button>
          </motion.div>
        </div>

        {/* MOBILE FULLSCREEN IMAGE + CARD */}
        <div className="md:hidden w-full h-screen relative overflow-hidden rounded-3xl shadow-2xl border-4 border-[#8FA7BF]/30">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={index}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragEnd={handleDragEnd}
              className="absolute w-full h-full cursor-grab active:cursor-grabbing"
              style={{ perspective: 2000 }}
              initial={{ rotateY: 30, opacity: 0, scale: 0.95 }}
              animate={{ rotateY: 0, opacity: 1, scale: 1 }}
              exit={{ rotateY: -30, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Fullscreen couple image */}
              <motion.img
                src={coupleImages[index]}
                alt="Couple"
                className="w-full h-full object-cover absolute inset-0 z-0"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, delay: 0.1 }}
              />

              {/* Card overlay */}
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4 z-10">
                <div className="w-full max-w-md mx-auto text-white">
                  {cards[index]}
                </div>
              </div>

              {/* Mobile swipe buttons */}
              <motion.div
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 pointer-events-none z-20"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: index === 0 && index < cards.length - 1 ? 1 : 0.4,
                }}
                transition={{
                  opacity: {
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                }}
              >
                {index > 0 && (
                  <motion.button
                    onClick={prevPage}
                    className="px-3 py-1.5 bg-white/95 backdrop-blur-sm border border-[#8FA7BF]/80 text-[#8FA7BF] text-xs font-semibold rounded-md shadow-xl pointer-events-auto hover:shadow-2xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    ←
                  </motion.button>
                )}
                <motion.button
                  onClick={nextPage}
                  className="px-3 py-1.5 bg-gradient-to-r from-[#8FA7BF]/40 to-[#9fb9ff]/40 backdrop-blur-sm border border-[#8FA7BF]/80 text-[#8FA7BF] text-xs font-semibold rounded-md shadow-xl pointer-events-auto hover:shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  →
                </motion.button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* PAGE DOTS */}
        <motion.div
          className="mt-4 md:mt-6 flex gap-1 absolute bottom-20 md:bottom-8 left-1/2 -translate-x-1/2 pointer-events-none z-30"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {cards.map((_, i) => (
            <motion.div
              key={i}
              className={`h-1.5 md:h-2 rounded-full transition-all ${
                i === index
                  ? "w-6 md:w-8 bg-[#8FA7BF] shadow-md"
                  : "w-1.5 md:w-2 bg-[#8FA7BF]/40"
              }`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </motion.div>
      </div>
    </main>
  );
}
