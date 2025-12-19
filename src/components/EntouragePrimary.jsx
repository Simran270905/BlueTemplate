import { motion } from "framer-motion";
import InviteCard from "./InviteCard";
import flower from "../assets/Image/flower.png";

const EntouragePrimary = () => {
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
      {/* Static Flowers */}
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
          variants={titleVariants}
        >
          Entourage
        </motion.h2>

        <motion.div 
          className="mt-12 space-y-4 sm:space-y-5 md:space-y-6 max-w-2xl w-full text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed"
          variants={fadeUpVariants}
        >
          {/* Groom Parents */}
          <motion.div variants={fadeUpVariants} transition={{ delay: 0.2 }}>
            <motion.p 
              className="font-para font-bold tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-slate-500 text-[9px] sm:text-xs uppercase mb-1"
              variants={titleVariants}
            >
              Parents of the Groom
            </motion.p>
            <motion.p 
              className="font-font text-slate-800"
              variants={fadeUpVariants}
            >
              Shri Groom Father Name
              <br />
              Smt. Groom Mother Name
            </motion.p>
          </motion.div>

          {/* Bride Parents */}
          <motion.div variants={fadeUpVariants} transition={{ delay: 0.4 }}>
            <motion.p 
              className="font-para font-bold tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-slate-500 text-[9px] sm:text-xs uppercase mb-1"
              variants={titleVariants}
            >
              Parents of the Bride
            </motion.p>
            <motion.p 
              className="font-font text-slate-800"
              variants={fadeUpVariants}
            >
              Shri Bride Father Name
              <br />
              Smt. Bride Mother Name
            </motion.p>
          </motion.div>

          {/* Elders */}
          <motion.div variants={fadeUpVariants} transition={{ delay: 0.6 }}>
            <motion.p 
              className="font-para font-bold tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-slate-500 text-[9px] sm:text-xs uppercase mb-1"
              variants={titleVariants}
            >
              Blessings From
            </motion.p>
            <motion.p 
              className="font-font text-slate-800"
              variants={fadeUpVariants}
            >
              Grandparents & Elders of Both Families
            </motion.p>
          </motion.div>

          {/* Kanyadaan */}
          <motion.div variants={fadeUpVariants} transition={{ delay: 0.8 }}>
            <motion.p 
              className="font-para font-bold tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-slate-500 text-[9px] sm:text-xs uppercase mb-1"
              variants={titleVariants}
            >
              Kanyadaan
            </motion.p>
            <motion.p 
              className="font-font text-slate-800"
              variants={fadeUpVariants}
            >
              Maternal Uncle & Aunt of the Bride
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </InviteCard>
  );
};

export default EntouragePrimary;
