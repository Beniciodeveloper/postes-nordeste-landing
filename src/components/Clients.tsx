
const Clients = () => {
  // Normally, we'd use real client logos here, but for this example we'll use dummy content
  const clients = [
    "Coelba", "Celpe", "Equatorial", "Energisa", "Enel", 
    "Petrobras", "Oi", "Vivo", "CHESF", "Odebrecht", "ABB"
  ];

  return (
    <section id="clientes" className="section-padding bg-postes-gray-light">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-postes-gray-dark">
            Clientes que <span className="text-postes-red">confiam</span> na Postes Nordeste
          </h2>
          <p className="max-w-2xl mx-auto text-postes-gray-dark">
            Atendemos as maiores empresas dos setores de energia, telecomunicações e construção civil no Brasil.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 animate-on-scroll">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-md shadow-sm flex items-center justify-center 
                       aspect-video transition-all hover:shadow-md"
            >
              <span className="font-montserrat font-bold text-xl text-postes-gray-dark">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
