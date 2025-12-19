const InviteCard = ({ children }) => {
  return (
    <section className="w-full flex justify-center px-3 sm:px-4 py-8">
      <div
        className="
          relative
          w-full
          max-w-[900px]
          h-[600px]      /* fixed height for all cards */
          bg-white
          border border-[#8FA7BF]/40
          shadow-[0_20px_60px_rgba(0,0,0,0.15)]
          rounded-2xl
          px-6
          pt-16
          pb-10
          md:px-10
          md:pt-20
          md:pb-14
          flex
          flex-col
          justify-start
          overflow-hidden
        "
      >
        {/* Content wrapper with scroll if overflow */}
        <div className="w-full h-full flex flex-col items-center text-center gap-8 md:gap-10 overflow-auto py-2">
          {children}
        </div>
      </div>
    </section>
  );
};

export default InviteCard;
