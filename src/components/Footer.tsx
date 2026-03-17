import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import logo from "@/assets/redtronic logo.png";

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-8 text-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <img src={logo} alt="Redtronic" className="h-10 mb-6" />
            <p className="text-black/70 text-sm leading-relaxed mb-6">
              Redtronic, a Middle East based company headquartered in Dubai,
              UAE a subsidiary of Weinber Inc. NY, USA which is involved in
              manufacturing of Lubricants, Car Care, Detailing and Surface
              Protective Coating products.
            </p>
             <div className="flex gap-4">
              <a href="https://www.facebook.com/redtronicDXB/"   transition-all  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white hover:bg-primary hover:text-primary-foreground transition-all duration-300"
  >
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/redtronicllc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="https://www.linkedin.com/company/redtronic-llc/"  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Linkedin size={18} />
              </a>
            
              
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Products", "Thinture", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={
                        item === "Home"
                          ? "/"
                          : `/${item.toLowerCase().replace(" ", "-")}`
                      }
                      className="text-black/70 hover:text-black transition-colors duration-300 text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="font-heading text-xl mb-6">Useful Links</h4>
            <ul className="space-y-3">
              {[
                "Automotive PPF",
                "Coatings",
                "Cleaning Products",
                "Detailing",
                "Solutions",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/products"
                    className="text-black/70 hover:text-black transition-colors duration-300 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-xl mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-black mt-1" />
                <span className="text-black/70 text-sm">
                  Ras Al Khor, Industrial Area 1 P.O. Box 118215, Dubai, UAE.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-black" />
                <a
                  href="tel:+97143399550"
                  className="text-black/70 hover:text-black transition-colors text-sm"
                >
                  +971 4 33 99 55 0
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-black" />
                <a
                  href="tel:+971559305208"
                  className="text-black/70 hover:text-black transition-colors text-sm"
                >
                  +971 50 646 9568
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-black" />
                <a
                  href="mailto:business@redtronicllc.com"
                  className="text-black/70 hover:text-black transition-colors text-sm"
                >
                  business@redtronicllc.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-black/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-black/60 text-sm">
              © {new Date().getFullYear()} Redtronic. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                to="/"
                className="text-black/60 hover:text-black transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/"
                className="text-black/60 hover:text-black transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;