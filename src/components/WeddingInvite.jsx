import { motion } from "framer-motion";
import InviteCard from "./InviteCard";
import flower4 from "../assets/Image/flower4.png";

const weddingInviteConfig = {
  id: "wedding-invite-1",
  brideName: "Avantika",
  groomName: "Rihaan",
  date: {
    day: "8",
    month: "AUGUST",
    weekday: "SATURDAY",
    time: "AT 03:00 PM",
  },
  venue: "The Taj Mahal Palace, Apollo Bandar, Colaba,\nMumbai, Maharashtra 400001",
  headerText: "You Are Invited To\nThe Wedding Of",
  colors: {
    primary: "#8FA7BF",  // Blue-gray
    secondary: "#64748B", // Darker slate
    accent: "#1E293B",    // Slate-800
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const nameVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const WeddingInvite = () => {
  return (
    <InviteCard className="relative flex justify-center items-center min-h-[500px] sm:min-h-[600px] md:min-h-[700px]">
      {/* Decorative flowers */}
      <img
        src={flower4}
        alt=""
        className="absolute bottom-0 right-0 w-32 sm:w-40 md:w-55 pointer-events-none"
      />
      <img
        src={flower4}
        alt=""
        className="absolute top-0 left-0 w-32 sm:w-40 md:w-55 scale-x-[-1] scale-y-[-1] pointer-events-none"
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.p
          className="font-para text-[9px] sm:text-[10px] md:text-[11px] tracking-[0.25em] mb-4 md:mb-5 uppercase"
          style={{ color: weddingInviteConfig.colors.secondary }}
          variants={fadeUp}
        >
          {weddingInviteConfig.headerText}
        </motion.p>

        {/* Names */}
        <motion.h1
          className="font-monster text-2xl sm:text-3xl md:text-5xl leading-tight"
          style={{ color: weddingInviteConfig.colors.primary }}
          variants={nameVariants}
        >
          {weddingInviteConfig.brideName}
        </motion.h1>

        <motion.p
          className="font-monster text-xl sm:text-2xl md:text-3xl my-1"
          style={{ color: weddingInviteConfig.colors.primary }}
          variants={fadeUp}
        >
          &amp;
        </motion.p>

        <motion.h1
          className="font-monster text-2xl sm:text-3xl md:text-5xl mb-5 md:mb-6"
          style={{ color: weddingInviteConfig.colors.primary }}
          variants={nameVariants}
        >
          {weddingInviteConfig.groomName}
        </motion.h1>

        {/* Date */}
        <motion.div
          className="flex justify-center items-center gap-2 md:gap-3 mb-3 md:mb-4"
          variants={fadeUp}
        >
          <p className="font-para text-[9px] sm:text-[10px] tracking-[0.25em]" style={{ color: weddingInviteConfig.colors.secondary }}>
            {weddingInviteConfig.date.weekday}
          </p>
          <p className="font-para text-xl sm:text-2xl md:text-2xl" style={{ color: weddingInviteConfig.colors.accent }}>
            {weddingInviteConfig.date.day}
          </p>
          <p className="font-para text-[9px] sm:text-[10px] tracking-[0.25em]" style={{ color: weddingInviteConfig.colors.secondary }}>
            {weddingInviteConfig.date.time}
          </p>
        </motion.div>

        <motion.p
          className="font-para text-[9px] sm:text-[10px] tracking-[0.25em] mb-3 md:mb-5 uppercase"
          style={{ color: weddingInviteConfig.colors.secondary }}
          variants={fadeUp}
        >
          {weddingInviteConfig.date.month}
        </motion.p>

        {/* Address */}
        <motion.p
          className="font-para text-[10px] sm:text-[11px] md:text-sm leading-relaxed max-w-xs mx-auto"
          style={{ color: weddingInviteConfig.colors.secondary }}
          variants={fadeUp}
        >
          {weddingInviteConfig.venue.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i < weddingInviteConfig.venue.split('\n').length - 1 && <br />}
            </span>
          ))}
        </motion.p>
      </motion.div>
    </InviteCard>
  );
};

export default WeddingInvite;
