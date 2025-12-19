import { motion } from "framer-motion";
import InviteCard from "./InviteCard";
import flower1 from "../assets/Image/flower1.png";

const SaveTheDate = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const nameVariants = {
    hidden: { opacity: 0, scale: 0.9, rotateX: -20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotateX: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const dateVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.7, ease: "easeOut", bounce: 0.2 }
    }
  };

  return (
    <InviteCard>
      <motion.img
        src={flower1}
        className="absolute inset-0 w-full h-full object-cover scale-x-[-1] opacity-60"
        alt=""
        animate={{ 
          scale: [1, 1.05, 1],
          rotate: [0, 1, -1, 0],
          transition: { 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }
        }}
      />

      <div className="absolute inset-0 bg-[#f9fafc]/75" />

      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center space-y-3 px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="font-head text-6xl mb-5 font-bold text-[#d4af37]"
          variants={nameVariants}
        >
          Rihaan
          
        </motion.h1>

        <motion.p
          className="text-3xl mb-7 italic text-[#d4af37]"
          variants={childVariants}
          animate={{
            scale: [1, 1.05, 1],
            transition: { 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }
          }}
        >
          &amp;
        </motion.p>

        <motion.h2
          className="font-head text-6xl mb-5 font-bold text-[#d4af37]"
          variants={nameVariants}
        >
          Avantika
        </motion.h2>

        <motion.p
          className="tracking-wide text-[#b8962e]"
          variants={dateVariants}
        >
          08 · 08 · 2032
        </motion.p>

        <motion.p
          className="uppercase tracking-[0.35em] text-xs text-[#b8962e]"
          variants={childVariants}
        >
          Save the Date
        </motion.p>
      </motion.div>
    </InviteCard>
  );
};

export default SaveTheDate;
