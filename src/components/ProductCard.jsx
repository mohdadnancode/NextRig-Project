import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useAuth } from "../context/AuthContext";
import { Heart, ShoppingCart } from "lucide-react";
import toast from "react-hot-toast";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist, loading } = useWishlist();
  const { user } = useAuth();

  const handleProductClick = () => navigate(`/products/${product.id}`);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (!user) return toast.error("Please login to add items to cart");
    addToCart(product);
  };

  const handleWishlistToggle = async (e) => {
    e.stopPropagation();
    if (!user) return toast.error("Please login to manage your wishlist");
    toggleWishlist(product);
  };

  const wishlisted = isInWishlist(product.id);

  return (
    <div
      className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:border-[#76b900]/40 hover:shadow-[0_0_15px_#76b90033] hover:-translate-y-2 transition-all duration-300 flex flex-col cursor-pointer h-full"
      onClick={handleProductClick}
    >
      {/* Image */}
      <div className="relative overflow-hidden rounded-t-xl bg-gray-800/50 aspect-square flex items-center justify-center p-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-36 object-contain group-hover:scale-110 transition-transform duration-300"
        />

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-[#76b900]/20 text-[#76b900] text-xs px-2 py-1 rounded-md border border-[#76b900]/30">
            {product.category}
          </span>
        </div>

        {/* Wishlist Button */}
        <button
          onClick={handleWishlistToggle}
          className={`absolute top-3 right-3 z-20 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${
            wishlisted
              ? "bg-red-500/10 hover:bg-red-500/20"
              : "bg-white/10 hover:bg-white/20"
          }`}
          title={wishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
          disabled={loading} // Prevent spam clicks during sync
        >
          <Heart
            size={16}
            className={`transition-all duration-300 ${
              wishlisted
                ? "fill-red-500 text-red-500"
                : "text-gray-400 hover:text-red-400 hover:fill-red-400"
            } ${loading ? "animate-pulse" : ""}`} 
          />
        </button>
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-white font-semibold text-sm truncate mb-1 group-hover:text-[#76b900] transition-colors">
            {product.name}
          </h3>
          <p className="text-[#76b900] font-bold text-sm">
            ₹{product.price.toLocaleString("en-IN")}
          </p>
        </div>

        {/* Add to Cart */}
        <button
          onClick={handleAddToCart}
          className="mt-3 w-full bg-[#76b900] hover:bg-[#68a500] text-black font-semibold text-sm px-3 py-2 rounded-md hover:scale-105 transition-all duration-300 flex items-center justify-center gap-1"
        >
          <span>Add</span>
          <ShoppingCart size={16} />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;