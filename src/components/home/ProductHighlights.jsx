import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import api from "../../api/client";

const ProductHighlights = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        setLoading(true);
        const response = await api.get("/products");
        const products = response.data;

        // 🧠 Filter and shuffle featured products
        const featured = products
          .filter((p) => p.featured === true)
          .sort(() => Math.random() - 0.5);

        setFeaturedProducts(featured);
      } catch (error) {
        console.error("Error fetching featured products:", error);
        setFeaturedProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };
  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  // 🌀 Loading state
  if (loading) {
    return (
      <div className="bg-[#0d0d0d] text-white py-16 text-center">
        <p className="text-[#76b900] text-lg animate-pulse">
          Loading featured products...
        </p>
      </div>
    );
  }

  // 🚫 No featured products
  if (!featuredProducts.length) {
    return (
      <div className="bg-[#0d0d0d] text-white py-16 text-center">
        <p className="text-gray-400 text-lg">
          No featured products available 🚀
        </p>
      </div>
    );
  }

  return (
    <section className="bg-[#0d0d0d] text-white py-14">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
              Featured Gear
            </p>
            <h2 className="text-xl sm:text-2xl font-bold mt-1 text-gray-100">
              Precision-Tuned Hardware
            </h2>
          </div>
          <span className="hidden sm:block h-px flex-1 sm:ml-8 bg-gradient-to-r from-[#76b900] to-transparent" />
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={scrollLeft}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-8 h-8 bg-white/10 border border-white/20 rounded-full text-[#76b900] items-center justify-center hover:bg-white/20 hover:shadow-[0_0_12px_rgba(118,185,0,0.5)] transition-all duration-300"
            aria-label="Scroll left"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={scrollRight}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-8 h-8 bg-white/10 border border-white/20 rounded-full text-[#76b900] items-center justify-center hover:bg-white/20 hover:shadow-[0_0_12px_rgba(118,185,0,0.5)] transition-all duration-300"
            aria-label="Scroll right"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Product row */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-3 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-56 sm:w-64 snap-start bg-white/5 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden hover:shadow-[0_0_15px_#76b90055] hover:scale-105 transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative bg-gray-900/50 aspect-[4/3] flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute top-2 left-2 bg-[#76b900]/20 border border-[#76b900]/30 text-[#76b900] text-[10px] font-semibold px-2 py-[2px] rounded">
                    {product.category}
                  </span>
                </div>

                {/* Info */}
                <div className="p-3 flex flex-col justify-between h-[120px]">
                  <h3 className="text-white font-medium text-sm line-clamp-2 group-hover:text-[#76b900] transition-colors">
                    {product.name}
                  </h3>

                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-lg font-bold text-[#76b900]">
                      ₹{product.price.toLocaleString("en-IN")}
                    </span>
                    <Link
                      to={`/products/${product.id}`}
                      className="px-3 py-1.5 text-xs font-semibold text-black bg-[#76b900] hover:bg-[#68a500] rounded-md transition-all duration-300 hover:shadow-[0_0_10px_rgba(118,185,0,0.4)]"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#76b900] text-[#76b900] hover:bg-[#76b900] hover:text-black text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(118,185,0,0.3)]"
          >
            <span>View All Products</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default ProductHighlights;