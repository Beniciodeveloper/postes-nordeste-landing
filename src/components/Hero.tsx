import { ChevronDown } from 'lucide-react';
import Button from './Button';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[600px] flex items-center bg-white pt-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-[60px] items-center">
          <div className="max-w-2xl animate-on-scroll">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-postes-gray-dark leading-tight mb-8">
              Especialistas em Concreto Pré-Moldado para Energia e Construção
            </h2>
            
            <p className="text-lg md:text-xl text-postes-gray-dark mb-10">
              Desde 1965, referência em postes e estruturas pré-moldadas no Norte e Nordeste do Brasil.
            </p>
            
            <Button variant="primary" size="lg">
              Conheça nossos produtos
            </Button>
          </div>

          <div className="animate-on-scroll">
            <img 
              src="./img-home.png" 
              alt="Postes Nordeste" 
              className="w-[450px] h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
