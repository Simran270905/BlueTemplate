import { motion } from "framer-motion";
import flower from "../assets/Image/flower.png";

const EntourageSecondary = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.3 },
    },
  };

  const blockVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const topTextVariants = {
    hidden: { opacity: 0, y: -16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    // Only center the card; no own background color
    <section className="w-full flex justify-center px-3 sm:px-4">
      <motion.div
        className="
          relative
          w-full
          max-w-[900px]
          min-h-[500px]
          bg-white/95
          shadow-[0_25px_60px_rgba(0,0,0,0.12)]
          rounded-2xl
          px-4
          py-8
          sm:px-6
          sm:py-10
          md:px-10
          md:py-14
          text-center
          overflow-hidden
          border border-slate-100/60
        "
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ y: -3, transition: { duration: 0.3 } }}
      >
        {/* Floral borders */}
        <motion.img
          src={flower}
          alt=""
          className="absolute -top-8 sm:-top-10 left-0 w-32 sm:w-40 md:w-56 pointer-events-none select-none opacity-80"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        />

        <motion.img
          src={flower}
          alt=""
          className="absolute bottom-0 -right-3 sm:-right-4 w-28 sm:w-32 md:w-48 scale-x-[-1] scale-y-[-1] pointer-events-none select-none opacity-80"
          initial={{ scale: 0, rotate: 180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        />

        {/* Guiding text */}
        <motion.p
          className="font-sans text-[9px] sm:text-[10px] md:text-xs tracking-[0.25em] sm:tracking-[0.3em] text-slate-500 mb-6 sm:mb-8 md:mb-10 uppercase"
          variants={topTextVariants}
        >
          To Guide Us In Our Sacred Journey
        </motion.p>

        {/* Groom / Bride side grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mb-8 sm:mb-10 md:mb-12 text-slate-700"
          variants={blockVariants}
        >
          <div>
            <p className="font-sans text-[9px] sm:text-[10px] md:text-xs tracking-[0.25em] sm:tracking-[0.3em] text-slate-500 mb-2 sm:mb-3 md:mb-4 uppercase">
              Groom’s Brothers & Cousins
            </p>
            <p className="font-light text-xs sm:text-sm md:text-base leading-relaxed">
              Name Here
              <br />
              Name Here
              <br />
              Name Here
            </p>
          </div>

          <div>
            <p className="font-sans text-[9px] sm:text-[10px] md:text-xs tracking-[0.25em] sm:tracking-[0.3em] text-slate-500 mb-2 sm:mb-3 md:mb-4 uppercase">
              Bride’s Sisters & Cousins
            </p>
            <p className="font-light text-xs sm:text-sm md:text-base leading-relaxed">
              Name Here
              <br />
              Name Here
              <br />
              Name Here
            </p>
          </div>
        </motion.div>

        {/* Ritual roles */}
        <motion.div
          className="mb-8 sm:mb-10 md:mb-12"
          variants={blockVariants}
        >
          <p className="font-sans text-[9px] sm:text-[10px] md:text-xs tracking-[0.25em] sm:tracking-[0.3em] text-slate-500 mb-3 sm:mb-4 md:mb-6 uppercase">
            Ceremonial Roles
          </p>

          <div className="space-y-3 sm:space-y-4 md:space-y-5 text-xs sm:text-sm md:text-base text-slate-700">
            <p>
              <span className="font-medium text-slate-800">Pujari (Priest):</span>{" "}
              Name Here
            </p>
            <p>
              <span className="font-medium text-slate-800">
                Mangalsutra Ritual:
              </span>{" "}
              Elder Family Members
            </p>
            <p>
              <span className="font-medium text-slate-800">Agni Sakshi:</span>{" "}
              Both Families
            </p>
          </div>
        </motion.div>

        {/* Flower girls */}
        <motion.div variants={blockVariants}>
          <p className="font-sans text-[9px] sm:text-[10px] md:text-xs tracking-[0.25em] sm:tracking-[0.3em] text-slate-500 mb-2 sm:mb-3 md:mb-4 uppercase">
            Flower Girls
          </p>
          <p className="font-light text-xs sm:text-sm md:text-base leading-relaxed text-slate-700">
            Little Guest Name
            <br />
            Little Guest Name
            <br />
            Little Guest Name
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EntourageSecondary;
