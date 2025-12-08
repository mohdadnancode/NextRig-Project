import { useNavigate } from "react-router-dom";
import gpu from "../assets/gpu.png";
import keyboard from "../assets/keyboard.jpg";
import console from "../assets/console.jpg";
import monitor from "../assets/monitor.jpg";

const POPULAR_CATEGORIES = [
  {
    name: "GPU",
    icon: gpu,
  },
  {
    name: "Keyboard",
    icon: keyboard,
  },
  {
    name: "Gaming Console",
    icon: console,
  },
  {
    name: "Monitor",
    icon: monitor,
  },
];

const CategoriesSection = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName) => {
    navigate(`/products?category=${encodeURIComponent(categoryName)}`);
  };

  return (
    <div className="bg-[#0d0d0d] text-white">
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-gray-500">
              Shop by Category
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold mt-2 text-gray-100">
              Find gear that matches your playstyle
            </h2>
          </div>
          <span className="hidden sm:block h-px flex-1 sm:ml-8 bg-gradient-to-r from-[#76b900] to-transparent" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {POPULAR_CATEGORIES.map((category) => (
            <div
              key={category.name}
              onClick={() => handleCategoryClick(category.name)}
              className="text-center flex flex-col items-center gap-4 p-4 rounded-2xl transition-transform duration-200 hover:scale-105"
            >
              <div className="relative w-28 h-28 rounded-full border border-[#76b900]/40 bg-white/5 backdrop-blur-md shadow-inner flex items-center justify-center overflow-hidden transition-all duration-200 hover:shadow-[0_0_10px_#76b900]">
                <img
                  src={category.icon}
                  alt={category.name}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
                <div className="absolute inset-0 rounded-full border border-[#76b900]/40 group-hover:border-[#76b900]" />
              </div>
              <p className="text-gray-100 font-medium group-hover:text-[#76b900] transition-colors">
                {category.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;