import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-gray-200 py-20 px-6 mt-16">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#76b900] border-b border-[#76b900]/30 inline-block pb-2 mb-8">
          About NextRig
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed text-lg mb-10">
          Welcome to <span className="text-[#76b900] font-semibold">NextRig</span> — 
          your one-stop destination for premium gaming components, peripherals, 
          and tech essentials. Our mission is simple: to empower gamers and creators 
          with the performance they deserve, through quality hardware and a seamless shopping experience.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12 text-left">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#76b900]/40 transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#76b900] mb-2">
              💡 Our Vision
            </h3>
            <p className="text-gray-400 text-sm">
              To become the most trusted and performance-driven destination 
              for PC enthusiasts and gamers worldwide.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#76b900]/40 transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#76b900] mb-2">
              ⚙️ What We Offer
            </h3>
            <p className="text-gray-400 text-sm">
              From GPUs and CPUs to gaming monitors, accessories, and consoles — 
              we handpick every product to deliver cutting-edge performance.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#76b900]/40 transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#76b900] mb-2">
              🎮 Our Commitment
            </h3>
            <p className="text-gray-400 text-sm">
              Customer satisfaction and trust are our top priorities — 
              we're here to make your next gaming upgrade smooth and affordable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;