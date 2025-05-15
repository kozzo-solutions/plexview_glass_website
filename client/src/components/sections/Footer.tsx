import plexioLogo from "../../assets/plexio-logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-deeper border-t border-white/10 py-12 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <img src={plexioLogo} alt="Plexio Logo" className="h-8 mb-2" />
            </div>
            <p className="text-gray-400 mt-2">La gestion immobilière réinventée</p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-brand transition-colors">
              <i className="fa-brands fa-linkedin text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-brand transition-colors">
              <i className="fa-brands fa-twitter text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-brand transition-colors">
              <i className="fa-brands fa-instagram text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-brand transition-colors">
              <i className="fa-brands fa-facebook text-xl"></i>
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 my-8"></div>
        
        <div className="flex flex-col md:flex-row justify-between">
          <nav className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 mb-6 md:mb-0">
            <a href="#mission" className="text-sm text-gray-400 hover:text-brand">Mission</a>
            <a href="#features" className="text-sm text-gray-400 hover:text-brand">Fonctionnalités</a>
            <a href="#testimonials" className="text-sm text-gray-400 hover:text-brand">Témoignages</a>
            <a href="#faq" className="text-sm text-gray-400 hover:text-brand">FAQ</a>
            <a href="#beta" className="text-sm text-gray-400 hover:text-brand">Rejoindre la BETA</a>
          </nav>
          
          <div className="text-sm text-gray-500">
            &copy; {currentYear} Plexio. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
}
