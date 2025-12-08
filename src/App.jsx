import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import UserProfile from "./pages/UserProfile";
import MyOrders from "./pages/MyOrder";
import OrderDetails from "./pages/OrderDetails ";
import Wishlist from "./pages/Whishlist";
import About from "./pages/footer pages/About";
import Contact from "./pages/footer pages/Contact";
import Careers from "./pages/footer pages/Careers";
import FAQ from "./pages/footer pages/FAQ";
import PrivacyPolicy from "./pages/footer pages/PrivacyPolicy";
import Returns from "./pages/footer pages/Returns";


const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist /> } />
        <Route path="/profile" element={ <UserProfile />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<MyOrders />} />
        <Route path="/orders/:id" element={<OrderDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/returns" element={<Returns />} />
      </Route>
    </Routes>
  );
};

export default App;