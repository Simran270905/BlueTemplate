import { motion } from "framer-motion";
import InviteCard from "./InviteCard";
import flower from "../assets/Image/flower.png";

const EntouragePrimary = () => {
  return (
    <InviteCard>
      {/* Flowers */}
      <img
        src={flower}
        className="absolute -top-8 left-0 w-40 pointer-events-none"
        alt=""
      />
      <img
        src={flower}
        className="absolute bottom-0 -right-3 w-36 scale-x-[-1] scale-y-[-1] pointer-events-none"
        alt=""
      />

      {/* Content */}
      <motion.div
        className="
          relative z-10
          h-full
          flex flex-col
          items-center
          justify-center
          text-center
        "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="font-head text-4xl text-[#8FA7BF] mb-10">
          Entourage
        </h2>

        <div className="space-y-6 text-slate-700">
          <div>
            <p className="font-para text-[9px] tracking-[0.3em] text-slate-500 uppercase">
              Parents of the Groom
            </p>
            <p className="font-font mt-1">
              Shri Groom Father Name <br />
              Smt. Groom Mother Name
            </p>
          </div>

          <div>
            <p className="font-para text-[9px] tracking-[0.3em] text-slate-500 uppercase">
              Parents of the Bride
            </p>
            <p className="font-font mt-1">
              Shri Bride Father Name <br />
              Smt. Bride Mother Name
            </p>
          </div>

          <div>
            <p className="font-para text-[9px] tracking-[0.3em] text-slate-500 uppercase">
              Blessings From
            </p>
            <p className="font-font mt-1">
              Grandparents & Elders of Both Families
            </p>
          </div>

          <div>
            <p className="font-para text-[9px] tracking-[0.3em] text-slate-500 uppercase">
              Kanyadaan
            </p>
            <p className="font-font mt-1">
              Maternal Uncle & Aunt of the Bride
            </p>
          </div>
        </div>
      </motion.div>
    </InviteCard>
  );
};

export default EntouragePrimary;
