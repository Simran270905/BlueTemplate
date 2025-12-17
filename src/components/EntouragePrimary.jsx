import { motion } from 'framer-motion';
import flower from "../assets/Image/flower.png";

const EntouragePrimary = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: "easeOut" } 
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
          bg-white/95 backdrop-blur-sm
          shadow-[0_25px_60px_rgba(0,0,0,0.12)]
          rounded-2xl
          px-4 py-8
          sm:px-6 sm:py-10
          md:px-12 md:py-12
          lg:px-14 lg:py-16
          text-center
          overflow-hidden
          border border-slate-100/50
        "
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ y: -2, transition: { duration: 0.3 } }}
      >
        {/* TOP LEFT FLOWERS */}
        <motion.img
          src={flower}
          alt=""
          className="absolute -top-2 sm:-top-4 left-2 sm:left-0 w-32 sm:w-40 md:w-48 lg:w-56 pointer-events-none select-none opacity-80"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />

        {/* BOTTOM RIGHT FLOWERS */}
        <motion.img
          src={flower}
          alt=""
          className="absolute bottom-2 sm:bottom-0 -right-2 sm:-right-4 w-28 sm:w-32 md:w-40 lg:w-48 scale-x-[-1] scale-y-[-1] pointer-events-none select-none opacity-80"
          initial={{ scale: 0, rotate: 180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />

        {/* Title */}
        <motion.h1 
          className="font-head text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold
                     bg-gradient-to-r from-slate-700 via-slate-600 to-slate-800 
                     bg-clip-text text-transparent tracking-tight sm:tracking-wide
                     mt-8 sm:mt-10 md:mt-12
                     mb-10 sm:mb-12 md:mb-14 p-4"
          variants={titleVariants}
        >
          Entourage
        </motion.h1>

        <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 max-w-2xl mx-auto px-2 text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed">
          {/* Groom Parents */}
          <motion.div variants={itemVariants}>
            <p className="font-para font-bold tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-slate-500 text-[9px] sm:text-xs uppercase mb-2">
              Parents of the Groom
            </p>
            <p className="font-font text-slate-800">
              Shri Groom Father Name
              <br />
              Smt. Groom Mother Name
            </p>
          </motion.div>

          {/* Bride Parents */}
          <motion.div variants={itemVariants}>
            <p className="font-para font-bold tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-slate-500 text-[9px] sm:text-xs uppercase mb-2">
              Parents of the Bride
            </p>
            <p className="font-font text-slate-800">
              Shri Bride Father Name
              <br />
              Smt. Bride Mother Name
            </p>
          </motion.div>

          {/* Elders */}
          <motion.div variants={itemVariants}>
            <p className="font-para font-bold tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-slate-500 text-[9px] sm:text-xs uppercase mb-2">
              Blessings From
            </p>
            <p className="font-font text-slate-800">
              Grandparents &amp; Elders of Both Families
            </p>
          </motion.div>

          {/* Kanyadaan */}
          <motion.div variants={itemVariants}>
            <p className="font-para font-bold tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-slate-500 text-[9px] sm:text-xs uppercase mb-2">
              Kanyadaan
            </p>
            <p className="font-font text-slate-800">
              Maternal Uncle &amp; Aunt of the Bride
            </p>
          </motion.div>

          {/* Best Man / Maid */}
          <motion.div className="space-y-3 sm:space-y-4 md:space-y-6" variants={itemVariants}>
            <motion.div variants={itemVariants} className="pt-1">
              <p className="font-para font-bold tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-slate-500 text-[9px] sm:text-xs uppercase mb-1.5">
                Best Man
              </p>
              <p className="font-font text-slate-800">Brother / Cousin of the Groom</p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="font-para font-bold tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-slate-500 text-[9px] sm:text-xs uppercase mb-1.5">
                Maid of Honor
              </p>
              <p className="font-font text-slate-800">Sister / Cousin of the Bride</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default EntouragePrimary;
