import { motion } from "framer-motion";
import InviteCard from "./InviteCard";
import flower from "../assets/Image/flower.png";

const EntourageSecondary = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.3 },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <InviteCard className="h-screen w-full overflow-hidden relative flex justify-center items-center">
      {/* Static Background Flowers */}
      <img
        src={flower}
        alt=""
        className="absolute -top-10 left-0 w-32 sm:w-40 md:w-56 pointer-events-none select-none"
      />
      <img
        src={flower}
        alt=""
        className="absolute bottom-0 -right-4 w-24 sm:w-32 md:w-48 scale-x-[-1] scale-y-[-1] pointer-events-none select-none"
      />

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center w-full px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 space-y-4 sm:space-y-6 md:space-y-8 overflow-auto max-h-[90vh]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Guiding text */}
        <motion.p
          className="font-para font-bold text-[9px] sm:text-[10px] md:text-xs tracking-[0.25em] text-slate-500 uppercase max-w-xs"
          variants={titleVariants}
        >
          To Guide Us In Our Sacred Journey
        </motion.p>

        {/* Groom / Bride side grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-xl text-slate-700"
          variants={fadeUpVariants}
        >
          <motion.div className="flex flex-col items-center" variants={fadeUpVariants}>
            <motion.p
              className="font-para font-bold text-[9px] sm:text-[10px] md:text-xs tracking-[0.25em] text-slate-500 uppercase mb-1 sm:mb-2 md:mb-3 max-w-xs"
              variants={titleVariants}
            >
              Groom's Brothers & Cousins
            </motion.p>
            <motion.p className="font-font text-xs sm:text-sm md:text-base leading-relaxed max-w-xs" variants={fadeUpVariants}>
              Name Here <br />
              Name Here <br />
              Name Here
            </motion.p>
          </motion.div>

          <motion.div className="flex flex-col items-center" variants={fadeUpVariants}>
            <motion.p
              className="font-para font-bold text-[9px] sm:text-[10px] md:text-xs tracking-[0.25em] text-slate-500 uppercase mb-1 sm:mb-2 md:mb-3 max-w-xs"
              variants={titleVariants}
            >
              Bride's Sisters & Cousins
            </motion.p>
            <motion.p className="font-font text-xs sm:text-sm md:text-base leading-relaxed max-w-xs" variants={fadeUpVariants}>
              Name Here <br />
              Name Here <br />
              Name Here
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Ritual roles */}
        <motion.div className="w-full max-w-md space-y-2 sm:space-y-3 md:space-y-4 text-slate-700" variants={fadeUpVariants}>
          <motion.p className="font-para font-bold text-[9px] sm:text-[10px] md:text-xs tracking-[0.25em] text-slate-500 uppercase" variants={titleVariants}>
            Ceremonial Roles
          </motion.p>

          <motion.p variants={fadeUpVariants}>
            <span className="font-medium text-slate-800">Pujari (Priest):</span> Name Here
          </motion.p>

          <motion.p variants={fadeUpVariants}>
            <span className="font-medium text-slate-800">Mangalsutra Ritual:</span> Elder Family Members
          </motion.p>

          <motion.p variants={fadeUpVariants}>
            <span className="font-medium text-slate-800">Agni Sakshi:</span> Both Families
          </motion.p>
        </motion.div>
      </motion.div>
    </InviteCard>
  );
};

export default EntourageSecondary;
