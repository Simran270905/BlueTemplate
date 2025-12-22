// src/pages/Home.jsx
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import SaveTheDate from "../components/SaveTheDate";
import WeddingInvite from "../components/WeddingInvite";
import Details from "../components/Detail"; // ✅ FIXED
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

  const containerRef = useRef(null); // ✅ NEW

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -swipeThreshold && index < cards.length - 1) {
      setIndex((i) => i + 1);
    }
    if (info.offset.x > swipeThreshold && index > 0) {
      setIndex((i) => i - 1);
    }
  };

  const currentCard = cards[index];
  const currentImage = coupleImages[index];

  return (
    <main
      ref={containerRef}
      className="relative w-full min-h-screen overflow-hidden bg-gray-900 md:bg-gradient-to-b md:from-[#fbe9dd] md:via-[#c7d8ff] md:to-[#9fb9ff]"
    >
      {/* ================= DESKTOP ================= */}
      <div className="hidden md:flex h-full max-w-[1200px] mx-auto items-center px-6 p-10 gap-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            drag="x"
            dragConstraints={containerRef} // ✅ FIXED
            dragElastic={0.08}
            onDragEnd={handleDragEnd}
            className="flex w-full max-h-[650px] cursor-grab active:cursor-grabbing"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex-1 bg-white rounded-l-3xl shadow-xl flex items-center justify-center overflow-hidden">
              {index % 2 === 0 ? currentCard : (
                <img src={currentImage} className="w-full h-full object-cover" />
              )}
            </div>

            <div className="flex-1 bg-white rounded-r-3xl shadow-xl flex items-center justify-center overflow-hidden">
              {index % 2 === 0 ? (
                <img src={currentImage} className="w-full h-full object-cover" />
              ) : currentCard}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden w-full min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            drag="x"
            dragConstraints={containerRef} // ✅ FIXED
            dragElastic={0.05}
            onDragEnd={handleDragEnd}
            className="relative w-full min-h-screen"
          >
            <img
              src={currentImage}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />

            <div className="relative z-10 flex items-center justify-center w-full h-full px-4">
              <div className="w-full max-w-md backdrop-blur-md bg-black/20 rounded-3xl p-4 shadow-xl">
                {currentCard}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
