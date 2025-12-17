import { motion } from "framer-motion";
import flower4 from "../assets/Image/flower4.png";

const WeddingInvite = () => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.08, delayChildren: 0.3 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 26 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  const nameVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  };

  return (
    // Only centers the card; background gradient comes from Home.jsx
    <section className="w-full flex justify-center px-3 sm:px-4">
      <motion.div
        className="
          relative
          w-full
          max-w-[900px]
          min-h-[500px]
          bg-white/95
          shadow-[0_25px_60px_rgba(0,0,0,0.18)]
          rounded-2xl
          px-4
          py-8
          sm:px-6
          sm:py-10
          md:px-12
          md:py-14
          lg:px-14
          lg:py-16
          text-center
          overflow-hidden
          border border-slate-100/60
          backdrop-blur-sm
        "
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ y: -4, scale: 1.01, transition: { duration: 0.35 } }}
      >
        {/* Flowers */}
        <motion.img
          src={flower4}
          className="absolute bottom-0 -right-4 w-48 sm:w-56 md:w-72 lg:w-80 pointer-events-none select-none opacity-85"
          alt=""
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        />
        <motion.img
          src={flower4}
          className="absolute -top-6 -left-4 w-48 sm:w-56 md:w-72 lg:w-80 scale-x-[-1] scale-y-[-1] pointer-events-none select-none opacity-85"
          alt=""
          initial={{ opacity: 0, x: -40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.45 }}
        />

        {/* Header */}
        <motion.p
          className="font-para text-[9px] sm:text-[10px] md:text-xs tracking-[0.25em] sm:tracking-[0.3em] text-slate-500 mb-6 sm:mb-8 md:mb-10 uppercase"
          variants={fadeUp}
        >
          You Are Invited To
          <br />
          The Wedding Of
        </motion.p>

        {/* Names */}
        <motion.h1
          className="font-monster text-3xl sm:text-3xl md:text-4xl lg:text-6xl text-[#8FA7BF] mb-1 sm:mb-2 md:mb-3"
          variants={nameVariants}
          whileHover={{ scale: 1.03 }}
        >
          Avantika
        </motion.h1>

        <motion.p
          className="font-monster text-2xl sm:text-2xl md:text-3xl text-[#8FA7BF] mb-1 sm:mb-2 md:mb-3"
          variants={fadeUp}
        >
          &
        </motion.p>

        <motion.h1
          className="font-monster text-3xl sm:text-3xl md:text-4xl lg:text-6xl text-[#8FA7BF] mb-6 sm:mb-8 md:mb-10"
          variants={nameVariants}
          whileHover={{ scale: 1.03 }}
        >
          Rihaan
        </motion.h1>

        {/* Date */}
        <motion.div
          className="flex justify-center items-center gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 md:mb-8"
          variants={fadeUp}
        >
          <p className="font-para text-[10px] sm:text-[11px] md:text-xs tracking-[0.25em] text-slate-600">
            SATURDAY
          </p>
          <p className="font-para text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-slate-800">
            8
          </p>
          <p className="font-para text-[10px] sm:text-[11px] md:text-xs tracking-[0.25em] text-slate-600">
            AT 03:00 PM
          </p>
        </motion.div>

        <motion.p
          className="font-para text-[10px] sm:text-[11px] md:text-xs tracking-[0.25em] text-slate-600 mb-4 sm:mb-6 md:mb-8 uppercase"
          variants={fadeUp}
        >
          AUGUST
        </motion.p>

        {/* Address */}
        <motion.p
          className="font-para text-[11px] sm:text-xs md:text-sm tracking-wide text-slate-600 leading-relaxed max-w-sm mx-auto"
          variants={fadeUp}
        >
          The Taj Mahal Palace,Apollo Bandar, Colaba,  
          <br />
          Mumbai,Maharashtra 400001
        </motion.p>
      </motion.div>
    </section>
  );
};

export default WeddingInvite;
