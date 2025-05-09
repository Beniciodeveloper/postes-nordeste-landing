
import Button from './Button';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&q=80')",
          backgroundPosition: 'center',
        }}
      ></div>
      
      <div className="container mx-auto px-4 z-20">
        <div className="max-w-3xl animate-on-scroll">
          <div className="bg-postes-red inline-block py-3 px-6 mb-4">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Especialistas em Concreto Pré-Moldado para Energia e Construção
            </h2>
          </div>
          
          <div className="bg-white/90 p-6 mb-8">
            <p className="text-lg md:text-xl text-postes-gray-dark">
              Desde 1965, referência em postes e estruturas pré-moldadas no Norte e Nordeste do Brasil.
            </p>
          </div>
          
          <Button variant="secondary" size="lg">
            Conheça nossos produtos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
