import toast from "react-hot-toast";
import { useCart } from "../context/CartContext";

export function useCartControls(productId, quantity, maxStock = 10) {
  const { updateQuantity, removeFromCart, loading } = useCart();

  const increase = () => {
    if (quantity >= maxStock) {
      toast.error("Stock limit reached");
      return;
    }
    updateQuantity(productId, quantity + 1);
  };

  const decrease = () => {
    if (quantity > 1) {
      updateQuantity(productId, quantity - 1);
    }
  };

  const remove = () => {
    removeFromCart(productId);
  };

  return {
    increase,
    decrease,
    remove,
    loading,
    canDecrease: quantity > 1,
    canIncrease: quantity < maxStock,
  };
}