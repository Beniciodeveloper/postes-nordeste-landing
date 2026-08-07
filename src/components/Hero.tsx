import React from 'react';
import { ChevronRight, Award, Zap, CheckCircle2, MessageCircle } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/5571981148422?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20de%20produtos.';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 lg:pt-40 pb-20 md:pb-28 overflow-hidden bg-[#111111] text-white">
      {/* Brand glow effects */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#FF2E17]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FF2E17]/8 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-8">
            
          

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] font-heading">
              Infraestrutura de <span className="text-gradient-red">Alta Resistência</span> para Energia & Construção
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
              Há 60 anos impulsionando a eletrificação e o desenvolvimento no Norte e Nordeste. 
              Fabricante especializada de <strong className="text-white font-medium">postes de concreto DT e circular</strong>, 
              estruturas de subestações, paredes corta-fogo e <strong className="text-white font-medium">galpões pré-moldados</strong>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all flex items-center space-x-3 text-base group scale-100 hover:scale-[1.02]"
              >
                <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
                <span>Solicitar Orçamento no WhatsApp</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#produtos"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-7 py-4 rounded-xl backdrop-blur-md transition-all flex items-center space-x-2.5 text-base"
              >
                <Award className="w-5 h-5 text-amber-400" />
                <span>Ver Catálogo</span>
              </a>
            </div>

            {/* Key Trust Signals */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-postes-red flex-shrink-0" />
                <span>5+ Parques Fabris</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-postes-red flex-shrink-0" />
                <span>100% Homologada</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-postes-red flex-shrink-0" />
                <span>Normas NBR / ABNT</span>
              </div>
            </div>

          </div>

          {/* Hero Visual Card / Photo Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/60 bg-slate-800/50 backdrop-blur-md p-2 group">
              <img 
                src="/POSTE CIRCULAR PARA LINHAS DE SUBTRANSMISSÃO.jpeg" 
                alt="Poste Circular para Linhas de Subtransmissão Postes Nordeste" 
                className="w-full h-[400px] sm:h-[480px] object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent rounded-xl"></div>
              
              {/* Overlay Content Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 p-5 rounded-xl text-white shadow-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-postes-red uppercase tracking-wider">Estrutura de Subtransmissão</span>
                  <span className="bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-bold px-2 py-0.5 rounded">Alta Tensão</span>
                </div>
                <h3 className="font-bold text-lg font-heading text-white">
                  Poste Circular de Alta Capacidade
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Projetados para redes de distribuição, transmissão e subestações em todas as concessionárias do país.
                </p>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -top-6 -right-6 hidden sm:flex items-center space-x-3 bg-white text-slate-900 p-4 rounded-xl shadow-2xl border border-slate-200 animate-float">
              <div className="bg-postes-red/10 p-3 rounded-lg text-postes-red">
                <Zap className="w-7 h-7" />
              </div>
              <div>
                <p className="text-2xl font-extrabold font-heading text-postes-red">60+ Anos</p>
                <p className="text-xs font-medium text-slate-600">Tradição & Inovação</p>
              </div>
            </div>
          </div>

        </div>

        {/* Stats Counter Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 text-center">
          <div className="space-y-1">
            <p className="text-3xl md:text-4xl font-extrabold font-heading text-white">1965</p>
            <p className="text-xs md:text-sm text-slate-400 font-medium">Ano de Fundação</p>
          </div>
          <div className="space-y-1 border-l border-slate-700/80">
            <p className="text-3xl md:text-4xl font-extrabold font-heading text-postes-red">5+</p>
            <p className="text-xs md:text-sm text-slate-400 font-medium">Unidades & Filiais</p>
          </div>
          <div className="space-y-1 border-l border-slate-700/80">
            <p className="text-3xl md:text-4xl font-extrabold font-heading text-amber-400">100%</p>
            <p className="text-xs md:text-sm text-slate-400 font-medium">ISO 9001 Certificada</p>
          </div>
          <div className="space-y-1 border-l border-slate-700/80">
            <p className="text-3xl md:text-4xl font-extrabold font-heading text-white">100%</p>
            <p className="text-xs md:text-sm text-slate-400 font-medium">Atendimento Nordeste & Brasil</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
