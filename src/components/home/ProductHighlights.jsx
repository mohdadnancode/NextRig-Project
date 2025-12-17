import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const ProductHighlights = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:3000/products');
        const products = response.data;
        
        const featured = products.filter(product => product.featured === true);
        setFeaturedProducts(featured);
      } catch (error) {
        console.error('Error fetching featured products:', error);
        setFeaturedProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <div className="bg-[#0d0d0d] text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-gray-500">Featured Gear</p>
              <h2 className="text-2xl sm:text-3xl font-semibold mt-2 text-gray-100">
                Precision-tuned hardware
              </h2>
            </div>
            <span className="hidden sm:block h-px flex-1 sm:ml-8 bg-gradient-to-r from-[#76b900] to-transparent" />
          </div>
          <div className="flex justify-center items-center h-48">
            <div className="text-[#76b900] text-lg">Loading featured products...</div>
          </div>
        </div>
      </div>
    );
  }

  if (!featuredProducts.length) {
    return (
      <div className="bg-[#0d0d0d] text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-gray-500">Featured Gear</p>
              <h2 className="text-2xl sm:text-3xl font-semibold mt-2 text-gray-100">
                Precision-tuned hardware
              </h2>
            </div>
            <span className="hidden sm:block h-px flex-1 sm:ml-8 bg-gradient-to-r from-[#76b900] to-transparent" />
          </div>
          <div className="flex justify-center items-center h-48">
            <div className="text-gray-400 text-lg">No featured products available 🚀</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0d0d0d] text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-gray-500">Featured Gear</p>
            <h2 className="text-2xl sm:text-3xl font-semibold mt-2 text-gray-100">
              Precision-tuned hardware
            </h2>
          </div>
          <span className="hidden sm:block h-px flex-1 sm:ml-8 bg-gradient-to-r from-[#76b900] to-transparent" />
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons - Hidden on mobile */}
          <button
            onClick={scrollLeft}
            className="hidden sm:flex absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full items-center justify-center text-[#76b900] hover:bg-white/20 hover:shadow-[0_0_15px_rgba(118,185,0,0.5)] transition-all duration-300"
            aria-label="Scroll left"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={scrollRight}
            className="hidden sm:flex absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full items-center justify-center text-[#76b900] hover:bg-white/20 hover:shadow-[0_0_15px_rgba(118,185,0,0.5)] transition-all duration-300"
            aria-label="Scroll right"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-72 sm:w-80 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 hover:shadow-[0_0_25px_#76b90055] shadow-[0_0_15px_#76b90022] hover:scale-105 transition-all duration-300 group flex flex-col h-full"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden rounded-lg mb-4 bg-gray-800/50 aspect-video flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-2 left-2">
                    <span className="inline-block px-2 py-1 bg-[#76b900]/20 text-[#76b900] text-xs font-semibold rounded border border-[#76b900]/30">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Product Info - Flex column with justify-between for perfect alignment */}
                <div className="flex flex-col flex-1 justify-between">
                  {/* Top Content - Product Name */}
                  <div className="mb-4">
                    <h3 className="text-white font-semibold text-sm md:text-base line-clamp-2 group-hover:text-[#76b900] transition-colors min-h-[3rem] flex items-start">
                      {product.name}
                    </h3>
                  </div>

                  {/* Bottom Content - Price and Button */}
                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-[#76b900]">
                        ₹{product.price.toLocaleString("en-IN")}
                      </span>
                    </div>

                    <Link
                      to={`/products/${product.id}`}
                      className="w-full bg-[#76b900] hover:bg-[#68a500] text-black font-bold py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(118,185,0,0.5)] flex items-center justify-center gap-2"
                    >
                      <span>View Details</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Products Link */}
        <div className="text-center mt-8">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#76b900] text-[#76b900] hover:bg-[#76b900] hover:text-black font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(118,185,0,0.3)]"
          >
            <span>View All Products</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Custom scrollbar hide */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default ProductHighlights;