import { motion } from "framer-motion";
import InviteCard from "./InviteCard";
import flower from "../assets/Image/flower.png";
import coat from "../assets/Image/coat.png";
import outfit from "../assets/Image/outfit.png";
import shoes from "../assets/Image/shoes.png";
import gown from "../assets/Image/gown.png";

export default function Detail() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
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

  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.5, bounce: 0.2 }
    }
  };

  return (
    <InviteCard>
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

      {/* Content */}
      <motion.div 
        className="text-center mb-12 md:mb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 
          className="font-head font-bold text-3xl md:text-4xl lg:text-5xl text-[#8FA7BF] tracking-wide"
          variants={scaleVariants}
        >
          Details
        </motion.h2>
      
        {/* Dress Code */}
        <motion.div 
          className="w-full max-w-md mt-10"
          variants={fadeUpVariants}
        >
          <motion.p 
            className="tracking-[0.2em] text-xs sm:text-sm font-bold text-slate-700 uppercase mb-2"
            variants={scaleVariants}
          >
            Dress Code
          </motion.p>
          <motion.p 
            className="text-xs sm:text-sm text-slate-600 mb-4"
            variants={fadeUpVariants}
          >
            We kindly encourage our guests to wear formal attire with these
            colors on our special day.
          </motion.p>
          
          <motion.div 
            className="flex justify-center gap-3 mb-4 flex-wrap"
            variants={fadeUpVariants}
            transition={{ delay: 0.3 }}
          >
            {["#9fb3c8", "#2e537c", "#7fa1bd", "#9cb8d6"].map((c, i) => (
              <motion.div
                key={i}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-md cursor-pointer hover:shadow-lg"
                style={{ backgroundColor: c }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            ))}
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-6"
            variants={fadeUpVariants}
            transition={{ delay: 0.5 }}
          >
            <motion.img 
              src={coat} 
              className="h-12" 
              alt="Coat"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring" }}
            />
            <motion.img 
              src={outfit} 
              className="h-14" 
              alt="Outfit"
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={{ type: "spring" }}
            />
            <motion.img 
              src={shoes} 
              className="h-14" 
              alt="Shoes"
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ type: "spring" }}
            />
            <motion.img 
              src={gown} 
              className="h-12" 
              alt="Gown"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring" }}
            />
          </motion.div>
        </motion.div>

        {/* RSVP */}
        <motion.div 
          className="w-full max-w-md"
          variants={fadeUpVariants}
          transition={{ delay: 0.8 }}
        >
          <motion.p 
            className="tracking-[0.2em] text-xs sm:text-sm font-bold text-slate-700 uppercase mb-2"
            variants={scaleVariants}
          >
            RSVP
          </motion.p>
          <motion.p 
            className="text-xs sm:text-sm text-slate-600 mb-2"
            variants={fadeUpVariants}
          >
            We have reserved{" "}
            <span className="font-bold text-slate-800">___ seat(s)</span> in
            your honor.
          </motion.p>
          <motion.p 
            className="text-xs sm:text-sm text-slate-600"
            variants={fadeUpVariants}
            transition={{ delay: 0.2 }}
          >
            Kindly respond by <span className="font-semibold">June 1</span>
            <br />
            Message me at{" "}
            <span className="font-mono font-bold">01234567890</span>
          </motion.p>
        </motion.div>
      </motion.div>
    </InviteCard>
  );
}
