import { motion } from "framer-motion";
import flower1 from "../assets/Image/flower1.png";

const SaveTheDate = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 14 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.45, ease: "easeOut" },
    }),
  };

  return (
    <section className="w-full flex justify-center px-4 py-20 bg-transparent">
      <motion.div
        className="
          relative w-full max-w-[900px] min-h-[520px]
          rounded-3xl overflow-hidden
          border border-[#d4af37]/70
          shadow-[0_20px_50px_rgba(90,120,180,0.25)]
          text-center
        "
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Image */}
        <motion.img
          src={flower1}
          alt=""
          className="absolute inset-0 w-full h-full object-cover scale-x-[-1]"
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.42 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        />

        {/* Cool ivory overlay (matches blue bg) */}
        <div className="absolute inset-0 bg-[#f9fafc]/75 z-10" />

        {/* Soft blue inner glow */}
        <div className="absolute inset-0 z-20 pointer-events-none shadow-[inset_0_0_140px_rgba(160,185,230,0.25)]" />

        {/* Content */}
        <div className="relative z-30 flex flex-col items-center justify-center min-h-[520px] px-6 space-y-3">
          <motion.h1
            className="font-head text-4xl sm:text-5xl md:text-6xl font-bold text-[#d4af37]"
            variants={fadeUp}
            custom={0.3}
          >
            Avantika
          </motion.h1>

          <motion.p
            className="text-3xl italic text-[#d4af37]"
            variants={fadeUp}
            custom={0.5}
          >
            &
          </motion.p>

          <motion.h2
            className="font-head text-5xl sm:text-6xl md:text-7xl font-bold text-[#d4af37]"
            variants={fadeUp}
            custom={0.7}
          >
            Rihaan
          </motion.h2>

          <motion.p
            className="text-xl font-title sm:text-2xl tracking-wide text-[#b8962e]"
            variants={fadeUp}
            custom={0.9}
          >
            08 · 08 · 2032
          </motion.p>

          <motion.p
            className="uppercase tracking-[0.35em] font-par text-xs sm:text-sm font-semibold text-[#b8962e]"
            variants={fadeUp}
            custom={1.1}
          >
            Save the Date
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default SaveTheDate;
