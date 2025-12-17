import { motion } from "framer-motion";
import flower from "../assets/Image/flower.png";
import engage from "../assets/Image/engage.png";
import cocktail from "../assets/Image/cocktail.png";
import photos from "../assets/Image/photos.png";
import dinner from "../assets/Image/dinner.png";
import party from "../assets/Image/party.png";
import couple1 from "../assets/Image/couple1.png";
import couple2 from "../assets/Image/couple2.png";
import guest from "../assets/Image/guest.png";

const WeddingTimeline = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.3 }
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
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const timelineItems = [
    { time: "3:00 PM", label: "CEREMONY", icon: engage },
    { time: "4:30 PM", label: "PHOTOS", icon: photos },
    { time: "5:00 PM", label: "COCKTAIL", icon: cocktail },
    { time: "6:00 PM", label: "DINNER", icon: dinner },
    { time: "7:30 PM", label: "PARTY", icon: party },
  ];

  const reminders = [
    { label: "BE ON TIME", img: couple1 },
    { label: "FINISH THE EVENT", img: guest },
    { label: "ENJOY & HAVE FUN", img: couple2 },
  ];

  return (
    // only center the card; background comes from Home.jsx
    <section className="w-full flex justify-center px-2 sm:px-4">
      <motion.div
        className="
          relative
          w-full
          max-w-[900px]
          min-h-[500px]
          bg-white/95
          border border-slate-200/50
          shadow-[0_20px_60px_rgba(0,0,0,0.15)]
          rounded-2xl
          px-4 py-6
          sm:px-6 sm:py-8
          md:px-8 md:py-10
          lg:px-10 lg:py-14
          flex flex-col justify-between
          overflow-hidden
          backdrop-blur-sm
        "
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ y: -2, transition: { duration: 0.3 } }}
      >
        {/* DECOR FLOWERS */}
        <motion.img
          src={flower}
          alt=""
          className="absolute -top-6 sm:-top-10 left-0 w-32 sm:w-40 md:w-56 pointer-events-none select-none opacity-80"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <motion.img
          src={flower}
          alt=""
          className="absolute bottom-0 -right-4 w-28 sm:w-32 md:w-48 scale-x-[-1] scale-y-[-1] pointer-events-none select-none opacity-80"
          initial={{ scale: 0, rotate: 180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

        {/* BIG HEADING */}
        <motion.div className="text-center mt-6 sm:mt-8 md:mt-12 mb-4 sm:mb-6" variants={titleVariants}>
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 bg-clip-text text-transparent tracking-tight font-bold">
            Wedding Timeline
          </h2>
        </motion.div>

        {/* TIMELINE */}
        <motion.div className="px-2 sm:px-4 md:px-6 mb-6 sm:mb-8 lg:mb-10" variants={itemVariants}>
          <div className="flex flex-wrap md:flex-nowrap items-stretch justify-between text-slate-600 gap-3 sm:gap-4 md:gap-6">
            {timelineItems.map((item, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center text-center flex-1 min-w-[70px] sm:min-w-[80px]"
                variants={itemVariants}
                transition={{ delay: 0.5 + i * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
              >
                <motion.img
                  src={item.icon}
                  alt={item.label}
                  className="h-7 sm:h-8 md:h-10 lg:h-12 w-auto mb-2 sm:mb-3"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                />
                <div className="w-full h-[2px] bg-gradient-to-r from-slate-300 to-slate-400 relative mb-2 sm:mb-3">
                  <motion.span 
                    className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-slate-600 rounded-full shadow-md"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                  />
                </div>
                <p className="text-[9px] sm:text-[10px] md:text-xs tracking-widest font-mono font-semibold">
                  {item.time}
                </p>
                <p className="text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.2em] font-sans uppercase mt-1">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* UNPLUGGED CEREMONY */}
        <motion.div className="text-center px-3 sm:px-4 md:px-8 mb-4 sm:mb-6 md:mb-8" variants={itemVariants}>
          <p className="font-sans text-[9px] sm:text-[10px] md:text-xs tracking-[0.25em] text-slate-500 mb-2 sm:mb-3 uppercase font-semibold">
            Unplugged Ceremony
          </p>
          <p className="text-[11px] sm:text-xs md:text-sm text-slate-700 leading-tight max-w-md mx-auto">
            Our amazing photographers will capture every moment. Please keep phones away during the ceremony.
          </p>
        </motion.div>

        {/* SNAP & SHARE */}
        <motion.div className="text-center px-3 sm:px-4 md:px-8 mb-4 sm:mb-6 md:mb-8" variants={itemVariants}>
          <p className="font-sans text-[9px] sm:text-[10px] md:text-xs tracking-[0.25em] text-slate-500 mb-2 sm:mb-3 uppercase font-semibold">
            Snap & Share
          </p>
          <p className="text-[11px] sm:text-xs md:text-sm text-slate-700 leading-tight max-w-md mx-auto">
            Help capture our day! Tag us or use <br />
            <span className="font-semibold tracking-wider text-slate-800">#BrideAndGroomUnion</span>
          </p>
        </motion.div>

        {/* REMINDERS */}
        <motion.div className="text-center pb-4 sm:pb-6" variants={itemVariants}>
          <p className="font-sans text-[9px] sm:text-[10px] md:text-xs tracking-[0.25em] text-slate-500 mb-4 sm:mb-6 uppercase font-semibold">
            Reminders
          </p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12">
            {reminders.map((item, i) => (
              <motion.div 
                key={i} 
                className="text-center min-w-[75px] sm:min-w-[90px]"
                variants={itemVariants}
                transition={{ delay: 1.2 + i * 0.1 }}
                whileHover={{ scale: 1.08, y: -3 }}
              >
                <motion.img
                  src={item.img}
                  alt={item.label}
                  className="h-10 sm:h-12 md:h-14 lg:h-16 mx-auto mb-2 sm:mb-3 w-auto"
                  whileHover={{ rotate: [0, 5, -5, 0], scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                <p className="text-[8px] sm:text-[9px] md:text-xs tracking-[0.15em] font-sans font-semibold text-slate-700 uppercase">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WeddingTimeline;
