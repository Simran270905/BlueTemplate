import { motion } from "framer-motion";
import flower from "../assets/Image/flower.png";
import engage from "../assets/Image/engage.png";
import cocktail from "../assets/Image/cocktail.png";
import photos from "../assets/Image/photos.png";
import dinner from "../assets/Image/dinner.png";
import party from "../assets/Image/party.png";

const WeddingTimeline = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.3 }
    }
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.7, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.5, type: "spring", bounce: 0.3 }
    }
  };

  const timelineItemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="w-full flex justify-center">
      <motion.div
        className="
          relative
          w-full
          max-w-[900px]
          min-h-[500px]
          bg-white
          border border-[#8FA7BF]/40
          shadow-[0_20px_60px_rgba(0,0,0,0.15)]
          rounded-2xl
          px-6
          pt-16 pb-10
          md:px-10
          md:pt-20 md:pb-14
          flex
          flex-col
          justify-between
          overflow-hidden
        "
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Static Decor Flowers */}
        <img
          src={flower}
          alt=""
          className="absolute -top-10 left-0 w-40 md:w-56 pointer-events-none select-none"
        />
        <img
          src={flower}
          alt=""
          className="absolute bottom-0 -right-4 w-32 md:w-48 scale-x-[-1] scale-y-[-1] pointer-events-none select-none"
        />

        {/* HEADER */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          variants={fadeUpVariants}
        >
          <motion.h2 
            className="font-head font-bold text-3xl md:text-4xl lg:text-5xl text-[#8FA7BF] tracking-wide ml-6 mt-2"
            variants={iconVariants}
          >
            Wedding Timeline
          </motion.h2>
        </motion.div>

        {/* TIMELINE */}
        <motion.div 
          className="px-2 md:px-6 mb-10"
          variants={fadeUpVariants}
          transition={{ delay: 0.2 }}
        >
          <div className="flex flex-wrap md:flex-nowrap items-stretch justify-between text-[#8FA7BF] gap-6">
            {[
              { time: "3:00 PM", label: "CEREMONY", icon: engage },
              { time: "4:30 PM", label: "PHOTOS", icon: photos },
              { time: "5:00 PM", label: "COCKTAIL", icon: cocktail },
              { time: "6:00 PM", label: "DINNER", icon: dinner },
              { time: "7:30 PM", label: "PARTY", icon: party },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center text-center flex-1 min-w-[80px]"
                variants={timelineItemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 + (i * 0.1) }}
              >
                <motion.img
                  src={item.icon}
                  alt={item.label}
                  className="h-8 md:h-10 mb-3 md:mb-4"
                  variants={iconVariants}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />

                <div className="w-full h-[2px] bg-[#8FA7BF] relative mb-3 md:mb-4">
                  <motion.span 
                    className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 bg-[#8FA7BF] rounded-full"
                    variants={iconVariants}
                    animate={{ 
                      scale: [1, 1.2, 1],
                      transition: { 
                        duration: 1.5, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }
                    }}
                  />
                </div>

                <motion.p 
                  className="text-[10px] md:text-xs tracking-widest font-sans"
                  variants={fadeUpVariants}
                >
                  {item.time}
                </motion.p>
                <motion.p 
                  className="text-[9px] md:text-[10px] tracking-widest mt-1"
                  variants={fadeUpVariants}
                >
                  {item.label}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* UNPLUGGED CEREMONY */}
        <motion.div 
          className="text-center px-4 md:px-10 mb-8 md:mb-10"
          variants={fadeUpVariants}
          transition={{ delay: 0.8 }}
        >
          <motion.p 
            className="font-para font-bold text-[10px] md:text-xs tracking-[0.3em] text-[#8FA7BF] mb-3 md:mb-4 uppercase"
            variants={iconVariants}
          >
            Unplugged Ceremony
          </motion.p>
          <motion.p 
            className="font-font text-xs md:text-sm text-gray-700 leading-relaxed"
            variants={fadeUpVariants}
          >
            Our amazing and talented official photographers will capture every
            aspect of our ceremony. We request joyful smiles without the
            distraction of electronic devices. Please keep them away until we
            tie the knot.
          </motion.p>
        </motion.div>

        {/* SNAP & SHARE */}
        <motion.div 
          className="text-center px-4 md:px-10"
          variants={fadeUpVariants}
          transition={{ delay: 1 }}
        >
          <motion.p 
            className="font-para font-bold text-[10px] md:text-xs tracking-[0.3em] text-[#8FA7BF] mb-3 md:mb-4 uppercase"
            variants={iconVariants}
          >
            Snap & Share
          </motion.p>
          <motion.p 
            className="font-font text-xs md:text-sm text-gray-700 leading-relaxed"
            variants={fadeUpVariants}
          >
            Help us capture our special day by tagging us or using our wedding
            hashtag
            <br />
            <span className="font-bold tracking-wide">
              #BrideAndGroomUnion
            </span>
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WeddingTimeline;
