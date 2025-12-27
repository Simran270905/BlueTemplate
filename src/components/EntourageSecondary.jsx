import { motion } from "framer-motion";
import InviteCard from "./InviteCard";
import flower from "../assets/Image/flower.png";

const entourageSecondaryConfig = {
  id: "wedding-entourage-secondary-1",
  title: "To Guide Us In Our Sacred Journey",
  familyGroups: [
    { 
      title: "Groom's Brothers & Cousins", 
      names: ["Name Here", "Name Here", "Name Here"] 
    },
    { 
      title: "Bride's Sisters & Cousins", 
      names: ["Name Here", "Name Here", "Name Here"] 
    },
  ],
  ceremonialRoles: [
    { role: "Pujari (Priest)", name: "Name Here" },
    { role: "Mangalsutra Ritual", name: "Elder Family Members" },
    { role: "Agni Sakshi", name: "Both Families" },
  ],
};

const EntourageSecondary = () => {
  return (
    <InviteCard>
      <img src={flower} className="absolute top-0 left-0 w-36 md:w-55 pointer-events-none" alt="" />
      <img src={flower} className="absolute bottom-0 right-0 w-32 md:w-55 scale-x-[-1] scale-y-[-1] pointer-events-none" alt="" />

      <motion.div 
        className="relative z-10 flex flex-col items-center text-center space-y-6 overflow-auto max-h-[90%] px-4 sm:px-6 md:px-8 py-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="uppercase text-sm md:text-base font-bold tracking-wide text-slate-500 mt-30">
          {entourageSecondaryConfig.title}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-xl text-slate-700">
          {entourageSecondaryConfig.familyGroups.map((item, i) => (
            <motion.div 
              key={i} 
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="uppercase text-sm md:text-base font-bold text-slate-500 mb-2 tracking-wide">
                {item.title}
              </p>
              <p className="text-sm md:text-base leading-relaxed">
                {item.names.join(" / ")}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="w-full max-w-md space-y-3 text-slate-700">
          <p className="uppercase text-sm md:text-base font-bold text-slate-500 tracking-wide">
            Ceremonial Roles
          </p>
          {entourageSecondaryConfig.ceremonialRoles.map((role, i) => (
            <motion.p 
              key={i}
              className="text-sm md:text-base"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="font-medium text-slate-800">{role.role}:</span> {role.name}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </InviteCard>
  );
};

export default EntourageSecondary;
