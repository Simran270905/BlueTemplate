import { motion } from "framer-motion";
import InviteCard from "./InviteCard";
import flower from "../assets/Image/flower.png";

const EntouragePrimary = () => {
  return (
    <InviteCard>
      <img src={flower} className="absolute top-0 left-0 w-36 md:w-55 pointer-events-none" alt="" />
      <img src={flower} className="absolute bottom-0 right-0 w-32 md:w-55 scale-x-[-1] scale-y-[-1] pointer-events-none" alt="" />

      <motion.div className="relative z-10 flex flex-col items-center text-center space-y-6">
        <h2 className="font-head text-4xl md:text-5xl text-[#8FA7BF] mb-8 mt-30">Entourage</h2>

        {[
          { label: "Parents of the Groom", names: ["Shri Groom Father Name", "Smt. Groom Mother Name"] },
          { label: "Parents of the Bride", names: ["Shri Bride Father Name", "Smt. Bride Mother Name"] },
          { label: "Blessings From", names: ["Grandparents & Elders of Both Families"] },
          { label: "Kanyadaan", names: ["Maternal Uncle & Aunt of the Bride"] },
        ].map((item, i) => (
          <div key={i}>
            <p className="uppercase text-sm md:text-base text-slate-500 tracking-wide">{item.label}</p>
            <p className="text-sm md:text-base text-slate-700 mt-1">{item.names.join(" / ")}</p>
          </div>
        ))}
      </motion.div>
    </InviteCard>
  );
};

export default EntouragePrimary;
