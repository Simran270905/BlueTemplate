import { motion } from 'framer-motion';
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
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  const coupleVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section className="w-full h-screen flex justify-center items-center p-2 sm:p-4 bg-gradient-to-br from-slate-50/80 to-blue-50/80 overflow-hidden">
      <motion.div 
        className="relative w-full h-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border overflow-hidden flex flex-col"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Flowers - Edge to edge */}
        <motion.img
          src={flower}
          alt=""
          className="absolute top-0 left-0 w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 -z-10 opacity-70 object-contain"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
        <motion.img
          src={flower}
          alt=""
          className="absolute bottom-0 right-0 w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 -scale-x-100 -scale-y-100 -z-10 opacity-70 object-contain"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />

        <div className="flex-1 flex flex-col justify-between p-4 sm:p-6 md:p-8">
          {/* Title */}
          <motion.h1 className="text-center font-serif text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-3 sm:mb-4 tracking-tight" variants={itemVariants}>
            Details
          </motion.h1>

          {/* Couple Image - Between Title and Dress Code */}
          <motion.div 
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mb-0 sm:mb-4 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/80"
            variants={coupleVariants}
          >
            {/* Replace with your couple image */}
            <img 
              src={couple} 
              alt="Couple" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Dress Code */}
          <motion.div className="mb-4 sm:mb-6 flex-1 flex flex-col justify-center" variants={itemVariants}>
            <p className="font-sans tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm font-bold text-slate-700 uppercase mb-2 sm:mb-3 text-center">Dress Code</p>
            
            <p className="text-xs sm:text-sm text-slate-600 leading-tight mb-3 sm:mb-4 max-w-sm mx-auto text-center">
              We kindly encourage our guests to wear formal attire with these colors on our special day.
            </p>

            {/* Colors */}
            <div className="flex justify-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <motion.div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full shadow-md" style={{backgroundColor: '#9fb3c8'}} whileHover={{scale: 1.1}}/>
              <motion.div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full shadow-md" style={{backgroundColor: '#2e537c'}} whileHover={{scale: 1.1}}/>
              <motion.div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full shadow-md" style={{backgroundColor: '#7fa1bd'}} whileHover={{scale: 1.1}}/>
              <motion.div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full shadow-md" style={{backgroundColor: '#9cb8d6'}} whileHover={{scale: 1.1}}/>
            </div>

           {/* Icons */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-5 md:gap-7">

                <motion.img
                    src={coat}
                    className="h-10 sm:h-12 md:h-14 w-auto"
                    alt="Coat"
                    variants={itemVariants}
                />

                <motion.img
                    src={outfit}
                    className="h-12 sm:h-14 md:h-16 w-auto"
                    alt="Outfit"
                    variants={itemVariants}
                />

                <motion.img
                    src={shoes}
                    className="h-12 sm:h-14 md:h-16 w-auto"
                    alt="Shoes"
                    variants={itemVariants}
                />

                <motion.img
                    src={gown}
                    className="h-10 sm:h-12 md:h-14 w-auto"
                    alt="Gown"
                    variants={itemVariants}
                />

                </div>
            </motion.div>

          {/* Bottom Sections - Gifts + RSVP */}
          <div className="space-y-3 sm:space-y-4">
            {/* Gifts */}
            <motion.div className="text-center" variants={itemVariants}>
              <p className="font-sans tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm font-bold text-slate-700 uppercase mb-2">A Note on Gifts</p>
              <p className="text-xs sm:text-sm text-slate-600 leading-tight max-w-sm mx-auto">
                Your presence on our wedding is enough. However, if you wish to give us something, monetary gift will be greatly appreciated.
              </p>
            </motion.div>

            {/* RSVP */}
            <motion.div className="text-center" variants={itemVariants}>
              <p className="font-sans tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm font-bold text-slate-700 uppercase mb-2">RSVP</p>
              <p className="text-xs sm:text-sm text-slate-600 mb-2 leading-tight">
                We have reserved <span className="font-bold text-slate-800">___ seat(s)</span><br/>in your honor.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-tight">
                Kindly respond by <span className="font-semibold text-slate-800">June 1</span>.<br/>
                Message me at <span className="font-mono tracking-widest text-slate-800 font-bold">01234567890</span><br/>
                or thru fb/messenger.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
