import React from 'react';
import { Mail, Phone, MapPin, Award, ExternalLink, ShieldCheck, Lock, ChevronRight, Instagram } from 'lucide-react';

interface FooterProps {
  onOpenWebmail?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenWebmail }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 pt-16 pb-8 text-sm">
      <div className="container mx-auto px-4">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Company Brand Column */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#" className="inline-block">
              <img 
                src="/Logo_PostesNordeste_logo.png" 
                alt="Logo Postes Nordeste" 
                className="h-14 md:h-16 w-auto object-contain brightness-0 invert"
              />
            </a>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Fundada em 16 de novembro de 1965. Liderança e referência técnica na fabricação de postes de concreto, estruturas para subestações, galpões pré-moldados e soluções rurais.
            </p>

            <div className="flex items-center gap-4">
              <div className="flex items-center space-x-3 text-xs bg-slate-900 border border-slate-800 p-3 rounded-xl w-fit">
                <Award className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <div>
                  <p className="font-bold text-white">Certificação ISO 9001</p>
                  <p className="text-[11px] text-slate-400">Sistema de Gestão da Qualidade</p>
                </div>
              </div>

              <a
                href="https://www.instagram.com/postesnordeste/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-slate-900 hover:bg-[#E1306C] text-slate-300 hover:text-white border border-slate-800 px-3.5 py-3 rounded-xl transition-all text-xs font-semibold"
                title="Siga a Postes Nordeste no Instagram"
              >
                <Instagram className="w-5 h-5 text-[#E1306C] group-hover:text-white" />
                <span className="hidden sm:inline">Instagram</span>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-bold text-white font-heading text-sm uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#sobre" className="hover:text-[#FF2E17] transition-colors flex items-center gap-1"><ChevronRight className="w-3 h-3 text-[#FF2E17]" /> Nossa História</a></li>
              <li><a href="#produtos" className="hover:text-[#FF2E17] transition-colors flex items-center gap-1"><ChevronRight className="w-3 h-3 text-[#FF2E17]" /> Catálogo de Produtos</a></li>
              <li><a href="#qualidade" className="hover:text-[#FF2E17] transition-colors flex items-center gap-1"><ChevronRight className="w-3 h-3 text-[#FF2E17]" /> Qualidade ISO 9001</a></li>
              <li><a href="#financiamento" className="hover:text-[#FF2E17] transition-colors flex items-center gap-1"><ChevronRight className="w-3 h-3 text-[#FF2E17]" /> Financiamento BNDES</a></li>
              <li><a href="#clientes" className="hover:text-[#FF2E17] transition-colors flex items-center gap-1"><ChevronRight className="w-3 h-3 text-[#FF2E17]" /> Concessionárias</a></li>
              <li><a href="#contato" className="hover:text-[#FF2E17] transition-colors flex items-center gap-1"><ChevronRight className="w-3 h-3 text-[#FF2E17]" /> Nossas Unidades</a></li>
            </ul>
          </div>

          {/* Governance & Policies Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-bold text-white font-heading text-sm uppercase tracking-wider flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-[#FF2E17]" />
              <span>Governança & LGPD</span>
            </h4>
            <ul className="space-y-2 text-xs">
              <li><span className="text-slate-400">Código de Ética e Conduta</span></li>
              <li><span className="text-slate-400">Política Contra Corrupção</span></li>
              <li><span className="text-slate-400">Política de Proteção de Dados (LGPD)</span></li>
              <li><span className="text-slate-400">Política de Mudanças Climáticas</span></li>
              <li><span className="text-slate-400">Combate ao Assédio</span></li>
              <li><span className="text-slate-400">Compras Sustentáveis</span></li>
            </ul>
          </div>

          {/* Webmail & Access Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-bold text-white font-heading text-sm uppercase tracking-wider">
              Acesso Corporativo
            </h4>
            
            <p className="text-xs text-slate-400">
              Portal de e-mail e sistemas internos para colaboradores Postes Nordeste.
            </p>

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
              className="inline-flex items-center space-x-2 bg-slate-900 hover:bg-[#FF2E17] text-white px-4 py-2.5 rounded-xl border border-slate-800 hover:border-[#FF2E17] transition-all text-xs font-semibold"
            >
              <Mail className="w-4 h-4 text-[#FF2E17] group-hover:text-white" />
              <span>Acessar Webmail Corporativo</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
            </a>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p className="font-semibold text-slate-300">Atendimento Matriz Salvador (CIA):</p>
              <p>Segunda a Sexta, das 07:30 às 17:30</p>
              <p className="text-slate-300 font-medium">(71) 3413-8422</p>
            </div>
          </div>

        </div>

        {/* Copyright Footer Sub-bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Postes Nordeste S.A. Todos os direitos reservados. CNPJ Matriz Salvador / CIA.</p>
          <div className="flex items-center space-x-6">
            <span className="text-slate-400">Termos de Uso</span>
            <span className="text-slate-400">Política de Privacidade</span>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open_cookie_banner'))} 
              className="text-slate-300 hover:text-white underline font-semibold transition-colors"
            >
              Cookies (LGPD)
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
