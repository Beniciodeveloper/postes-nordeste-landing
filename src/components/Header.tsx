
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl font-bold text-postes-red">
            <span className="font-black">POSTES</span> NORDESTE S.A.
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#sobre" className="text-postes-gray-dark hover:text-postes-red font-medium transition-colors">
            Sobre
          </a>
          <a href="#produtos" className="text-postes-gray-dark hover:text-postes-red font-medium transition-colors">
            Produtos
          </a>
          <a href="#clientes" className="text-postes-gray-dark hover:text-postes-red font-medium transition-colors">
            Clientes
          </a>
          <a href="#contato" className="text-postes-gray-dark hover:text-postes-red font-medium transition-colors">
            Contato
          </a>
          <Button>
            Solicite um orçamento
          </Button>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-postes-gray-dark p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white z-40 p-4">
          <nav className="flex flex-col space-y-6 items-center pt-8">
            <a 
              href="#sobre" 
              className="text-xl text-postes-gray-dark hover:text-postes-red font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre
            </a>
            <a 
              href="#produtos" 
              className="text-xl text-postes-gray-dark hover:text-postes-red font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Produtos
            </a>
            <a 
              href="#clientes" 
              className="text-xl text-postes-gray-dark hover:text-postes-red font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Clientes
            </a>
            <a 
              href="#contato" 
              className="text-xl text-postes-gray-dark hover:text-postes-red font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contato
            </a>
            <Button 
              onClick={() => {
                setMobileMenuOpen(false);
                const contactSection = document.getElementById('contato');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Solicite um orçamento
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
