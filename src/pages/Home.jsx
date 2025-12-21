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
  const swipeThreshold = 80;

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -swipeThreshold && index < cards.length - 1) {
      setIndex(i => i + 1);
    }
    if (info.offset.x > swipeThreshold && index > 0) {
      setIndex(i => i - 1);
    }
  };

  const currentCard = cards[index];
  const currentImage = coupleImages[index];

  return (
    <main className="relative w-full h-screen overflow-hidden bg-gray-900 md:bg-gradient-to-b md:from-[#fbe9dd] md:via-[#c7d8ff] md:to-[#9fb9ff]">

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:flex h-full max-w-[1200px] mx-auto items-center px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.08}
            onDragEnd={handleDragEnd}
            className="flex w-full max-h-[650px] cursor-grab active:cursor-grabbing"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5 }}
          >
            {/* LEFT PANEL */}
            <div className="w-1/2 bg-white rounded-l-3xl shadow-xl flex items-center justify-center overflow-hidden">
              {index % 2 === 0 ? currentCard : (
                <img
                  src={currentImage}
                  alt="Couple"
                  className="w-full h-full object-cover rounded-l-3xl"
                  loading="lazy"
                />
              )}
            </div>

            {/* RIGHT PANEL */}
            <div className="w-1/2 bg-white rounded-r-3xl shadow-xl flex items-center justify-center overflow-hidden">
              {index % 2 === 0 ? (
                <img
                  src={currentImage}
                  alt="Couple"
                  className="w-full h-full object-cover rounded-r-3xl"
                  loading="lazy"
                />
              ) : currentCard}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.05}
            onDragEnd={handleDragEnd}
            className="relative w-full h-full cursor-grab active:cursor-grabbing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Background Image */}
            <img
              src={currentImage}
              alt="Couple"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/30" />

            {/* Content Card */}
            <div className="relative z-10 h-full flex items-center justify-center px-4">
              <div className="w-full max-w-sm backdrop-blur-md bg-black/20 border border-white/25 rounded-3xl shadow-xl p-4">
                {currentCard}
              </div>
            </div>

            {/* Swipe Hint */}
            <div className="absolute bottom-6 w-full flex justify-center z-20">
              <div className="flex items-center gap-2 text-white/90 text-sm">
                <span className="w-8 h-1.5 bg-white/70 rounded-full"></span>
                <span>Swipe</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
