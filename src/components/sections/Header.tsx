import { useState } from "react";
import { useTranslation } from "react-i18next";
import plexViewLogo from "../../assets/plexview-logo.png";

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
              <nav className="hidden lg:flex items-center space-x-8">
                <a
                  href="#mission"
                  className="text-base font-medium hover:text-brand transition-colors duration-200"
                >
                  {t("header.mission")}
                </a>
                <a
                  href="#features"
                  className="text-base font-medium hover:text-brand transition-colors duration-200"
                >
                  {t("header.features")}
                </a>
                <a
                  href="#faq"
                  className="text-base font-medium hover:text-brand transition-colors duration-200"
                >
                  {t("header.faq")}
                </a>
                <button
                  onClick={() =>
                    changeLanguage(i18n.language === "fr" ? "en" : "fr")
                  }
                  className="ml-4 font-bold text-white hover:text-brand transition-colors duration-200 bg-transparent px-3 py-1 rounded shadow-none"
                >
                  {t("header.toggle")}
                </button>
                <a
                  href="#beta"
                  className="bg-brand px-5 py-2 rounded-full text-dark font-semibold text-base hover:bg-brand-light transition-all duration-200 shadow-lg shadow-brand/20"
                >
                  {t("header.join_beta")}
                </a>
              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="block lg:hidden text-white"
              >
                <i className="fa-solid fa-bars text-xl"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`glass lg:hidden absolute w-full py-4 px-6 ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <nav className="flex flex-col space-y-4">
            <a
              href="#mission"
              className="text-sm font-medium hover:text-brand"
              onClick={closeMobileMenu}
            >
              {t("header.mission")}
            </a>
            <a
              href="#features"
              className="text-sm font-medium hover:text-brand"
              onClick={closeMobileMenu}
            >
              {t("header.features")}
            </a>
            <a
              href="#faq"
              className="text-sm font-medium hover:text-brand"
              onClick={closeMobileMenu}
            >
              {t("header.faq")}
            </a>
            <button
              onClick={() => {
                changeLanguage(i18n.language === "fr" ? "en" : "fr");
                closeMobileMenu();
              }}
              className="w-min font-bold text-white hover:text-brand transition-colors duration-200 bg-transparent py-1 rounded shadow-none"
            >
              {t("header.toggle")}
            </button>
            <a
              href="#beta"
              className="bg-brand px-5 py-2 rounded-full text-dark font-semibold text-sm text-center"
              onClick={closeMobileMenu}
            >
              {t("header.join_beta")}
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
