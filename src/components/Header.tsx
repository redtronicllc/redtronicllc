import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/redtronic logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Brands", path: "/brands" },
  { name: "Products", path: "/products" },
  { name: "RSL", path: "/thinture" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const HEADER_HEIGHT = 88;
const SCROLL_STOP_DELAY = 120; // ms

const Header = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<number | null>(null);

  const location = useLocation();

  /* Scroll behaviour */
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // Hide on scroll down
      if (currentY > lastScrollY.current && currentY > HEADER_HEIGHT) {
        setIsHeaderVisible(false);
      }

      // Show immediately on scroll up
      if (currentY < lastScrollY.current) {
        setIsHeaderVisible(true);
      }

      // Detect scroll stop
      if (scrollTimeout.current) {
        window.clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = window.setTimeout(() => {
        setIsHeaderVisible(true);
      }, SCROLL_STOP_DELAY);

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        window.clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  /* Lock body scroll */
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  /* Close menu on route change */
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* HEADER */}
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm
        transition-transform duration-300 ease-out"
        style={{
          height: HEADER_HEIGHT,
          transform: isHeaderVisible
            ? "translateY(0)"
            : `translateY(-${HEADER_HEIGHT}px)`,
        }}
      >
        <div className="container mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="z-50">
            <img src={logo} alt="Redtronic" className="h-10 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm uppercase tracking-wider transition-colors
                ${
                  location.pathname === link.path
                    ? "text-black font-semibold"
                    : "text-black/80 hover:text-black"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link
            to="/contact"
            className="hidden lg:inline-flex px-6 py-3 rounded-full bg-black text-white text-sm font-medium"
          >
            Enquire Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden z-50 text-black"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 lg:hidden bg-white transition-opacity duration-300
        ${isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <nav
          className="flex flex-col items-center justify-center h-full gap-8"
          style={{ paddingTop: HEADER_HEIGHT }}
        >
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-2xl font-medium text-black/80 hover:text-black"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/contact"
            className="mt-6 px-10 py-4 rounded-full bg-black text-white text-base"
          >
            Get Quote
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Header;