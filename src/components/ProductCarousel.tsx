import React, { useState } from 'react';
import { 
  Zap, Warehouse, ShieldAlert, Layers, Building, Factory, 
  ChevronLeft, ChevronRight, Maximize2, X, Check, FileText
} from 'lucide-react';
import { Button } from "@/components/ui/button";

export type ProductCategory = 
  | 'todos'
  | 'postes-subtransmissao' 
  | 'subestacoes-paredes' 
  | 'galpoes' 
  | 'cruzetas' 
  | 'defensas-obras' 
  | 'setor-rural';

export interface ProductItem {
  id: number;
  name: string;
  category: ProductCategory;
  categoryName: string;
  image: string;
  description: string;
  specs: string[];
  homologated: boolean;
}

const ProductCarousel: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProductCategory>('todos');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const products: ProductItem[] = [
    {
      id: 1,
      name: "Poste Circular para Linhas de Subtransmissão (Tipo R)",
      category: 'postes-subtransmissao',
      categoryName: "Eletrificação & Subtransmissão",
      image: "/POSTE CIRCULAR PARA LINHAS DE SUBTRANSMISSÃO.jpeg",
      description: "Postes circulares de concreto protendido e armado projetados para linhas de subtransmissão de alta e média tensão (69kV a 230kV), com máxima resistência mecânica aos ventos e aos esforços longitudinais.",
      specs: ["Comprimentos de 9m a 40m", "Cargas nominais de 300 daN a 5.000 daN", "Homologado ABNT NBR 8451 / Coelba / Equatorial / Energisa"],
      homologated: true
    },
    {
      id: 2,
      name: "Poste Circular de Alta Capacidade para Redes Urbanas e Rurais",
      category: 'postes-subtransmissao',
      categoryName: "Eletrificação & Subtransmissão",
      image: "/POSTE CIRCULAR PARA LINHAS DE SUBTRANSMISSÃO 2.jpeg",
      description: "Estrutura circular cônica pré-moldada ideal para cruzamentos, ancoragem de linhas, iluminação pública pesada e travessias rodoviárias/ferroviárias.",
      specs: ["Acabamento liso de alta estanqueidade", "Cônica contínua ou seção reduzida (RC)", "Resistente a ambientes agressivos e salinos"],
      homologated: true
    },
    {
      id: 3,
      name: "Poste Seção Duplo T (DT) para Linhas de Subtransmissão",
      category: 'postes-subtransmissao',
      categoryName: "Eletrificação & Subtransmissão",
      image: "/POSTE DT  PARA LINHAS DE SUBTRANSMISSÃO.jpeg",
      description: "Poste de seção Duplo T (tipo D e B), referência consagrada nacionalmente pela facilidade de escalada, montagem de cruzetas e elevada rigidez estrutural.",
      specs: ["Padrão concessionárias NBR 8451", "Excelente rigidez ao esforço transversal", "Facilidade de içamento e instalação rápida"],
      homologated: true
    },
    {
      id: 4,
      name: "Estrutura e Equipamentos de Subestação 1",
      category: 'subestacoes-paredes',
      categoryName: "Subestações & Paredes Corta-Fogo",
      image: "/SUBESTAÇÃO 1.jpeg",
      description: "Pórticos, suportes para transformadores, chaves seccionadoras, disjuntores e barramentos pré-moldados para subestações de alta e média tensão.",
      specs: ["Projeto customizado por engenharia civil e elétrica", "Concreto pré-moldado de altíssima resistência (fck >= 45 MPa)", "Ensaios de carga destrutivos e não-destrutivos"],
      homologated: true
    },
    {
      id: 5,
      name: "Estrutura de Subestação de Alta Tensão 2",
      category: 'subestacoes-paredes',
      categoryName: "Subestações & Paredes Corta-Fogo",
      image: "/SUBESTAÇÃO 2.jpeg",
      description: "Suportes e vigas pré-moldadas reforçadas para subestações seccionadoras e subestações industriais de concessionárias e grandes indústrias.",
      specs: ["Durabilidade elevada e zero manutenção pintura", "Resistência ao fogo e intempéries", "Normas ABNT e normas internas de concessionárias"],
      homologated: true
    },
    {
      id: 6,
      name: "Parede Corta-Fogo de Concreto Pré-Moldado",
      category: 'subestacoes-paredes',
      categoryName: "Subestações & Paredes Corta-Fogo",
      image: "/PAREDE CORTA FOGO.jpeg",
      description: "Barreira de contenção térmica de segurança contra incêndios para transformadores de força em subestações de energia elétrica.",
      specs: ["Resistência ao fogo (TRRF 120/180/240 min)", "Painéis de encaixe macho-fêmea de fácil montagem", "Atendimento às normas NBR 13231 e Corpo de Bombeiros"],
      homologated: true
    },
    {
      id: 7,
      name: "Estrutura Pré-Moldada para Galpão Industrial 1",
      category: 'galpoes',
      categoryName: "Galpões Pré-Moldados",
      image: "/ESTRUTURA DE GALPÃO.jpeg",
      description: "Pilares, vigas calha, vigas de cobertura e consoles pré-moldados para rápida montagem de galpões industriais, centros logísticos e comerciais.",
      specs: ["Vãos livres customizáveis até 40m", "Montagem limpa e até 60% mais rápida que alvenaria", "Incombustível e alta capacidade de carga para pontes rolantes"],
      homologated: true
    },
    {
      id: 8,
      name: "Estrutura de Galpão Multipavimento 2",
      category: 'galpoes',
      categoryName: "Galpões Pré-Moldados",
      image: "/ESTRUTURA DE GALPÃO 2.jpeg",
      description: "Estrutura pesada em colunas de concreto com encaixes estruturais para construções industriais, fábricas e depósitos de grande porte.",
      specs: ["Cálculo estrutural avançado", "Concreto fck elevado e armadura de aço nervurado", "Garantia estendida de desempenho de engenharia"],
      homologated: true
    },
    {
      id: 9,
      name: "Estrutura de Galpão de Grande Porte 3",
      category: 'galpoes',
      categoryName: "Galpões Pré-Moldados",
      image: "/ESTRUTURA DE GALPÃO 3.jpeg",
      description: "Sistema estrutural de pilares e tesouras de pré-moldado com precisão milimétrica de encaixe para coberturas metálicas ou de concreto.",
      specs: ["Diminuição drástica de resíduos de canteiro de obras", "Solução completa: fundação ao topo", "Projeto fornecido chave na mão ou em peças"],
      homologated: true
    },
    {
      id: 10,
      name: "Estrutura Prédio e Galpão Industrial 4",
      category: 'galpoes',
      categoryName: "Galpões Pré-Moldados",
      image: "/ESTRUTURA DE GALPÃO 4.jpeg",
      description: "Pilares com travamento vertical e horizontal para múltiplos pavimentos e grandes mezeninos operacionais.",
      specs: ["Elevada inércia química contra corrosão", "Compatível com fechamento em painéis alveolares ou placas", "Projeto conforme NBR 9062"],
      homologated: true
    },
    {
      id: 11,
      name: "Estrutura de Galpão Pré-Fabricado 5",
      category: 'galpoes',
      categoryName: "Galpões Pré-Moldados",
      image: "/ESTRUTURA DE GALPÃO 5.jpeg",
      description: "Pilares e travamentos pré-moldados para galpões agrícolas, estábulos industriais, hangares e garagens de frotas.",
      specs: ["Execução rápida e econômica", "Baixa necessidade de manutenção", "Resistência estrutural comprovada"],
      homologated: true
    },
    {
      id: 12,
      name: "Defensa Viária / Barreira New Jersey em Concreto",
      category: 'defensas-obras',
      categoryName: "Defensas & Infraestrutura",
      image: "/DEFENSA.jpeg",
      description: "Barreiras de segurança viária de concreto para rodovias, vias urbanas, canteiros centrais e contenções estruturais de tráfego pesado.",
      specs: ["Concreto de alto desempenho resistente a impactos", "Perfil New Jersey simples ou duplo", "Atendimento às normas do DNIT e concessionárias rodoviárias"],
      homologated: true
    },
    {
      id: 13,
      name: "Cruzetas de Concreto Armado para Redes Aéreas",
      category: 'cruzetas',
      categoryName: "Cruzetas & Redes Aéreas",
      image: "/cruzeta1.jpg",
      description: "Cruzetas retangulares e trapezoidais para suporte de isoladores e condutores em redes de distribuição urbana e rural de energia.",
      specs: ["Comprimentos normatizados (2.000mm, 2.400mm)", "Inspeção e ensaio de flexão individual", "Padronização Coelba/Celpe/Equatorial"],
      homologated: true
    },
    {
      id: 14,
      name: "Cruzetas de Ancoragem e Transmissão",
      category: 'cruzetas',
      categoryName: "Cruzetas & Redes Aéreas",
      image: "/cruzeta2.jpg",
      description: "Cruzetas de concreto reforçadas para pontos de ancoragem e finais de linha em redes aéreas de média tensão.",
      specs: ["Alta durabilidade sem degradação UV", "Furação padronizada para ferragens e isoladores", "Homologada em 100% dos estados do Nordeste"],
      homologated: true
    }
  ];

  const categories = [
    { id: 'todos', name: "Todos os Produtos", icon: <Layers className="w-4 h-4" /> },
    { id: 'postes-subtransmissao', name: "Postes DT & Circulares", icon: <Zap className="w-4 h-4" /> },
    { id: 'subestacoes-paredes', name: "Subestações & Parede Corta-Fogo", icon: <Factory className="w-4 h-4" /> },
    { id: 'galpoes', name: "Galpões Pré-Moldados", icon: <Warehouse className="w-4 h-4" /> },
    { id: 'defensas-obras', name: "Defensas & Barreira Viária", icon: <ShieldAlert className="w-4 h-4" /> },
    { id: 'cruzetas', name: "Cruzetas & Acessórios", icon: <Building className="w-4 h-4" /> },
  ];

  const filteredProducts = activeFilter === 'todos' 
    ? products 
    : products.filter(p => p.category === activeFilter);

  return (
    <div className="space-y-8">
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id as ProductCategory)}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-heading text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeFilter === cat.id
                ? "bg-postes-red text-white shadow-md shadow-postes-red/30 scale-[1.02]"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            {cat.icon}
            <span>{cat.name}</span>
          </button>
        ))}
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-postes-red/50 transition-all duration-300 flex flex-col group"
          >
            {/* Product Image Container */}
            <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Category Badge */}
              <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full border border-slate-700/60">
                {product.categoryName}
              </div>

              {/* Zoom Action Button */}
              <button
                onClick={() => setSelectedProduct(product)}
                className="absolute bottom-3 right-3 bg-white/90 hover:bg-postes-red text-slate-900 hover:text-white p-2.5 rounded-xl shadow-lg transition-colors backdrop-blur-md"
                title="Ver detalhes técnicos"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

            {/* Product Text Content */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-slate-900 font-heading group-hover:text-postes-red transition-colors line-clamp-2">
                  {product.name}
                </h4>
                <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                  {product.description}
                </p>
              </div>

              {/* Specs Highlights */}
              <div className="space-y-1.5 pt-3 border-t border-slate-100">
                {product.specs.slice(0, 2).map((spec, idx) => (
                  <div key={idx} className="flex items-center text-[11px] text-slate-700">
                    <Check className="w-3.5 h-3.5 text-postes-red mr-1.5 flex-shrink-0" />
                    <span className="truncate">{spec}</span>
                  </div>
                ))}
              </div>

              {/* Card Footer Button */}
              <button
                onClick={() => setSelectedProduct(product)}
                className="w-full mt-2 bg-slate-50 hover:bg-postes-red hover:text-white text-slate-800 border border-slate-200 hover:border-postes-red font-heading text-xs font-bold py-2.5 px-4 rounded-xl transition-all flex items-center justify-center space-x-2"
              >
                <FileText className="w-4 h-4" />
                <span>Especificações Técnicas</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in-up">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative p-6 md:p-8">
            
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 bg-slate-100 hover:bg-postes-red text-slate-700 hover:text-white p-2 rounded-full transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* High-res Image */}
              <div className="space-y-3">
                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name} 
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>
                <span className="inline-block bg-postes-red/10 text-postes-red font-bold text-xs px-3 py-1 rounded-full">
                  {selectedProduct.categoryName}
                </span>
              </div>

              {/* Detailed Specs */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold font-heading text-slate-900 mb-2">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {selectedProduct.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider font-heading">
                    Ficha Técnica & Destaques de Engenharia
                  </h4>
                  <ul className="space-y-2">
                    {selectedProduct.specs.map((spec, i) => (
                      <li key={i} className="flex items-start text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                        <Check className="w-4 h-4 text-postes-red mr-2 mt-0.5 flex-shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
                  <a
                    href="#contato"
                    onClick={() => setSelectedProduct(null)}
                    className="flex-1 bg-postes-red hover:bg-postes-red-dark text-white font-bold py-3 px-4 rounded-xl text-center text-sm shadow-md transition-colors"
                  >
                    Solicitar Cotação
                  </a>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-3 px-4 rounded-xl text-sm transition-colors"
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCarousel;
