import InviteCard from "./InviteCard";
import flower from "../assets/Image/flower.png";
import coat from "../assets/Image/coat.png";
import outfit from "../assets/Image/outfit.png";
import shoes from "../assets/Image/shoes.png";
import gown from "../assets/Image/gown.png";

const detailConfig = {
  id: "wedding-details-1",
  title: "Details",
  dressCode: {
    title: "Dress Code",
    description: "We kindly encourage our guests to wear formal attire with these colors on our special day.",
    colors: ["#9fb3c8", "#2e537c", "#7fa1bd", "#9cb8d6"],
    icons: [coat, outfit, shoes, gown],
  },
  rsvp: {
    title: "RSVP",
    seats: "___",
    deadline: "June 1",
    phone: "01234567890",
  },
};

export default function Detail() {
  return (
    <InviteCard>
      {/* 🌸 Fixed Flowers */}
      <img
        src={flower}
        className="absolute top-0 left-0 w-40 md:w-56 pointer-events-none"
        alt=""
      />
      <img
        src={flower}
        className="absolute bottom-0 right-0 w-32 md:w-48 scale-x-[-1] scale-y-[-1] pointer-events-none"
        alt=""
      />

      {/* 💍 Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-6 w-full h-full px-4">
        <h2 className="font-head text-3xl md:text-5xl text-[#8FA7BF] font-bold">
          {detailConfig.title}
        </h2>

        <div className="max-w-md flex flex-col gap-4">
          <p className="uppercase text-sm md:text-base text-slate-500 tracking-wide">
            {detailConfig.dressCode.title}
          </p>

          <p className="text-sm md:text-base text-slate-600">
            {detailConfig.dressCode.description}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {detailConfig.dressCode.colors.map((c, i) => (
              <div
                key={i}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                style={{ backgroundColor: c }}
              />
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {detailConfig.dressCode.icons.map((icon, i) => (
              <img key={i} src={icon} className="h-12" alt={`Dress icon ${i + 1}`} />
            ))}
          </div>
        </div>

        <div className="max-w-md text-center">
          <p className="uppercase text-sm md:text-base text-slate-500 tracking-wide">
            {detailConfig.rsvp.title}
          </p>

          <p className="text-sm md:text-base text-slate-600">
            We have reserved <span className="font-bold">{detailConfig.rsvp.seats}</span> seat(s) in your honor.
          </p>

          <p className="text-sm md:text-base text-slate-600">
            Kindly respond by <span className="font-semibold">{detailConfig.rsvp.deadline}</span>
            <br />
            Message me at{" "}
            <a 
              href={`https://wa.me/${detailConfig.rsvp.phone.replace(/\D/g, '')}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="font-mono font-bold text-[#25D366] hover:underline transition-colors"
            >
              {detailConfig.rsvp.phone}
            </a>
          </p>
        </div>
      </div>
    </InviteCard>
  );
}
