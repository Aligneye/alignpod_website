import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logo from "../assets/alignlogo.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Why alignPod", href: "/why-alignpod" },
  { name: "Product", href: "/product" },
  { name: "Science", href: "/science" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // const isDarkTheme =
  // location.pathname === "/" ||
  // location.pathname === "/why-alignpod";
  // location.pathname === "/product";
  // location.pathname === "/science";

  const isDarkTheme =
  ["/", "/why-alignpod", "/product", "/science"].includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine text color based on scroll state and theme
  const getTextColor = (isActive: boolean) => {
    if (isScrolled) {
      return isActive ? "text-white" : "text-white/70 hover:text-white";
    }
    if (isDarkTheme) {
      return isActive ? "text-white" : "text-white/70 hover:text-white";
    }
    return isActive ? "text-[#111111]" : "text-[#111111]/60 hover:text-[#111111]";
  };

  const getLogoStyle = () => {
  return "";
};

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled
          ? "bg-[#0E1014]/80 backdrop-blur-xl border-white/5 py-4 shadow-sm"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 z-50 relative group">
          <img
            src={logo}
            alt="alignPod Logo"
            className={`h-8 md:h-10  w-auto object-contain transition-all duration-300 group-hover:opacity-80 ${getLogoStyle()}`}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-colors relative py-2 ${getTextColor(isActive)}`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full ${
                      isScrolled || isDarkTheme ? "bg-white" : "bg-[#111111]"
                    }`}
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions (Desktop & Mobile) */}
        <div className="flex items-center gap-4 z-50 relative">

          <button className={`hidden md:flex items-center justify-center px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 hover:scale-105 ${
            isScrolled || isDarkTheme
              ? "bg-white text-black hover:bg-gray-100 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              : "bg-[#111111] text-white hover:bg-black shadow-[0_4px_14px_rgba(0,0,0,0.1)]"
          }`}>
            Buy Now
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 transition-colors ${getTextColor(false)}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" strokeWidth={1.5} />
            ) : (
              <Menu className="w-6 h-6" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100dvh - 100%)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 right-0 bg-[#0E1014] border-t border-white/5 md:hidden shadow-2xl overflow-y-auto"
          >
            <div className="px-6 py-8 flex flex-col gap-6 h-full">
              {navLinks.map((link, idx) => {
                const isActive = location.pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.4 }}
                  >
                    <Link
                      to={link.href}
                      className={`text-xl font-display font-medium transition-colors flex items-center gap-4 ${
                        isActive ? "text-white" : "text-white/60 hover:text-white"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {isActive && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1, duration: 0.4 }}
                className="mt-auto pb-12"
              >
                <button className="btn-primary-dark w-full">
                  Buy Now
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
