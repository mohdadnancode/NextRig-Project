import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "./components/layout/Layout";
import ProtectedRoute from "./Auth/ProtectedRoute";
import AdminRoutes from "./admin/routes/AdminRoutes";

const Home = lazy(() => import("./pages/public/Home"));
const Register = lazy(() => import("./pages/auth/Register"));
const Login = lazy(() => import("./pages/auth/Login"));
const Cart = lazy(() => import("./pages/user/Cart"));
const Products = lazy(() => import("./pages/public/Products"));
const ProductDetails = lazy(() => import("./pages/public/ProductDetails"));
const Checkout = lazy(() => import("./pages/user/Checkout"));
const UserProfile = lazy(() => import("./pages/user/UserProfile"));
const MyOrders = lazy(() => import("./pages/user/MyOrder"));
const Wishlist = lazy(() => import("./pages/user/Whishlist"));

const About = lazy(() => import("./pages/FooterPages/About"));
const Contact = lazy(() => import("./pages/FooterPages/Contact"));
const Careers = lazy(() => import("./pages/FooterPages/Careers"));
const FAQ = lazy(() => import("./pages/FooterPages/FAQ"));
const PrivacyPolicy = lazy(() => import("./pages/FooterPages/PrivacyPolicy"));
const Returns = lazy(() => import("./pages/FooterPages/Returns"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen bg-[#0d0d0d] text-[#76b900] text-lg font-medium">
          Loading...
        </div>
      }
    >
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/orders" element={<MyOrders />} />

          {/* Footer Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/returns" element={<Returns />} />
        </Route>

        <Route path="/admin/*" element={<AdminRoutes />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;