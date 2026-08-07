import React from 'react';
import { ChevronRight, MessageCircle, Layers } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/5571981148422?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20de%20produtos.';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-36 lg:pt-44 pb-20 md:pb-28 overflow-hidden bg-[#111111] text-white">
      {/* Subtle glow effect */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#FF2E17]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] font-heading">
              Postes e Estruturas de Concreto <span className="text-[#FF2E17]">Pré-Moldado</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
              Há 60 anos impulsionando a eletrificação e o desenvolvimento da infraestrutura nacional. Fabricante de postes DT e circulares, estruturas para subestações e galpões.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all flex items-center space-x-3 text-base scale-100 hover:scale-[1.02]"
              >
                <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
                <span>Solicitar Orçamento no WhatsApp</span>
                <ChevronRight className="w-5 h-5" />
              </a>

              <a
                href="#produtos"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-7 py-4 rounded-xl backdrop-blur-md transition-all flex items-center space-x-2 text-base"
              >
                <Layers className="w-5 h-5 text-slate-300" />
                <span>Ver Catálogo</span>
              </a>
            </div>

          </div>

          {/* Hero Clean Visual */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900/60 p-2">
              <img 
                src="/POSTE CIRCULAR PARA LINHAS DE SUBTRANSMISSÃO.jpeg" 
                alt="Postes Nordeste - Estruturas de Concreto" 
                className="w-full h-[380px] sm:h-[440px] object-cover rounded-xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
