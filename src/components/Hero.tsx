
import { ChevronDown } from 'lucide-react';
import Button from './Button';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('public/lovable-uploads/76b137b2-8897-4ab8-84cf-77aed5d691d6.png')",
        }}
      ></div>
      
      {/* Gradient Overlay - darker on left, more transparent on right */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10 z-10"></div>
      
      <div className="container mx-auto px-4 z-20">
        <div className="max-w-2xl animate-on-scroll">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Especialistas em Concreto Pré-Moldado para Energia e Construção
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Desde 1965, referência em postes e estruturas pré-moldadas no Norte e Nordeste do Brasil.
          </p>
          
          <Button variant="secondary" size="lg" className="backdrop-blur-sm">
            Conheça nossos produtos
          </Button>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white animate-bounce">
            <span className="text-sm mb-2">Saiba mais</span>
            <ChevronDown size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
