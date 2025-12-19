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
  const opacity = useTransform(x, [-300, 0, 300], [0, 1, 0]);

  const swipeThreshold = 80; // smaller for mobile

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -swipeThreshold && index < cards.length - 1) {
      setIndex((i) => i + 1);
    } else if (info.offset.x > swipeThreshold && index > 0) {
      setIndex((i) => i - 1);
    }
    x.set(0);
  };

  return (
    <main className="w-full min-h-screen bg-[#f4f6fb] flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full flex items-center justify-center">

        {/* CURRENT CARD */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          style={{ x, rotate, opacity, zIndex: 50, touchAction: "pan-x" }} // important for mobile
          className="
            absolute w-full min-h-full
            cursor-grab active:cursor-grabbing
            flex items-start justify-center
            sm:px-4 md:px-8
          "
          initial={{ y: 0, scale: 1 }}
          animate={{ y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          whileTap={{ cursor: "grabbing" }}
        >
          <div className="w-full min-h-full overflow-y-auto overscroll-contain p-4 sm:p-6 md:p-8">
            {cards[index]}
          </div>
        </motion.div>

      </div>
    </main>
  );
}
