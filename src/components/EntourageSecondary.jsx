import { motion } from "framer-motion";
import InviteCard from "./InviteCard";
import flower from "../assets/Image/flower.png";

const EntourageSecondary = () => {
  return (
    <InviteCard>
      <img src={flower} className="absolute top-0 left-0 w-36 md:w-55 pointer-events-none" alt="" />
      <img src={flower} className="absolute bottom-0 right-0 w-32 md:w-55 scale-x-[-1] scale-y-[-1] pointer-events-none" alt="" />

      <motion.div className="relative z-10 flex flex-col items-center text-center space-y-6 overflow-auto max-h-[90%] px-4 sm:px-6 md:px-8 py-4">
        <p className="uppercase text-sm md:text-base font-bold tracking-wide text-slate-500 mt-30">
          To Guide Us In Our Sacred Journey
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-xl text-slate-700">
          {[
            { title: "Groom's Brothers & Cousins", names: ["Name Here", "Name Here", "Name Here"] },
            { title: "Bride's Sisters & Cousins", names: ["Name Here", "Name Here", "Name Here"] },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <p className="uppercase text-sm md:text-base font-bold text-slate-500 mb-2 tracking-wide">{item.title}</p>
              <p className="text-sm md:text-base leading-relaxed">{item.names.join(" / ")}</p>
            </div>
          ))}
        </div>

        <div className="w-full max-w-md space-y-3 text-slate-700">
          <p className="uppercase text-sm md:text-base font-bold text-slate-500 tracking-wide">Ceremonial Roles</p>
          <p><span className="font-medium text-slate-800">Pujari (Priest):</span> Name Here</p>
          <p><span className="font-medium text-slate-800">Mangalsutra Ritual:</span> Elder Family Members</p>
          <p><span className="font-medium text-slate-800">Agni Sakshi:</span> Both Families</p>
        </div>
      </motion.div>
    </InviteCard>
  );
};

export default EntourageSecondary;
