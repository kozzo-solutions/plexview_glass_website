import { useState } from "react";
import plexViewLogo from "../../assets/plexview-logo.png";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        id="mainHeader"
        className="fixed top-0 w-full z-50 transition-all duration-300"
      >
        <div className="glass">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-center">
              <a href="#hero" className="flex items-center space-x-4">
                <img
                  src={plexViewLogo}
                  alt="PlexView Logo"
                  style={{ height: "150px", width: "auto" }}
                />
              </a>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                <a
                  href="#mission"
                  className="text-base font-medium hover:text-brand transition-colors duration-200"
                >
                  Mission
                </a>
                <a
                  href="#features"
                  className="text-base font-medium hover:text-brand transition-colors duration-200"
                >
                  Fonctionnalités
                </a>
                <a
                  href="#testimonials"
                  className="text-base font-medium hover:text-brand transition-colors duration-200"
                >
                  Témoignages
                </a>
                <a
                  href="#faq"
                  className="text-base font-medium hover:text-brand transition-colors duration-200"
                >
                  FAQ
                </a>
                <a
                  href="#beta"
                  className="bg-brand px-5 py-2 rounded-full text-dark font-semibold text-base hover:bg-brand-light transition-all duration-200 shadow-lg shadow-brand/20"
                >
                  Rejoindre la BETA
                </a>
              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="block md:hidden text-white"
              >
                <i className="fa-solid fa-bars text-xl"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`glass md:hidden absolute w-full py-4 px-6 ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <nav className="flex flex-col space-y-4">
            <a
              href="#mission"
              className="text-sm font-medium hover:text-brand"
              onClick={closeMobileMenu}
            >
              Mission
            </a>
            <a
              href="#features"
              className="text-sm font-medium hover:text-brand"
              onClick={closeMobileMenu}
            >
              Fonctionnalités
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium hover:text-brand"
              onClick={closeMobileMenu}
            >
              Témoignages
            </a>
            <a
              href="#faq"
              className="text-sm font-medium hover:text-brand"
              onClick={closeMobileMenu}
            >
              FAQ
            </a>
            <a
              href="#beta"
              className="bg-brand px-5 py-2 rounded-full text-dark font-semibold text-sm text-center"
              onClick={closeMobileMenu}
            >
              Rejoindre la BETA
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
