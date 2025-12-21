import { motion } from "framer-motion";
import InviteCard from "./InviteCard";
import flower4 from "../assets/Image/flower4.png";

const WeddingInvite = () => {
  return (
    <InviteCard>
      {/* Fixed Flowers */}
      <img src={flower4} className="absolute top-0 left-0 w-40 md:w-48 pointer-events-none" alt="" />
      <img src={flower4} className="absolute bottom-0 right-0 w-36 md:w-48 pointer-events-none scale-x-[-1] scale-y-[-1]" alt="" />

      <div className="relative z-10 text-center px-4 py-6 md:px-6 md:py-8">
        <p className="text-[11px] md:text-[12px] tracking-[0.25em] text-slate-500 uppercase mb-5">
          You Are Invited To<br />The Wedding Of
        </p>

        <h1 className="text-4xl md:text-5xl text-[#8FA7BF] font-bold leading-tight">
          Avantika
        </h1>
        <p className="text-3xl md:text-4xl text-[#8FA7BF] my-1">&amp;</p>
        <h1 className="text-4xl md:text-5xl text-[#8FA7BF] font-bold mb-6">
          Rihaan
        </h1>

        <p className="text-xs md:text-sm text-slate-600 mb-2">SATURDAY 8 AT 03:00 PM</p>
        <p className="text-xs md:text-sm text-slate-600 mb-5 uppercase">AUGUST</p>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-xs mx-auto">
          The Taj Mahal Palace, Apollo Bandar, Colaba, Mumbai, Maharashtra 400001
        </p>
      </div>
    </InviteCard>
  );
};

export default WeddingInvite;
