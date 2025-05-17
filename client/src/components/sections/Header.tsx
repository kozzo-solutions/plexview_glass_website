import { useState } from "react";
import { useTranslation } from "react-i18next";
import plexioLogo from "../../assets/plexio-logo.png";

export default function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

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
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <a href="#hero" className="flex items-center">
                <div className="flex items-center">
                  <img
                    src={plexioLogo}
                    alt="Plexio Logo"
                    style={{ height: "100px", width: "auto" }}
                  />
                </div>
              </a>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                <a
                  href="#mission"
                  className="text-sm font-medium hover:text-brand transition-colors duration-200"
                >
                  Mission
                </a>
                <a
                  href="#features"
                  className="text-sm font-medium hover:text-brand transition-colors duration-200"
                >
                  Fonctionnalités
                </a>
                <a
                  href="#faq"
                  className="text-sm font-medium hover:text-brand transition-colors duration-200"
                >
                  FAQ
                </a>
                <button
                  onClick={() =>
                    changeLanguage(i18n.language === "fr" ? "en" : "fr")
                  }
                  className="ml-4 px-3 py-1 rounded bg-gray-200 text-gray-800 font-medium hover:bg-brand transition-colors duration-200"
                >
                  {t("toggle")}
                </button>
                <a
                  href="#beta"
                  className="bg-brand px-5 py-2 rounded-full text-dark font-semibold text-sm hover:bg-brand-light transition-all duration-200 shadow-lg shadow-brand/20"
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
              href="#faq"
              className="text-sm font-medium hover:text-brand"
              onClick={closeMobileMenu}
            >
              FAQ
            </a>
            <button
              onClick={() => {
                changeLanguage(i18n.language === "fr" ? "en" : "fr");
                closeMobileMenu();
              }}
              className="px-3 py-1 rounded bg-gray-200 text-gray-800 font-medium hover:bg-brand transition-colors duration-200"
            >
              {t("toggle")}
            </button>
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
