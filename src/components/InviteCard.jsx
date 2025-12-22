const InviteCard = ({ children }) => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center px-3 sm:px-4 py-8">
      <div className="relative w-full max-w-[900px] h-[600px] md:h-[700px] bg-white shadow-lg rounded-2xl border border-[#8FA7BF]/30 flex flex-col overflow-hidden">
        
        {/* Scrollable content */}
        <div className="relative z-10 w-full h-full flex flex-col items-center text-center overflow-auto px-6 py-6 md:px-10 md:py-8 gap-6">
          {children}
        </div>

      </div>
    </section>
  );
};

export default InviteCard;
