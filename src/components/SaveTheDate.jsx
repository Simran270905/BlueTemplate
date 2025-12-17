import { motion } from 'framer-motion';
import flower1 from "../assets/Image/flower1.png";

const SaveTheDate = () => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggeredVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="w-full flex justify-center px-3 sm:px-4">
      <motion.div
        className="
          relative
          w-full
          max-w-[900px]
          min-h-[500px]
          shadow-[0_25px_60px_rgba(0,0,0,0.18)]
          rounded-2xl
          px-4 py-8
          sm:px-6 sm:py-10
          md:px-12 md:py-14
          lg:px-14 lg:py-16
          text-center
          overflow-hidden
          border border-amber-100/60
        "
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ y: -4, scale: 1.01 }}
      >
        {/* Background image - MORE VISIBLE & DARKER */}
        <div className="absolute inset-0 z-0">
          <motion.img
            src={flower1}
            alt=""
            className="w-full h-full object-cover scale-x-[-1]"
            initial={{ scale: 1.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.85 }}  // Increased from 0.6 to 0.85
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          />
        </div>

        {/* Darker overlay - REDUCED OPACITY */}
        <div className="absolute inset-0 bg-[#fbf2e6]/60 z-10 backdrop-blur-sm" />  

        {/* Text content */}
        <motion.div 
          className="relative z-20 text-amber-900 flex flex-col items-center justify-center h-full space-y-2 sm:space-y-3 md:space-y-4 px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.h1 
            className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.2em] sm:tracking-[0.35em] bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent font-bold drop-shadow-2xl"
            variants={staggeredVariants}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            SAVE
          </motion.h1>

          <motion.p 
            className="font-playfair italic text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent drop-shadow-xl"
            variants={staggeredVariants}
            transition={{ delay: 0.6 }}
          >
            the
          </motion.p>

          <motion.h2 
            className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.2em] sm:tracking-[0.35em] bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent font-bold drop-shadow-2xl"
            variants={staggeredVariants}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            DATE
          </motion.h2>

          <motion.p 
            className="font-playfair font-light text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wide text-amber-900 drop-shadow-lg"
            variants={staggeredVariants}
            transition={{ delay: 1.0 }}
          >
            08.08.32
          </motion.p>

          <motion.p 
            className="font-sans font-semibold text-xs sm:text-sm md:text-base tracking-[0.25em] text-amber-800 uppercase"
            variants={staggeredVariants}
            transition={{ delay: 1.2 }}
          >
            BRIDE & GROOM
          </motion.p>

          <motion.p 
            className="font-mono text-[10px] sm:text-xs md:text-sm tracking-wide leading-tight text-amber-900 max-w-md mx-auto"
            variants={staggeredVariants}
            transition={{ delay: 1.4 }}
          >
            STARTS AT 3 PM
            <br />
            123 Anywhere St, Any City
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SaveTheDate;
