import { motion } from "framer-motion";
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
  return (
    <InviteCard>
      {/* Fixed Flowers */}
      <img src={flower} className="absolute top-0 left-0 w-36 md:w-40 pointer-events-none" alt="" />
      <img src={flower} className="absolute bottom-0 right-0 w-32 md:w-36 scale-x-[-1] scale-y-[-1] pointer-events-none" alt="" />

      <motion.div className="relative z-10 flex flex-col items-center text-center space-y-6 overflow-auto max-h-[90%] px-4 sm:px-6 md:px-8 py-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-head font-bold text-[#8FA7BF] mb-8">
          Wedding Timeline
        </h2>

        {/* Timeline Items */}
        <div className="flex flex-wrap md:flex-nowrap justify-between gap-4 w-full max-w-3xl">
          {timelineItems.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center flex-1 min-w-[80px]">
              <img src={item.icon} alt={item.label} className="h-8 md:h-10 mb-2 md:mb-3" />
              <div className="w-full h-[2px] bg-[#8FA7BF] relative mb-2 md:mb-3">
                <span className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 bg-[#8FA7BF] rounded-full" />
              </div>
              <p className="text-xs md:text-sm font-sans tracking-widest">{item.time}</p>
              <p className="text-[9px] md:text-xs mt-1 tracking-widest">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Unplugged Ceremony */}
        <div className="max-w-md mt-8">
          <p className="uppercase font-bold text-slate-500 text-xs md:text-sm tracking-wide mb-2">Unplugged Ceremony</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            Our talented photographers will capture every aspect of our ceremony. We request joyful smiles without the distraction of electronic devices. Please keep them away until we tie the knot.
          </p>
        </div>

        {/* Snap & Share */}
        <div className="max-w-md mt-6">
          <p className="uppercase font-bold text-slate-500 text-xs md:text-sm tracking-wide mb-2">Snap & Share</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            Help us capture our special day by tagging us or using our wedding hashtag <br />
            <span className="font-bold tracking-wide">#BrideAndGroomUnion</span>
          </p>
        </div>
      </motion.div>
    </InviteCard>
  );
};

export default WeddingTimeline;
