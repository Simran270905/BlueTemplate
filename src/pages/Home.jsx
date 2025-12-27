import { useState, useRef } from "react";
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

const homeConfig = {
  id: "wedding-home-carousel-1",
  cards: [
    <SaveTheDate />,
    <WeddingInvite />,
    <Details />,
    <WeddingTimeline />,
    <EntouragePrimary />,
    <EntourageSecondary />,
  ],
  coupleImages: [
    couple1, couple2, couple3, couple4, couple5, couple6,
  ],
  swipe: {
    threshold: 80,
    desktopElastic: 0.08,
    mobileElastic: 0.05,
  },
  desktop: {
    maxWidth: "1200px",
    maxHeight: "650px",
    containerPadding: "6",
    gap: "6",
  },
  mobile: {
    backdropOpacity: "20",
    overlayOpacity: "30",
    maxWidth: "md",
    padding: "4",
  },
  gradients: {
    desktop: {
      from: "#fbe9dd",
      via: "#c7d8ff",
      to: "#9fb9ff",
    },
    mobile: "bg-gray-900",
  },
  swipeIndicator: {
    text: "Swipe Right →",
    desktopOpacity: "100",
    mobileOpacity: "90",
  },
};

export default function Home({ config = homeConfig }) {
  const [index, setIndex] = useState(0);

  const containerRef = useRef(null);

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -config.swipe.threshold && index < config.cards.length - 1) {
      setIndex((i) => i + 1);
    }
    if (info.offset.x > config.swipe.threshold && index > 0) {
      setIndex((i) => i - 1);
    }
  };

  const currentCard = config.cards[index];
  const currentImage = config.coupleImages[index];

  return (
    <main
      ref={containerRef}
      className="relative w-full min-h-screen overflow-hidden bg-gray-900 md:bg-gradient-to-b md:from-[#fbe9dd] md:via-[#c7d8ff] md:to-[#9fb9ff]"
      style={{
        '--desktop-from': config.gradients.desktop.from,
        '--desktop-via': config.gradients.desktop.via,
        '--desktop-to': config.gradients.desktop.to,
      }}
    >
      {/* ================= DESKTOP ================= */}
      <div className="hidden md:flex h-full max-w-[1200px] mx-auto items-center px-6 p-10 gap-6 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            drag="x"
            dragConstraints={containerRef}
            dragElastic={config.swipe.desktopElastic}
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
        
        {/* Swipe indicator - Desktop */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 text-xl md:text-2xl font-bold tracking-wide flex items-center gap-2 opacity-0 md:opacity-100 pointer-events-none"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 0.8 }}
          transition={{ 
            y: { duration: 1, repeat: Infinity, repeatType: "reverse" },
            opacity: { duration: 1, repeat: Infinity, repeatType: "reverse" }
          }}
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
          {config.swipeIndicator.text}
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
        </motion.div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden w-full min-h-screen relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            drag="x"
            dragConstraints={containerRef}
            dragElastic={config.swipe.mobileElastic}
            onDragEnd={handleDragEnd}
            className="relative w-full min-h-screen"
          >
            <img
              src={currentImage}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-black/${config.mobile.overlayOpacity}`} />

            <div className="relative z-10 flex items-center justify-center w-full h-full px-4">
              <div className={`w-full max-w-${config.mobile.maxWidth} backdrop-blur-md bg-black/${config.mobile.backdropOpacity} rounded-3xl p-${config.mobile.padding} shadow-xl`}>
                {currentCard}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Swipe indicator - Mobile */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white/90 text-xl font-bold tracking-wide flex items-center gap-2 px-4 py-2 bg-black/20 backdrop-blur-sm rounded-full border border-white/30"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            y: { duration: 1, repeat: Infinity, repeatType: "reverse" },
            opacity: { duration: 1, repeat: Infinity, repeatType: "reverse" }
          }}
        >
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
          {config.swipeIndicator.text}
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
        </motion.div>
      </div>
    </main>
  );
}
