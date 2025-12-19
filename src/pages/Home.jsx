import { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

import SaveTheDate from "../components/SaveTheDate";
import WeddingInvite from "../components/WeddingInvite";
import Details from "../components/Detail";
import WeddingTimeline from "../components/WeddingTimeLine";
import EntouragePrimary from "../components/EntouragePrimary";
import EntourageSecondary from "../components/EntourageSecondary";

const cards = [
  <SaveTheDate />,
  <WeddingInvite />,
  <Details />,
  <WeddingTimeline />,
  <EntouragePrimary />,
  <EntourageSecondary />,
];

export default function Home() {
  const [index, setIndex] = useState(0);

  const x = useMotionValue(0);
  const rotate = useTransform(x, [-300, 300], [-8, 8]);
  const rotateX = useTransform(x, [-300, 300], [-5, 5]);
  const rotateY = useTransform(x, [-300, 300], [3, -3]);

  const swipeThreshold = 60;

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -swipeThreshold && index < cards.length - 1) {
      setIndex((i) => i + 1);
    } else if (info.offset.x > swipeThreshold && index > 0) {
      setIndex((i) => i - 1);
    }
    x.set(0); // reset position
  };

  return (
    <main className="w-full min-h-screen bg-[#f4f6fb] flex items-center justify-center [perspective:1000px] overflow-hidden">
      <div className="relative w-full h-full flex items-center justify-center">

        {/* ONLY CURRENT CARD */}
        <motion.div
          drag="x"
          dragConstraints={{ left: -200, right: 200 }}
          dragElastic={0.3}
          dragMomentum={false}
          onDragEnd={handleDragEnd}
          style={{
            x,
            rotate,
            rotateX,
            rotateY,
            touchAction: "pan-x",
            zIndex: 50,
          }}
          className="
            absolute w-full max-w-[600px] min-h-[80vh]
            cursor-grab active:cursor-grabbing
            flex items-start justify-center
            shadow-[0_35px_60px_rgba(0,0,0,0.3)]
            backdrop-blur-sm rounded-[24px]
            overflow-hidden
            sm:px-4 md:px-6
          "
          initial={{ scale: 0.95, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 280, damping: 35, mass: 0.6 }}
          whileTap={{ cursor: "grabbing", scale: 0.99 }}
        >
          {/* Smooth vertical scroll */}
          <div className="w-full h-full overflow-y-auto overscroll-contain scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent p-4 sm:p-6 md:p-8">
            {cards[index]}
          </div>
        </motion.div>

      </div>
    </main>
  );
}
