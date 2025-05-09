
import { Factory, Building } from 'lucide-react';
import ProductCarousel from './ProductCarousel';

const Products = () => {
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
        
        <div className="grid md:grid-cols-2 gap-10">
          {/* Eletrificação */}
          <div className="bg-white p-8 rounded shadow-md animate-on-scroll">
            <div className="flex items-center mb-6">
              <div className="bg-postes-red/10 p-3 rounded-full mr-4">
                <Factory className="w-6 h-6 text-postes-red" />
              </div>
              <h3 className="text-2xl font-bold text-postes-red">Eletrificação</h3>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-postes-red rounded-full mt-2 mr-2"></span>
                <span className="text-postes-gray-dark">Postes DT e circulares</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-postes-red rounded-full mt-2 mr-2"></span>
                <span className="text-postes-gray-dark">Estruturas para redes de distribuição e subestações</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-postes-red rounded-full mt-2 mr-2"></span>
                <span className="text-postes-gray-dark">Cruzetas, anéis, vigas e colunas</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-postes-red rounded-full mt-2 mr-2"></span>
                <span className="text-postes-gray-dark">Redes de distribuição aérea e subterrânea</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-postes-red rounded-full mt-2 mr-2"></span>
                <span className="text-postes-gray-dark">Estruturas para iluminação pública</span>
              </li>
            </ul>
          </div>
          
          {/* Pré-moldados */}
          <div className="bg-white p-8 rounded shadow-md animate-on-scroll">
            <div className="flex items-center mb-6">
              <div className="bg-postes-red/10 p-3 rounded-full mr-4">
                <Building className="w-6 h-6 text-postes-red" />
              </div>
              <h3 className="text-2xl font-bold text-postes-red">Pré-moldados</h3>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-postes-red rounded-full mt-2 mr-2"></span>
                <span className="text-postes-gray-dark">Galpões e estruturas industriais</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-postes-red rounded-full mt-2 mr-2"></span>
                <span className="text-postes-gray-dark">Estacas e mourões</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-postes-red rounded-full mt-2 mr-2"></span>
                <span className="text-postes-gray-dark">Estábulos, abrigos e currais</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-postes-red rounded-full mt-2 mr-2"></span>
                <span className="text-postes-gray-dark">Blocos estruturais</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-postes-red rounded-full mt-2 mr-2"></span>
                <span className="text-postes-gray-dark">Soluções customizadas para construção civil</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Product Carousel */}
        <ProductCarousel />
      </div>
    </section>
  );
};

export default Products;
