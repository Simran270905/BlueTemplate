// src/components/WeddingTimeline.jsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import InviteCard from "./InviteCard";
import flower from "../assets/Image/flower.png";
import engage from "../assets/Image/engage.png";
import cocktail from "../assets/Image/cocktail.png";
import photos from "../assets/Image/photos.png";
import dinner from "../assets/Image/dinner.png";
import party from "../assets/Image/party.png";

const timelineItems = [
  { time: "3:00 PM", label: "CEREMONY", icon: engage },
  { time: "4:30 PM", label: "PHOTOS", icon: photos },
  { time: "5:00 PM", label: "COCKTAIL", icon: cocktail },
  { time: "6:00 PM", label: "DINNER", icon: dinner },
  { time: "7:30 PM", label: "PARTY", icon: party },
];

const WeddingTimeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <InviteCard className="relative flex justify-center items-center min-h-[85vh] px-2 sm:px-4">
      {/* Original Flowers - EXACT SIZES PRESERVED */}
      <img
        src={flower}
        className="absolute top-0 left-0 w-28 sm:w-36 md:w-40 pointer-events-none"
        alt=""
      />
      <img
        src={flower}
        className="absolute bottom-0 right-0 w-24 sm:w-32 md:w-36 scale-x-[-1] scale-y-[-1] pointer-events-none"
        alt=""
      />

      {/* Content with Original Top Margin */}
      <motion.div 
        ref={ref}
        className="relative z-10 flex flex-col items-center text-center space-y-2 sm:space-y-3 w-full max-w-4xl mt-6 sm:mt-10 py-2"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
      >
        {/* Original Title */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-head font-bold text-[#8FA7BF] mb-2 sm:mb-3">
          Wedding Timeline
        </h2>

        {/* Compact Timeline */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 w-full px-1">
          {timelineItems.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center flex-shrink-0 w-16 sm:w-18 md:w-20"
            >
              <img
                src={item.icon}
                alt={item.label}
                className="h-6 sm:h-7 md:h-8 mb-1"
              />
              <div className="relative w-5 sm:w-6 h-[1.5px] bg-[#8FA7BF] mb-0.5 sm:mb-1">
                <span className="absolute -top-[3px] left-1/2 -translate-x-1/2 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#8FA7BF] rounded-full" />
              </div>
              <p className="text-[9px] sm:text-[10px] md:text-xs font-sans tracking-widest">{item.time}</p>
              <p className="text-[8px] sm:text-[9px] md:text-[10px] mt-0.5 tracking-widest">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Compact Unplugged */}
        <div className="max-w-sm mt-3 px-1 sm:px-0 text-xs sm:text-sm">
          <p className="uppercase font-bold text-slate-500 text-[10px] sm:text-xs tracking-wide mb-1">
            Unplugged Ceremony
          </p>
          <p className="text-xs sm:text-sm text-gray-700 leading-tight">
            Our talented photographers will capture every aspect of our ceremony. 
            We request joyful smiles without phones until we tie the knot.
          </p>
        </div>

        {/* Compact Snap & Share */}
        <div className="max-w-sm mt-2 px-1 sm:px-0 text-xs sm:text-sm">
          <p className="uppercase font-bold text-slate-500 text-[10px] sm:text-xs tracking-wide mb-1">
            Snap & Share
          </p>
          <p className="text-xs sm:text-sm text-gray-700 leading-tight">
            Help us capture our day by tagging us or using our wedding hashtag 
            <br />
            <span className="font-bold tracking-wide">#BrideAndGroomUnion</span>
          </p>
        </div>
      </motion.div>
    </InviteCard>
  );
};

export default WeddingTimeline;
