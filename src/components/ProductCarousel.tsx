
import { useState } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { Button } from "@/components/ui/button";

type ProductCategory = 
  | 'postes-dt' 
  | 'postes-circular' 
  | 'postes-rc' 
  | 'cruzetas' 
  | 'linhas-transmissao' 
  | 'subestacoes' 
  | 'galpoes';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  category: ProductCategory;
}

const ProductCarousel = () => {
  const [activeFilter, setActiveFilter] = useState<ProductCategory>('postes-dt');
  
  // Sample product data - in a real application, this would come from a database
  const products: Product[] = [
    {
      id: 1,
      name: "Poste DT 9/300",
      description: "Poste de concreto seção DT (tipo D)",
      image: "/placeholder.svg",
      category: 'postes-dt'
    },
    {
      id: 2,
      name: "Poste DT 11/300",
      description: "Poste de concreto seção DT (tipo B)",
      image: "/placeholder.svg",
      category: 'postes-dt'
    },
    {
      id: 3,
      name: "Poste Circular 12m",
      description: "Poste de concreto seção circular (tipo R)",
      image: "/placeholder.svg",
      category: 'postes-circular'
    },
    {
      id: 4,
      name: "Poste RC 10/350",
      description: "Poste de concreto seção circular conicidade reduzida",
      image: "/placeholder.svg",
      category: 'postes-rc'
    },
    {
      id: 5,
      name: "Cruzeta 2000mm",
      description: "Cruzeta para rede de distribuição",
      image: "/placeholder.svg",
      category: 'cruzetas'
    },
    {
      id: 6,
      name: "Torres LT 69kV",
      description: "Estruturas para linhas de transmissão",
      image: "/placeholder.svg",
      category: 'linhas-transmissao'
    },
    {
      id: 7,
      name: "Estrutura para SE",
      description: "Pórtico para subestação",
      image: "/placeholder.svg",
      category: 'subestacoes'
    },
    {
      id: 8,
      name: "Pilares para galpão",
      description: "Estruturas para montagem de galpões",
      image: "/placeholder.svg",
      category: 'galpoes'
    },
  ];
  
  // Filter categories with display names
  const filters = [
    { id: 'postes-dt', name: "Postes de concreto seção DT (tipo D e B)" },
    { id: 'postes-circular', name: "Postes de concreto seção circular (tipo R)" },
    { id: 'postes-rc', name: "Postes de concreto seção circular conicidade reduzida (RC)" },
    { id: 'cruzetas', name: "Cruzetas e outras peças para rede de distribuição" },
    { id: 'linhas-transmissao', name: "Linhas de Transmissão" },
    { id: 'subestacoes', name: "Subestações" },
    { id: 'galpoes', name: "GALPÕES - Estruturas para montagem de galpões" },
  ];
  
  // Filter products by active category
  const filteredProducts = products.filter(product => product.category === activeFilter);
  
  return (
    <div className="my-16 animate-on-scroll">
      <h3 className="text-2xl font-bold text-center mb-6 text-postes-gray-dark">
        Catálogo de <span className="text-postes-red">Produtos</span>
      </h3>
      
      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {filters.map((filter) => (
          <Button
            key={filter.id}
            variant={activeFilter === filter.id ? "default" : "outline"}
            className={
              activeFilter === filter.id 
                ? "bg-postes-red hover:bg-postes-red/90 text-white" 
                : "text-postes-gray-dark hover:text-postes-red"
            }
            onClick={() => setActiveFilter(filter.id as ProductCategory)}
          >
            {filter.name}
          </Button>
        ))}
      </div>
      
      {/* Product carousel */}
      <Carousel className="w-full max-w-[1200px] mx-auto">
        <CarouselContent>
          {filteredProducts.map((product) => (
            <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="bg-white p-4 rounded-lg shadow h-full">
                <div className="aspect-[4/3] bg-postes-gray-light rounded-md flex items-center justify-center mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="object-cover w-full h-full rounded-md"
                  />
                </div>
                <h4 className="font-bold text-postes-gray-dark mb-1">{product.name}</h4>
                <p className="text-sm text-postes-gray-dark">{product.description}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-4">
          <CarouselPrevious className="relative mr-4 static translate-y-0" />
          <CarouselNext className="relative ml-4 static translate-y-0" />
        </div>
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
