import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, Award, ChevronRight, ExternalLink, MessageCircle } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/5571981148422?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20de%20produtos.';

interface HeaderProps {
  onOpenWebmail?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenWebmail }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#sobre', label: 'Nossa História' },
    { href: '#produtos', label: 'Produtos' },
    { href: '#qualidade', label: 'ISO 9001' },
    { href: '#governanca', label: 'Governança' },
    { href: '#clientes', label: 'Clientes' },
    { href: '#contato', label: 'Unidades' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#1a1a1a] text-slate-300 text-xs py-2 hidden sm:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#FF2E17]" />
              <span>Matriz Salvador (CIA): (71) 3413-8422</span>
            </div>
            <div className="flex items-center gap-1.5 text-amber-300">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-medium">Certificada ISO 9001</span>
            </div>
          </div>
          <a
            href="https://webmail.postesnordeste.com.br"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => { if (onOpenWebmail) { e.preventDefault(); onOpenWebmail(); } }}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#FF2E17]" />
            <span>Webmail</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <div className={`transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-white border-b border-slate-100'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center h-16">

          {/* Logo */}
          <a href="#" className="flex items-center shrink-0">
            <img
              src="/Logo_PostesNordeste_logo.png"
              alt="Postes Nordeste"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-700">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="hover:text-[#FF2E17] transition-colors whitespace-nowrap">
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-[#FF2E17] hover:bg-[#d42512] text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Solicitar Orçamento</span>
            </a>

            <button
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="py-3 px-2 text-slate-800 hover:text-[#FF2E17] font-medium border-b border-slate-50 flex justify-between items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-2">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#FF2E17] text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <MessageCircle className="w-4 h-4" />
                  Falar com Departamento Comercial
                </a>
                <a
                  href="https://webmail.postesnordeste.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-slate-900 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 text-sm"
                  onClick={() => { setMobileMenuOpen(false); onOpenWebmail?.(); }}
                >
                  <Mail className="w-4 h-4 text-[#FF2E17]" />
                  Acessar Webmail
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
