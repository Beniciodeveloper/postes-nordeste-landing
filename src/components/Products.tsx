import { Factory, Building, Zap, Power, Lightbulb, Warehouse, Anchor, Home, Blocks, Wrench } from 'lucide-react';
import ProductCarousel from './ProductCarousel';

const Products = () => {
  const products = [
    {
      icon: <Zap className="w-5 h-5 text-postes-red" />,
      name: "Postes DT e circulares",
      category: "Eletrificação"
    },
    {
      icon: <Power className="w-5 h-5 text-postes-red" />,
      name: "Estruturas para redes de distribuição e subestações",
      category: "Eletrificação"
    },
    {
      icon: <Factory className="w-5 h-5 text-postes-red" />,
      name: "Cruzetas, anéis, vigas e colunas",
      category: "Eletrificação"
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-postes-red" />,
      name: "Redes de distribuição aérea e subterrânea",
      category: "Eletrificação"
    },
    {
      icon: <Power className="w-5 h-5 text-postes-red" />,
      name: "Estruturas para iluminação pública",
      category: "Eletrificação"
    },
    {
      icon: <Warehouse className="w-5 h-5 text-postes-red" />,
      name: "Galpões e estruturas industriais",
      category: "Pré-moldados"
    },
    {
      icon: <Anchor className="w-5 h-5 text-postes-red" />,
      name: "Estacas e mourões",
      category: "Pré-moldados"
    },
    {
      icon: <Home className="w-5 h-5 text-postes-red" />,
      name: "Estábulos, abrigos e currais",
      category: "Pré-moldados"
    },
    {
      icon: <Blocks className="w-5 h-5 text-postes-red" />,
      name: "Blocos estruturais",
      category: "Pré-moldados"
    },
    {
      icon: <Wrench className="w-5 h-5 text-postes-red" />,
      name: "Soluções customizadas para construção civil",
      category: "Pré-moldados"
    }
  ];

  return (
    <section id="produtos" className="section-padding bg-postes-gray-light">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-postes-gray-dark">
            Nossos <span className="text-postes-red">Produtos</span>
          </h2>
          <p className="max-w-2xl mx-auto text-postes-gray-dark">
            Oferecemos uma linha completa de soluções em concreto pré-moldado para os setores
            de energia e construção civil, com produtos que atendem às mais rigorosas especificações técnicas.
          </p>
        </div>
        
        <div className="bg-white p-8 rounded shadow-md animate-on-scroll mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-postes-red">Nossa Linha de Produtos</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {products.slice(0, 5).map((product, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-postes-red/10 p-2 rounded-full mr-4 mt-1">
                    {product.icon}
                  </div>
                  <span className="text-postes-gray-dark">{product.name}</span>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {products.slice(5).map((product, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-postes-red/10 p-2 rounded-full mr-4 mt-1">
                    {product.icon}
                  </div>
                  <span className="text-postes-gray-dark">{product.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Product Carousel */}
        <ProductCarousel />
      </div>
    </section>
  );
};

export default Products;
