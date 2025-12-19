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
  const opacity = useTransform(x, [-500, -50, 0, 50, 500], [0, 1, 1, 1, 0]);
  const rotateX = useTransform(x, [-300, 300], [-10, 10]);
  const rotateY = useTransform(x, [-300, 300], [5, -5]);

  const swipeThreshold = 60;

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -swipeThreshold && index < cards.length - 1) {
      setIndex((i) => i + 1);
    } else if (info.offset.x > swipeThreshold && index > 0) {
      setIndex((i) => i - 1);
    }
    x.set(0);
  };

  return (
    <main className="w-full min-h-screen bg-[#f4f6fb] flex items-center justify-center [perspective:1000px] overflow-hidden">
      <div className="relative w-full h-full flex items-center justify-center">

        {cards.map((card, i) => {
          const offset = (i - index) * 20; // vertical offset for stack
          const scale = 1 - Math.abs(i - index) * 0.05; // scale smaller for back cards
          const zIndex = i === index ? 50 : 50 - Math.abs(i - index);
          const stackTiltX = Math.abs(i - index) * 3;
          const stackTiltY = (i - index) * 1.5;

          return (
            <motion.div
              key={i}
              drag={i === index ? "x" : false}
              dragConstraints={{ left: -200, right: 200 }}
              dragElastic={0.3}
              dragMomentum={false}
              onDragEnd={i === index ? handleDragEnd : undefined}
              style={{
                x: i === index ? x : 0,
                rotate: i === index ? rotate : 0,
                rotateX: i === index ? rotateX : stackTiltX,
                rotateY: i === index ? rotateY : stackTiltY,
                opacity: i === index ? opacity : 1,
                zIndex,
                transformOrigin: "center center -100px",
                touchAction: "pan-x",
              }}
              className={`
                absolute w-full min-h-full
                cursor-grab active:cursor-grabbing
                flex items-start justify-center
                sm:px-4 md:px-8
                ${i === index ? 'shadow-[0_35px_60px_rgba(0,0,0,0.3)]' : 'shadow-xl shadow-[#00000020]'}
                backdrop-blur-sm rounded-[24px]
              `}
              initial={{ y: offset, scale, rotateX: stackTiltX, rotateY: stackTiltY }}
              animate={{ y: offset, scale, rotateX: stackTiltX, rotateY: stackTiltY }}
              transition={{ type: "spring", stiffness: 280, damping: 35, mass: 0.6 }}
              whileTap={{ cursor: "grabbing", scale: 0.99 }}
            >
              <div className="w-full min-h-full overflow-y-auto overscroll-contain scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent p-4 sm:p-6 md:p-8">
                {card}
              </div>
            </motion.div>
          );
        })}

      </div>
    </main>
  );
}
