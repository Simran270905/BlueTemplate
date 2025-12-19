import { motion } from "framer-motion";
import InviteCard from "./InviteCard";
import flower from "../assets/Image/flower.png";

const EntourageSecondary = () => {
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

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  return (
    <InviteCard>
      {/* Static Background Flowers */}
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

      {/* Main Content */}
      <motion.div 
        className="relative z-10 flex flex-col items-center text-center w-full px-4 sm:px-6 md:px-8 py-6 space-y-6 sm:space-y-8 md:space-y-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Guiding text */}
        <motion.p 
          className="font-para font-bold text-[9px] sm:text-[10px] md:text-xs tracking-[0.25em] text-slate-500 uppercase max-w-md"
          variants={titleVariants}
        >
          To Guide Us In Our Sacred Journey
        </motion.p>

        {/* Groom / Bride side grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 w-full max-w-2xl text-slate-700"
          variants={fadeUpVariants}
        >
          <motion.div className="flex flex-col items-center" variants={fadeUpVariants}>
            <motion.p 
              className="font-para font-bold text-[9px] sm:text-[10px] md:text-xs tracking-[0.25em] text-slate-500 uppercase mb-2 sm:mb-3 md:mb-4 max-w-xs"
              variants={titleVariants}
            >
              Groom's Brothers & Cousins
            </motion.p>
            <motion.p 
              className="font-font text-xs sm:text-sm md:text-base leading-relaxed max-w-xs"
              variants={fadeUpVariants}
            >
              Name Here <br />
              Name Here <br />
              Name Here
            </motion.p>
          </motion.div>

          <motion.div className="flex flex-col items-center" variants={fadeUpVariants} transition={{ delay: 0.2 }}>
            <motion.p 
              className="font-para font-bold text-[9px] sm:text-[10px] md:text-xs tracking-[0.25em] text-slate-500 uppercase mb-2 sm:mb-3 md:mb-4 max-w-xs"
              variants={titleVariants}
            >
              Bride's Sisters & Cousins
            </motion.p>
            <motion.p 
              className="font-font text-xs sm:text-sm md:text-base leading-relaxed max-w-xs"
              variants={fadeUpVariants}
            >
              Name Here <br />
              Name Here <br />
              Name Here
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Ritual roles */}
        <motion.div 
          className="w-full max-w-md space-y-3 sm:space-y-4 md:space-y-5 text-slate-700"
          variants={fadeUpVariants}
          transition={{ delay: 0.4 }}
        >
          <motion.p 
            className="font-para font-bold text-[9px] sm:text-[10px] md:text-xs tracking-[0.25em] text-slate-500 uppercase"
            variants={titleVariants}
          >
            Ceremonial Roles
          </motion.p>
          
          <motion.p variants={fadeUpVariants}>
            <span className="font-medium text-slate-800">Pujari (Priest):</span>{" "}
            Name Here
          </motion.p>
          
          <motion.p variants={fadeUpVariants} transition={{ delay: 0.1 }}>
            <span className="font-medium text-slate-800">Mangalsutra Ritual:</span>{" "}
            Elder Family Members
          </motion.p>
          
          <motion.p variants={fadeUpVariants} transition={{ delay: 0.2 }}>
            <span className="font-medium text-slate-800">Agni Sakshi:</span>{" "}
            Both Families
          </motion.p>
        </motion.div>
      </motion.div>
    </InviteCard>
  );
};

export default EntourageSecondary;
