import React from 'react';
import { ChevronRight, MessageCircle, Layers } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/5571981148422?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20de%20produtos.';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[85vh] pt-36 lg:pt-48 pb-24 flex items-center overflow-hidden bg-slate-950 text-white">
      {/* Background Images with Responsive Switch */}
      {/* Desktop Background */}
      <div className="hidden md:block absolute inset-0 z-0">
        <img
          src="/c56e2845-616e-4703-8d15-cdb6ad1a4154.png"
          alt="Postes Nordeste Fábrica e Parque Fabril"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Mobile Background */}
      <div className="block md:hidden absolute inset-0 z-0">
        <img
          src="/f4200575-2236-407a-ab47-ca2e03c75c7c.png"
          alt="Postes Nordeste Fábrica e Parque Fabril Mobile"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Dark Overlay for Text Visibility */}
      <div className="absolute inset-0 z-[1] bg-slate-950/75 md:bg-gradient-to-r md:from-slate-950/90 md:via-slate-950/75 md:to-slate-950/40"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl space-y-6">
          
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] font-heading">
            Postes e Estruturas de Concreto <span className="text-[#FF2E17]">Pré-Moldado</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl font-light leading-relaxed drop-shadow-sm">
            Há 60 anos impulsionando a eletrificação e o desenvolvimento da infraestrutura nacional. Fabricante de postes DT e circulares, estruturas para subestações e galpões.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-8 py-4 rounded-xl shadow-xl transition-all flex items-center space-x-3 text-base scale-100 hover:scale-[1.02]"
            >
              <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
              <span>Solicitar Orçamento no WhatsApp</span>
              <ChevronRight className="w-5 h-5" />
            </a>

            <a
              href="#produtos"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold px-7 py-4 rounded-xl backdrop-blur-md transition-all flex items-center space-x-2 text-base shadow-lg"
            >
              <Layers className="w-5 h-5 text-slate-200" />
              <span>Ver Catálogo</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
