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

        {/* Dynamic Interactive Product Carousel */}
        <ProductCarousel />

      </div>
    </section>
  );
};

export default Products;
