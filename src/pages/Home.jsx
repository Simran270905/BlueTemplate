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
  const swipeThreshold = 60;

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
    <main className="relative w-full min-h-screen overflow-hidden bg-gray-900 md:bg-gradient-to-b md:from-[#fbe9dd] md:via-[#c7d8ff] md:to-[#9fb9ff]">
      {/* ================= DESKTOP ================= */}
      <div className="hidden md:flex max-w-[1200px] mx-auto h-screen items-center justify-center px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
            className="flex w-full h-[700px] cursor-grab active:cursor-grabbing"
            initial={{ rotateY: 15, opacity: 0.8 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: -15, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* LEFT PANEL */}
            <div className="w-1/2 bg-white rounded-l-2xl shadow-lg overflow-y-auto p-6 border border-[#8FA7BF]/30">
              {index % 2 === 0 ? (
                cards[index]
              ) : (
                <img
                  src={coupleImages[index]}
                  alt="Couple"
                  className="w-full h-full object-cover rounded-l-2xl"
                />
              )}
            </div>

            {/* RIGHT PANEL */}
            <div className="w-1/2 bg-white rounded-r-2xl shadow-lg overflow-y-auto p-6 border border-[#8FA7BF]/30">
              {index % 2 === 0 ? (
                <img
                  src={coupleImages[index]}
                  alt="Couple"
                  className="w-full h-full object-cover rounded-r-2xl"
                />
              ) : (
                cards[index]
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ================= MOBILE FULLSCREEN ================= */}
      <div className="md:hidden fixed inset-0 w-screen h-[100dvh] overflow-hidden bg-black">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* FULLSCREEN IMAGE */}
            <motion.img
              src={coupleImages[index]}
              alt="Couple"
              className="absolute inset-0 w-full h-full object-cover object-center"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            />

            {/* SOFT DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/35" />

            {/* CENTERED CARD – NO BORDER */}
            <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
              <div className="w-full max-w-md p-4">
                {cards[index]}
              </div>
            </div>

            {/* MOBILE NAV BUTTONS */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-20">
              {index > 0 && (
                <button
                  onClick={prevPage}
                  className="px-3 py-2 bg-white/90 text-black rounded-md shadow"
                >
                  ←
                </button>
              )}
              <button
                onClick={nextPage}
                className="px-3 py-2 bg-white/90 text-black rounded-md shadow"
              >
                →
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
