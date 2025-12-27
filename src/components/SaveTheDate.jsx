import { motion } from "framer-motion";
import InviteCard from "./InviteCard";
import flower1 from "../assets/Image/flower1.png";

const saveTheDateConfig = {
  id: "wedding-save-the-date-1",
  groomName: "Rihaan",
  brideName: "Avantika",
  weddingDate: "08 · 08 · 2032",
  saveTheDateText: "Save the Date",
  colors: {
    primary: "#d4af37",  // Gold
    secondary: "#b8962e", // Darker gold
  },
  background: {
    image: flower1,
    opacity: 0.60,
    scaleFlip: true, // scale-x-[-1]
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.15, delayChildren: 0.2 } 
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

const SaveTheDate = () => {
  return (
    <InviteCard>
      {/* Full-cover background */}
      <motion.div className="absolute inset-0 w-full h-full">
        <motion.img
          src={saveTheDateConfig.background.image}
          alt=""
          className={`w-full h-full object-cover ${saveTheDateConfig.background.scaleFlip ? 'scale-x-[-1]' : ''} opacity-60`}
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 1, -1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
      </motion.div>

      {/* Centered Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center text-center w-full h-full px-4 sm:px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="font-head text-4xl sm:text-6xl font-bold"
          style={{ color: saveTheDateConfig.colors.primary }}
          variants={nameVariants}
        >
          {saveTheDateConfig.groomName}
        </motion.h1>

        <motion.p
          className="text-2xl sm:text-3xl italic"
          style={{ color: saveTheDateConfig.colors.primary }}
          variants={childVariants}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          &amp;
        </motion.p>

        <motion.h2
          className="font-head text-4xl sm:text-6xl font-bold"
          style={{ color: saveTheDateConfig.colors.primary }}
          variants={nameVariants}
        >
          {saveTheDateConfig.brideName}
        </motion.h2>

        <motion.p
          className="tracking-wide text-lg sm:text-xl"
          style={{ color: saveTheDateConfig.colors.secondary }}
          variants={dateVariants}
        >
          {saveTheDateConfig.weddingDate}
        </motion.p>

        <motion.p
          className="uppercase tracking-[0.35em] text-xs sm:text-sm"
          style={{ color: saveTheDateConfig.colors.secondary }}
          variants={childVariants}
        >
          {saveTheDateConfig.saveTheDateText}
        </motion.p>
      </motion.div>
    </InviteCard>
  );
};

export default SaveTheDate;
