const areas = [
  "Criptografia",
  "Assinatura Digital",
  "Segurança em Sistemas Computacionais",
  "Infraestrutura de Chaves Públicas",
  "Protocolos Criptográficos",
  "Estudo e Pesquisa",
];

export default function AreasAtuacao() {
  return (
    <section className="bg-[#ffffff] py-16 text-center p-8">
      <h2 className="text-3xl font-semibold text-[#1351B4] mb-10">Áreas de atuação</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {areas.map((area, index) => (
          <div
            key={index}
            className="bg-[#1351B4] text-[#ffffff] rounded-xl p-8 shadow-md hover:bg-[#4F97D1] transition-colors duration-200"
          >
            {area}
          </div>
        ))}
      </div>
    </section>
  );
}
