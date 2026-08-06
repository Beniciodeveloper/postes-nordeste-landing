import React from 'react';
import { ShieldCheck, ChevronRight, Award, Zap, Factory, CheckCircle2, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 lg:pt-40 pb-20 md:pb-28 overflow-hidden bg-slate-900 text-white dark-industrial-bg">
      {/* Dynamic background glow effects */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-postes-red/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Top Corporate Badge */}
            <div className="inline-flex items-center space-x-2 bg-slate-800/80 border border-slate-700/80 rounded-full px-4 py-2 text-xs font-semibold text-slate-200 backdrop-blur-md shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-postes-red animate-pulse"></span>
              <span className="text-amber-400 font-bold">Desde 16 de Novembro de 1965</span>
              <span className="text-slate-500">•</span>
              <span>Liderança em Concreto Pré-Moldado</span>
            </div>

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
                href="#produtos"
                className="bg-postes-red hover:bg-postes-red-dark text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-glow-red transition-all flex items-center space-x-3 text-base group"
              >
                <span>Conheça o Catálogo</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#qualidade"
                className="bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold px-7 py-4 rounded-xl backdrop-blur-md transition-all flex items-center space-x-2.5 text-base"
              >
                <Award className="w-5 h-5 text-amber-400" />
                <span>ISO 9001 & Qualidade</span>
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
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 bg-slate-800/70 border border-slate-700/80 backdrop-blur-md rounded-2xl p-6 md:p-8 text-center">
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
