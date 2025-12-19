import { useState, useEffect } from "react";
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

const coupleImages = [
  couple1,
  couple2,
  couple3,
  couple4,
  couple5,
  couple6,
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const swipeThreshold = 60;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [index]);

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -swipeThreshold && index < cards.length - 1) {
      setIndex((i) => i + 1);
    } else if (info.offset.x > swipeThreshold && index > 0) {
      setIndex((i) => i - 1);
    }
  };

  return (
    <main className="relative w-full min-h-screen bg-gray-900 md:bg-gradient-to-b md:from-[#fbe9dd] md:via-[#c7d8ff] md:to-[#9fb9ff]">

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:flex max-w-[1200px] mx-auto min-h-screen items-start justify-center px-6 py-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.08}
            onDragEnd={handleDragEnd}
            className="flex w-full cursor-grab active:cursor-grabbing"
            initial={{ rotateY: 10, opacity: 0.9 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: -10, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* LEFT PANEL */}
            <div className="w-1/2 bg-white rounded-l-2xl shadow-lg p-6 border border-[#8FA7BF]/30">
              {index % 2 === 0 ? (
                cards[index]
              ) : (
                <img
                  src={coupleImages[index]}
                  alt="Couple"
                  className="w-full h-auto object-cover rounded-l-2xl"
                />
              )}
            </div>

            {/* RIGHT PANEL */}
            <div className="w-1/2 bg-white rounded-r-2xl shadow-lg p-6 border border-[#8FA7BF]/30">
              {index % 2 === 0 ? (
                <img
                  src={coupleImages[index]}
                  alt="Couple"
                  className="w-full h-auto object-cover rounded-r-2xl"
                />
              ) : (
                cards[index]
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden px-4 pt-8 pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.06}
            onDragEnd={handleDragEnd}
            className="cursor-grab active:cursor-grabbing"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {/* IMAGE */}
            <div className="relative w-full h-[55vh] mb-6 rounded-xl overflow-hidden">
              <img
                src={coupleImages[index]}
                alt="Couple"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* CARD (NATURAL HEIGHT) */}
            <div className="w-full max-w-md mx-auto">
              {cards[index]}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
