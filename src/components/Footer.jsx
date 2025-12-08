import { Link } from "react-router-dom";
import { FaInstagram, FaXTwitter, FaDiscord } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black/80 backdrop-blur-md border-t border-[#76b900]/40 relative overflow-hidden">
      {/* Subtle glow ring background */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-[400px] h-[400px] bg-[#76b900] rounded-full blur-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-12 z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 mb-4 uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-gray-400 hover:text-[#76b900] transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-400 hover:text-[#76b900] transition-colors">Contact</Link></li>
              <li><Link to="/careers" className="text-sm text-gray-400 hover:text-[#76b900] transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 mb-4 uppercase tracking-wider">
              Support
            </h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-sm text-gray-400 hover:text-[#76b900] transition-colors">FAQ</Link></li>
              <li><Link to="/returns" className="text-sm text-gray-400 hover:text-[#76b900] transition-colors">Returns</Link></li>
              <li><Link to="/privacy" className="text-sm text-gray-400 hover:text-[#76b900] transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 mb-4 uppercase tracking-wider">
              Social
            </h3>
            <div className="flex justify-center md:justify-start items-center gap-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <FaInstagram
                  size={22}
                  className="text-gray-400 group-hover:text-[#76b900] transition-all duration-300 group-hover:scale-110"
                />
                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-80 blur-lg bg-[#76b900]/80 transition-all duration-300"></span>
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <FaXTwitter
                  size={22}
                  className="text-gray-400 group-hover:text-[#76b900] transition-all duration-300 group-hover:scale-110"
                />
                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-80 blur-lg bg-[#76b900]/80 transition-all duration-300"></span>
              </a>

              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <FaDiscord
                  size={22}
                  className="text-gray-400 group-hover:text-[#76b900] transition-all duration-300 group-hover:scale-110"
                />
                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-80 blur-lg bg-[#76b900]/80 transition-all duration-300"></span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-gray-800 text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()}{" "}
            <span className="text-[#76b900] font-medium">NextRig</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;