import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { addToCart, cartItems } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { user, isAuthenticated } = useAuth();

  const isWishlisted = isInWishlist(product?.id);
  const isInCart = product && Array.isArray(cartItems) && cartItems.some((item) => item.id === product.id);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:3000/products/${id}`);
        setProduct(response.data);
        setError(null);
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Product not found");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      toast.error("Please login to add items to cart");
      return;
    }

    if (product) {
      if (isInCart) {
        toast("Already in your cart");
      } else {
        addToCart(product);
      }
    }
  };

  const handleToggleWishlist = () => {
    if (!isAuthenticated) {
      toast.error("Please login to manage your wishlist");
      return;
    }

    if (product) {
      toggleWishlist(product);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center">
        <div className="text-[#76b900] text-xl">Loading product...</div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center p-4">
        <div className="text-center">
          <div className="text-6xl mb-4">❌</div>
          <h1 className="text-2xl font-bold text-gray-300 mb-4">
            Product not found
          </h1>
          <p className="text-gray-500 mb-6">
            The product you're looking for doesn't exist.
          </p>
          <Link
            to="/products"
            className="bg-[#76b900] hover:bg-[#68a500] text-black font-semibold px-6 py-3 rounded-lg transition-colors hover:shadow-[0_0_15px_rgba(118,185,0,0.5)]"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-gray-100 p-4 pt-20">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto mb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-400 hover:text-[#76b900] transition-colors group"
        >
          <i className="fas fa-arrow-left group-hover:translate-x-[-2px] transition-transform"></i>
          <span>Back to Products</span>
        </button>
      </div>

      {/* Product Details */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Image */}
            <div className="lg:w-1/2 p-8 flex items-center justify-center bg-gray-900/50">
              <div className="relative w-full max-w-md">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 object-contain rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg pointer-events-none" />
              </div>
            </div>

            {/* Info */}
            <div className="lg:w-1/2 p-8 flex flex-col">
              {/* Category */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-[#76b900]/20 text-[#76b900] text-sm font-semibold rounded-full border border-[#76b900]/30">
                  {product.category || "General"}
                </span>
              </div>

              {/* Name */}
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                {product.name}
              </h1>

              {/* Price */}
              <div className="mb-6">
                <span className="text-3xl font-bold text-[#76b900]">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>
                <span className="text-gray-400 text-sm ml-2">
                  (Inclusive of all taxes)
                </span>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-300 mb-3">
                  Description
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {product.description || "No description available."}
                </p>
              </div>

              {/* Features */}
              {product.features?.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-300 mb-3">
                    Key Features
                  </h3>
                  <ul className="text-gray-400 space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <i className="fas fa-check text-[#76b900] text-sm"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Stock */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-green-400">
                  <i className="fas fa-check-circle"></i>
                  <span className="font-semibold">In Stock</span>
                </div>
                <p className="text-gray-400 text-sm mt-1">Ready to ship</p>
              </div>

              {/* Buttons */}
              <div className="mt-auto">
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-[#76b900] hover:bg-[#68a500] text-black font-bold py-4 px-6 rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(118,185,0,0.5)] hover:scale-105 active:scale-95 flex items-center justify-center gap-3 text-lg mb-4"
                >
                  <i className="fas fa-shopping-cart"></i>
                  <span>
                    {isInCart ? "Already in Cart" : "Add to Cart"}
                  </span>
                </button>

                <div className="flex gap-3">
                  <button
                    onClick={handleToggleWishlist}
                    className={`flex-1 border font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                      isWishlisted
                        ? "bg-red-500/20 border-red-500 text-red-400 hover:bg-red-500/30 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]"
                        : "border-[#76b900] text-[#76b900] hover:bg-[#76b900] hover:text-black hover:shadow-[0_0_15px_rgba(118,185,0,0.3)]"
                    }`}
                  >
                    <i
                      className={`fas fa-heart ${
                        isWishlisted ? "text-red-400" : ""
                      }`}
                    ></i>
                    <span>
                      {isWishlisted
                        ? "Remove from Wishlist"
                        : "Add to Wishlist"}
                    </span>
                  </button>

                  <button
                    onClick={() =>
                      navigator.share
                        ? navigator.share({
                            title: product.name,
                            text: "Check out this product!",
                            url: window.location.href,
                          })
                        : toast("Sharing not supported on this device")
                    }
                    className="flex-1 border border-gray-600 text-gray-400 hover:border-[#76b900] hover:text-[#76b900] font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-[0_0_15px_rgba(118,185,0,0.2)]"
                  >
                    <i className="fas fa-share"></i>
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Extra Info */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Specs */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-[#76b900] mb-4">
              Specifications
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-400">Category</span>
                <span className="text-white">
                  {product.category || "—"}
                </span>
              </div>
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-400">Brand</span>
                <span className="text-white">
                  {product.brand || "Generic"}
                </span>
              </div>
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-400">Warranty</span>
                <span className="text-white">2 Years</span>
              </div>
            </div>
          </div>

          {/* Shipping */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-[#76b900] mb-4">
              Shipping & Returns
            </h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-3">
                <i className="fas fa-shipping-fast text-[#76b900]"></i>
                <span>Free shipping on orders over ₹5000</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-undo text-[#76b900]"></i>
                <span>30-day return policy</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-shield-alt text-[#76b900]"></i>
                <span>2-year warranty included</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;