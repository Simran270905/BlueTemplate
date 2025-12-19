  import flower from "../assets/Image/flower.png";
  import engage from"../assets/Image/engage.png";
  import cocktail from"../assets/Image/cocktail.png";
  import photos from"../assets/Image/photos.png";
  import dinner from"../assets/Image/dinner.png";
  import party from"../assets/Image/party.png";
  import couple1 from"../assets/Image/couple1.png";
  import couple2 from"../assets/Image/couple2.png";
  import guest from"../assets/Image/guest.png";

  const WeddingTimeline = () => {
    return (
      // only center the card; background comes from Home.jsx
      <section className="w-full flex justify-center">
        {/* CARD */}
        <div
          className="
            relative
            w-full
            max-w-[900px]
            min-h-[500px]
            bg-white
            border border-[#8FA7BF]/40
            shadow-[0_20px_60px_rgba(0,0,0,0.15)]
            rounded-2xl
           px-6
           pt-16 pb-10
           md:px-10
          md:pt-20 md:pb-14

            flex
            flex-col
            justify-between
            overflow-hidden
          "
        >
          {/* DECOR FLOWERS */}
          <img
            src={flower}
            alt=""
            className="absolute -top-10 left-0 w-40 md:w-56 pointer-events-none select-none"
          />
          <img
            src={flower}
            alt=""
            className="absolute bottom-0 -right-4 w-32 md:w-48 scale-x-[-1] scale-y-[-1] pointer-events-none select-none"
          />

          {/* BIG HEADING */}
          {/* HEADER */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-head font-bold text-3xl md:text-4xl lg:text-5xl text-[#8FA7BF] tracking-wide">
              Wedding Timeline
            </h2>
          </div>


          {/* TIMELINE */}
          <div className="px-2 md:px-6 mb-10">
            <div className="flex flex-wrap md:flex-nowrap items-stretch justify-between text-[#8FA7BF] gap-6">
              {[
                { time: "3:00 PM", label: "CEREMONY", icon: engage },
                { time: "4:30 PM", label: "PHOTOS", icon: photos },
                { time: "5:00 PM", label: "COCKTAIL", icon: cocktail},
                { time: "6:00 PM", label: "DINNER", icon: dinner},
                { time: "7:30 PM", label: "PARTY", icon: party },
              ].map((item, i) => (
                <div
                  key={i}
                  className="
                    flex
                    flex-col
                    items-center
                    text-center
                    flex-1
                    min-w-[80px]
                  "
                >
                  <img
                      src={item.icon}
                      alt={item.label}
                      className="h-8 md:h-10 mb-3 md:mb-4"
                      />

                  <div className="w-full h-[2px] bg-[#8FA7BF] relative mb-3 md:mb-4">
                    <span className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 bg-[#8FA7BF] rounded-full" />
                  </div>

                  <p className="text-[10px] md:text-xs tracking-widest font-sans">
                    {item.time}
                  </p>
                  <p className="text-[9px] md:text-[10px] tracking-widest mt-1">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* UNPLUGGED CEREMONY */}
          <div className="text-center px-4 md:px-10 mb-8 md:mb-10">
            <p className="font-para font-bold text-[10px] md:text-xs tracking-[0.3em] text-[#8FA7BF] mb-3 md:mb-4 uppercase">
              Unplugged Ceremony
            </p>
            <p className="font-font text-xs md:text-sm text-gray-700 leading-relaxed">
              Our amazing and talented official photographers will capture every
              aspect of our ceremony. We request the joyful smiles without the
              distraction of electronic devices or cameras. Please keep them away
              until we tie the knot.
            </p>
          </div>

          {/* SNAP & SHARE */}
          <div className="text-center px-4 md:px-10 mb-8 md:mb-10">
            <p className="font-para font-bold text-[10px] md:text-xs tracking-[0.3em] text-[#8FA7BF] mb-3 md:mb-4 uppercase">
              Snap &amp; Share
            </p>
            <p className="font-font text-xs md:text-sm text-gray-700 leading-relaxed">
              Help us capture our special day and share it by tagging us or using
              our wedding hashtag
              <br />
              <span className="font-bold tracking-wide">
                #BrideAndGroomUnion
              </span>
            </p>
          </div>

          {/* REMINDERS */}
          <div className="text-center pb-2">
            <p className="font-para font-bold text-[10px] md:text-xs tracking-[0.3em] text-[#8FA7BF] mb-5 md:mb-8 uppercase">
              Reminders
            </p>

            <div className="font-font flex flex-wrap justify-center gap-8 md:gap-16 text-[#8FA7BF]">
              {[
                { label: "BE ON TIME", img: couple1 },
                { label: "FINISH THE EVENT", img: guest },
                { label: "ENJOY & HAVE FUN", img: couple2 },
              ].map((item, i) => (
                <div key={i} className="text-center min-w-[90px]">
                  <img
                      src={item.img}
                      alt={item.label}
                      className="h-12 md:h-16 mx-auto mb-3 md:mb-4"
                      />
                  <p className="text-[9px] md:text-xs tracking-widest">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default WeddingTimeline;