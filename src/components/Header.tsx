import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-24">
          <img 
            src="./POSTES E GALPÕES NORDESTE.webp" 
            alt="Logo Postes Nordeste" 
            className="w-40 sm:w-44 md:w-48"
          />
          
          {/* Mobile menu button */}
          <button 
            className="text-postes-gray-dark p-2 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#sobre" className="text-postes-gray-dark hover:text-postes-red font-medium">
              Sobre
            </a>
            <a href="#produtos" className="text-postes-gray-dark hover:text-postes-red font-medium">
              Produtos
            </a>
            <a href="#clientes" className="text-postes-gray-dark hover:text-postes-red font-medium">
              Clientes
            </a>
            <a href="#contato" className="text-postes-gray-dark hover:text-postes-red font-medium">
              Contato
            </a>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="flex flex-col space-y-4 p-4">
              <a 
                href="#sobre" 
                className="text-postes-gray-dark hover:text-postes-red font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sobre
              </a>
              <a 
                href="#produtos" 
                className="text-postes-gray-dark hover:text-postes-red font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Produtos
              </a>
              <a 
                href="#clientes" 
                className="text-postes-gray-dark hover:text-postes-red font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Clientes
              </a>
              <a 
                href="#contato" 
                className="text-postes-gray-dark hover:text-postes-red font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contato
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
