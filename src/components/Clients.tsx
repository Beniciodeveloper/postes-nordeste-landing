const Clients = () => {
  // Updated client list (removed ABB)
  const clients = [
    { name: "Coelba", img: "/Coelba.png" },
    { name: "Celpe", img: "/Celpe.png" },
    { name: "Equatorial", img: "/Equatorial_logo.png" },
    { name: "Energisa", img: "/energisa.png" },
    { name: "Enel", img: "/enel.webp" },
    { name: "Petrobras", img: "/petrobras.png" },
    { name: "Oi", img: "/oi.jpg" },
    { name: "Vivo", img: "/vivo.png" },
    { name: "CHESF", img: "/chesf.png" },
    { name: "Odebrecht", img: "/oderbrecht.svg" },
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 animate-on-scroll">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-full shadow-sm flex items-center justify-center aspect-square transition-all hover:shadow-md mx-auto w-32 h-30 sm:w-30 sm:h-36 md:w-44 md:h-44"
            >
              <img
                src={client.img}
                alt={client.name}
                className="w-full  p-1 h-full object-contain rounded-full border border-gray-200 shadow-sm"
                title={client.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
