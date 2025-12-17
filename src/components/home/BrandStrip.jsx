import razer from '../assets/razer1.svg'
import logitech from '../assets/logitech.svg'
import nvidia from '../assets/NVIDIA-logo.jpg'
import amd from '../assets/amd.png'
import msi from '../assets/msi-logo.png'
import rog from '../assets/ROG logo.png'

const TRUSTED_BRANDS = [
  { name: 'NVIDIA', logo: nvidia },
  { name: 'AMD', logo: amd },
  { name: 'MSI', logo: msi },
  { name: 'ROG', logo: rog },
  { name: 'Razer', logo: razer},
  { name: 'Logitech', logo: logitech },
];

const BrandStrip = () => {
  return (
    <div className="bg-[#0d0d0d] text-white">
      <div className="max-w-6xl mx-auto px-6 pb-16">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-gray-500">Trusted Brands</p>
          <h2 className="text-xl sm:text-2xl font-semibold mt-2 text-gray-100">
            Gear from the world's top performance brands
          </h2>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-6 py-5">
        {TRUSTED_BRANDS.map((brand) => (
          <div key={brand.name} className="flex-1 min-w-[120px] flex items-center justify-center">
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-10 object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 hover:brightness-125"
              style={{ filter: 'drop-shadow(0 0 6px rgba(118,185,0,0))' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 6px rgba(118,185,0,0.8))';
                e.currentTarget.style.color = '#76b900';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 6px rgba(118,185,0,0))';
              }}
            />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default BrandStrip;