import { motion } from "framer-motion";
import InviteCard from "./InviteCard"; 
import flower4 from "../assets/Image/flower4.png";

const WeddingInvite = () => {
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

  const nameVariants = {
    hidden: { opacity: 0, scale: 0.9, rotateX: -15 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotateX: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const dateVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.5, bounce: 0.15 }
    }
  };

  return (
    <InviteCard>
      {/* Static Background Flowers - No movement */}
      <img
        src={flower4}
        className="absolute bottom-0 -right-4 w-65 opacity-80"
        alt="Flower Decoration"
      />
      <img
        src={flower4}
        className="absolute -top-4 -left-4 w-65 scale-x-[-1] scale-y-[-1] opacity-80"
        alt="Flower Decoration"
      />

      {/* Invitation Content */}
      <motion.div
        className="relative z-10 text-center px-3 py-6 sm:px-4 sm:py-8 md:px-6 md:py-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.p 
          className="font-para text-[10px] sm:text-[9px] md:text-[12px] tracking-[0.2em] text-slate-500 mb-4 sm:mb-6 md:mb-8 uppercase"
          variants={fadeUpVariants}
        >
          You Are Invited To<br />
          The Wedding Of
        </motion.p>

        {/* Names */}
        <motion.h1 
          className="font-monster text-3xl sm:text-4xl md:text-5xl text-[#8FA7BF] mb-1"
          variants={nameVariants}
        >
          Avantika
        </motion.h1>
        
        <motion.p 
          className="font-monster text-2xl sm:text-3xl md:text-4xl text-[#8FA7BF] mb-1"
          variants={fadeUpVariants}
          animate={{
            scale: [1, 1.03, 1],
            transition: { 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }
          }}
        >
          &
        </motion.p>
        
        <motion.h1 
          className="font-monster text-3xl sm:text-4xl md:text-5xl text-[#8FA7BF] mb-4 sm:mb-6 md:mb-8"
          variants={nameVariants}
        >
          Rihaan
        </motion.h1>

        {/* Date */}
        <motion.div 
          className="flex justify-center items-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-6"
          variants={dateVariants}
        >
          <motion.p 
            className="font-para text-[9px] sm:text-[10px] md:text-[11px] tracking-[0.2em] text-slate-600"
            variants={fadeUpVariants}
          >
            SATURDAY
          </motion.p>
          <motion.p 
            className="font-para text-xl sm:text-2xl md:text-3xl text-slate-800"
            variants={dateVariants}
            animate={{
              scale: [1, 1.1, 1],
              transition: { 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }
            }}
          >
            8
          </motion.p>
          <motion.p 
            className="font-para text-[9px] sm:text-[10px] md:text-[11px] tracking-[0.2em] text-slate-600"
            variants={fadeUpVariants}
          >
            AT 03:00 PM
          </motion.p>
        </motion.div>

        <motion.p 
          className="font-para text-[9px] sm:text-[10px] md:text-[11px] tracking-[0.2em] text-slate-600 mb-3 sm:mb-4 md:mb-6 uppercase"
          variants={fadeUpVariants}
        >
          AUGUST
        </motion.p>

        {/* Address */}
        <motion.p 
          className="font-para text-[10px] sm:text-[11px] md:text-sm tracking-wide text-slate-600 leading-relaxed max-w-xs mx-auto"
          variants={fadeUpVariants}
          transition={{ delay: 0.8 }}
        >
          The Taj Mahal Palace, Apollo Bandar, Colaba,
          <br />
          Mumbai, Maharashtra 400001
        </motion.p>
      </motion.div>
    </InviteCard>
  );
};

export default WeddingInvite;
