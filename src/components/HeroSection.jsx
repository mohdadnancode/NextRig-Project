import { Link } from 'react-router-dom';
import thunder from '../assets/thunder.png';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-[#0d0d0d] text-white pt-20 relative overflow-hidden">
      {/* Animated Background Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Moving Gradient */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: 'linear-gradient(45deg, #76b900 0%, #0d0d0d 25%, #1a1a1a 50%, #0d0d0d 75%, #76b900 100%)',
            backgroundSize: '400% 400%',
            animation: 'gradientMove 15s ease infinite',
          }}
        />
        
        {/* Floating Particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#76b900] rounded-full blur-sm" style={{ animation: 'float 8s ease-in-out infinite' }} />
        <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-[#76b900] rounded-full blur-sm" style={{ animation: 'floatSlow 12s ease-in-out infinite' }} />
        <div className="absolute top-60 left-1/4 w-1 h-1 bg-[#76b900] rounded-full blur-sm" style={{ animation: 'float 10s ease-in-out infinite', animationDelay: '2s' }} />
        <div className="absolute top-80 right-1/3 w-2 h-2 bg-[#76b900] rounded-full blur-sm" style={{ animation: 'floatSlow 14s ease-in-out infinite', animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-1/3 w-1.5 h-1.5 bg-[#76b900] rounded-full blur-sm" style={{ animation: 'float 9s ease-in-out infinite', animationDelay: '3s' }} />
        <div className="absolute bottom-60 right-10 w-1 h-1 bg-[#76b900] rounded-full blur-sm" style={{ animation: 'floatSlow 11s ease-in-out infinite', animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-[#76b900] rounded-full blur-sm" style={{ animation: 'float 13s ease-in-out infinite', animationDelay: '4s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-6 py-20">
          <div className="flex-1 w-full space-y-6 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.45em] text-gray-400">
              <span className="h-px w-10 bg-[#76b900]/60 hidden sm:block" />
              NextRig
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
              Build Your Next Gaming Rig <img src={thunder} alt="Thunderbolt" className="w-10 h-18 inline-block" />
            </h1>
            <div className="h-[2px] w-50 bg-gradient-to-r from-[#76b900] to-transparent mb-4"></div>

            <p className="text-lg text-gray-400 max-w-2xl">
              High-performance PCs, components, and gear for gamers. Curated builds, premium parts, and neon aesthetics tailored to fuel your next win.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-xl bg-[#76b900] text-black font-semibold px-8 py-3 shadow-[0_0_30px_rgba(118,185,0,0.45)] transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#76b900]/60"
              >
                Shop Now
              </Link>
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-sm text-gray-300">
                Free shipping on featured rigs · 24/7 build support
              </div>
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/10 to-white/5 p-8 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
              <div className="absolute inset-0 -z-10 rounded-3xl border border-[#76b900]/20 blur-3xl opacity-60" />
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-1">Signature Builds</p>
                  <p className="text-3xl font-semibold text-white">RTX 5090 • Gen5 Ryzen • NVMe 4TB</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Avg FPS', value: '240+' },
                    { label: 'Thermals', value: 'Cool & Quiet' },
                    { label: 'Warranty', value: '2 Years' },
                    { label: 'Support', value: '24/7' },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-white/10 bg-black/40 px-4 py-5 text-center"
                    >
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-500">{stat.label}</p>
                      <p className="mt-2 text-xl font-semibold text-white">{stat.value}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-400">
                  Craft elite setups with tempered glass chassis, custom cooling, and neon accents engineered to perform under pressure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

