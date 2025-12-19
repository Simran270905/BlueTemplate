import { motion } from "framer-motion";
import flower from "../assets/Image/flower.png";
import coat from "../assets/Image/coat.png";
import outfit from "../assets/Image/outfit.png";
import shoes from "../assets/Image/shoes.png";
import gown from "../assets/Image/gown.png";
import couple from "../assets/Image/couple.jpg";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const coupleVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full flex justify-center px-3 sm:px-4 overflow-hidden">
      <motion.div
        className="
          relative
          w-full
          max-w-[900px]
          bg-white/95
          backdrop-blur-md
          rounded-2xl
          shadow-2xl
          border
          overflow-hidden
          flex
          flex-col
          px-4
          py-8
          sm:px-6
          sm:py-10
          md:px-12
          md:py-14
          lg:px-14
          lg:py-16
        "
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Flowers */}
        <motion.img
          src={flower}
          alt=""
          className="absolute top-0 left-0 w-30 sm:w-24 md:w-28 opacity-70 pointer-events-none"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
        <motion.img
          src={flower}
          alt=""
          className="absolute bottom-0 right-0 w-30 sm:w-24 md:w-28 -scale-x-100 -scale-y-100 opacity-70 pointer-events-none"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />

        <div className="flex flex-col gap-8 text-center">
          <motion.h1
            className="font-head text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Details
          </motion.h1>

          <motion.div
            className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-2xl overflow-hidden shadow-xl border-4 border-white"
            variants={coupleVariants}
          >
            <img src={couple} alt="Couple" className="w-full h-full object-cover" />
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="tracking-[0.2em] text-xs sm:text-sm font-bold text-slate-700 uppercase mb-3">
              Dress Code
            </p>

            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mb-4">
              We kindly encourage our guests to wear formal attire with these colors on our special day.
            </p>

            <div className="flex justify-center gap-3 mb-6">
              {["#9fb3c8", "#2e537c", "#7fa1bd", "#9cb8d6"].map((c, i) => (
                <motion.div
                  key={i}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-md"
                  style={{ backgroundColor: c }}
                  whileHover={{ scale: 1.1 }}
                />
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <motion.img src={coat} className="h-12" alt="" variants={itemVariants} />
              <motion.img src={outfit} className="h-14" alt="" variants={itemVariants} />
              <motion.img src={shoes} className="h-14" alt="" variants={itemVariants} />
              <motion.img src={gown} className="h-12" alt="" variants={itemVariants} />
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="tracking-[0.2em] text-xs sm:text-sm font-bold text-slate-700 uppercase mb-2">
              A Note on Gifts
            </p>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
              Your presence on our wedding is enough. However, if you wish to give us something, monetary gift will be greatly appreciated.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="tracking-[0.2em] text-xs sm:text-sm font-bold text-slate-700 uppercase mb-2">
              RSVP
            </p>
            <p className="text-xs sm:text-sm text-slate-600">
              We have reserved <span className="font-bold text-slate-800">___ seat(s)</span> in your honor.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Kindly respond by <span className="font-semibold">June 1</span>
              <br />
              Message me at <span className="font-mono font-bold">01234567890</span>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
