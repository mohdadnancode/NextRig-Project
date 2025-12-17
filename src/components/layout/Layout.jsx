import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "../ui/ScrollToTop";
import ScrollTopButton from "../ui/ScrollTopButton";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-gray-100 flex flex-col">
      <Navbar />
      <ScrollToTop />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <ScrollTopButton />
    </div>
  );
}

export default Layout;