import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Mail, Phone, ShieldCheck, ChevronRight, 
  FileText, ExternalLink, Award, Building2, Lock
} from 'lucide-react';

interface HeaderProps {
  onOpenWebmail?: () => void;
  onOpenPolicyModal?: (policyId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenWebmail, onOpenPolicyModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Institutional Bar */}
      <div className="bg-postes-navy text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="container mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-postes-red" />
              <span>Matriz Salvador (CIA): (71) 3413-8422</span>
            </div>
            <div className="hidden sm:flex items-center space-x-1.5 hover:text-white transition-colors">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-medium text-amber-300">Certificada ISO 9001</span>
            </div>
          </div>

          <div className="flex items-center space-x-5">
            {/* Direct Webmail Link */}
            <a
              href="https://webmail.postesnordeste.com.br"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                if (onOpenWebmail) {
                  e.preventDefault();
                  onOpenWebmail();
                }
              }}
              className="flex items-center space-x-1.5 bg-slate-800 hover:bg-postes-red text-white px-2.5 py-1 rounded transition-colors font-medium text-xs border border-slate-700 hover:border-postes-red"
              title="Acessar sistema de Webmail corporativo"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Acessar Webmail</span>
              <ExternalLink className="w-3 h-3 opacity-75" />
            </a>

            <a 
              href="#governanca" 
              className="hidden md:flex items-center space-x-1 hover:text-postes-red transition-colors"
            >
              <Lock className="w-3.5 h-3.5 text-postes-red" />
              <span>Compliance & Governança</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Navbar */}
      <div className={`transition-all duration-300 ${scrolled ? 'glass-header shadow-md py-3' : 'bg-white/95 backdrop-blur-md py-4 border-b border-slate-100'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <img 
              src="/Logo_PostesNordeste_logo.png" 
              alt="Logo Postes Nordeste - Pré-Fabricados em Concreto" 
              className="h-12 md:h-14 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 font-heading text-sm font-medium">
            <a href="#sobre" className="text-slate-700 hover:text-postes-red transition-colors">
              Nossa História
            </a>
            <a href="#produtos" className="text-slate-700 hover:text-postes-red transition-colors">
              Catálogo de Produtos
            </a>
            <a href="#qualidade" className="text-slate-700 hover:text-postes-red transition-colors flex items-center gap-1">
              <span>Qualidade ISO 9001</span>
            </a>
            <a href="#governanca" className="text-slate-700 hover:text-postes-red transition-colors">
              Políticas & Ética
            </a>
            <a href="#financiamento" className="text-slate-700 hover:text-postes-red transition-colors">
              Financiamento & Mercado
            </a>
            <a href="#clientes" className="text-slate-700 hover:text-postes-red transition-colors">
              Clientes
            </a>
            <a href="#contato" className="text-slate-700 hover:text-postes-red transition-colors">
              Unidades
            </a>
          </nav>

          {/* Action Button */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="#contato"
              className="bg-postes-red hover:bg-postes-red-dark text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-md hover:shadow-glow-red transition-all flex items-center space-x-2"
            >
              <span>Solicitar Orçamento</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="text-slate-800 p-2 lg:hidden rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl animate-fade-in-up">
            <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              <a 
                href="#sobre" 
                className="text-slate-800 hover:text-postes-red font-medium py-2 border-b border-slate-100 flex justify-between items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Nossa História (1965)</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
              <a 
                href="#produtos" 
                className="text-slate-800 hover:text-postes-red font-medium py-2 border-b border-slate-100 flex justify-between items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Catálogo de Produtos & Galpões</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
              <a 
                href="#qualidade" 
                className="text-slate-800 hover:text-postes-red font-medium py-2 border-b border-slate-100 flex justify-between items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-500" />
                  Certificação ISO 9001
                </span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
              <a 
                href="#governanca" 
                className="text-slate-800 hover:text-postes-red font-medium py-2 border-b border-slate-100 flex justify-between items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Governança & 6 Políticas</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
              <a 
                href="#financiamento" 
                className="text-slate-800 hover:text-postes-red font-medium py-2 border-b border-slate-100 flex justify-between items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Financiamento & Mercado</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
              <a 
                href="#clientes" 
                className="text-slate-800 hover:text-postes-red font-medium py-2 border-b border-slate-100 flex justify-between items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Clientes & Homologações</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
              <a 
                href="#contato" 
                className="text-slate-800 hover:text-postes-red font-medium py-2 flex justify-between items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Unidades & Contato</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>

              <div className="pt-4 flex flex-col space-y-3">
                <a
                  href="https://webmail.postesnordeste.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-slate-800 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center space-x-2 text-sm"
                >
                  <Mail className="w-4 h-4 text-postes-red" />
                  <span>Acessar Webmail Corporativo</span>
                </a>
                <a
                  href="#contato"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full bg-postes-red text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center space-x-2 text-sm shadow-md"
                >
                  <span>Falar com Departamento Comercial</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
