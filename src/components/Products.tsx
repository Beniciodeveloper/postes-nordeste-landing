import React from 'react';
import { Zap, Factory, Warehouse, ShieldAlert, CheckCircle2, FileDown } from 'lucide-react';
import ProductCarousel from './ProductCarousel';

const Products: React.FC = () => {
  return (
    <section id="produtos" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="container mx-auto px-4">
        
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-postes-red/10 border border-postes-red/20 text-postes-red px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            <span>Portfólio Completo de Soluções</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
            Catálogo de <span className="text-postes-red">Produtos e Estruturas</span>
          </h2>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Desenvolvidos em conformidade com as normas ABNT/NBR e homologados nas principais concessionárias de energia do Brasil.
          </p>
        </div>

        {/* Product Grid Summary Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-postes-red/10 w-12 h-12 rounded-xl flex items-center justify-center text-postes-red mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading text-slate-900 mb-2">Setor de Eletrificação</h3>
            <p className="text-slate-600 text-sm mb-4 leading-relaxed">
              Postes DT, circulares (tipo R e RC), cruzetas, anéis, vigas e pórticos para redes de distribuição, linhas de subtransmissão e subestações.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700">
              <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-postes-red mr-2" /> Redes Urbanas e Rurais</li>
              <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-postes-red mr-2" /> Subestações de Alta Tensão</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-postes-navy/10 w-12 h-12 rounded-xl flex items-center justify-center text-postes-navy mb-4">
              <Warehouse className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading text-slate-900 mb-2">Galpões Pré-Moldados</h3>
            <p className="text-slate-600 text-sm mb-4 leading-relaxed">
              Uma das empresas mais atuantes do mercado em estruturas de concreto pré-fabricado para galpões industriais, comerciais e agronegócio.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700">
              <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-postes-red mr-2" /> Vãos livres até 40 metros</li>
              <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-postes-red mr-2" /> Execução ágil e limpa</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-amber-500/10 w-12 h-12 rounded-xl flex items-center justify-center text-amber-600 mb-4">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading text-slate-900 mb-2">Defensas & Paredes Corta-Fogo</h3>
            <p className="text-slate-600 text-sm mb-4 leading-relaxed">
              Paredes de contenção térmica para transformadores de força em subestações e defensas viárias do tipo New Jersey para rodovias.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700">
              <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-postes-red mr-2" /> Isolamento térmico de segurança</li>
              <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-postes-red mr-2" /> Padrão DNIT / Bombeiros</li>
            </ul>
          </div>
        </div>

        {/* Dynamic Interactive Product Carousel */}
        <ProductCarousel />

      </div>
    </section>
  );
};

export default Products;
