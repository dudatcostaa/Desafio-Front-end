const parceiros = [
  { name: "AC Digital", url: "https://www.acdigital.com.br" },
  { name: "Arpen-Brasil", url: "https://www.arpenbrasil.org.br" },
  { name: "BRy", url: "https://www.bry.com.br" },
  { name: "camara-e.net", url: "https://www.camara-e.net" },
  { name: "CAPES", url: "https://www.gov.br/capes/pt-br" },
  { name: "CCD/UFSC", url: "http://ccd.ufsc.br/" },
  { name: "ITI", url: "https://www.gov.br/iti/pt-br" },
  { name: "Kryptus", url: "https://kryptus.com/" },
  { name: "MEC", url: "https://www.gov.br/mec/pt-br" },
  { name: "PRODEMGE", url: "https://www.prodemge.gov.br" },
  { name: "RNP", url: "https://www.rnp.br" },
  { name: "Serpro", url: "https://www.serpro.gov.br" },
  { name: "SeTic/UFSC", url: "https://setic.ufsc.br/" },
  { name: "The Royal Society", url: "https://royalsociety.org" },
  { name: "TII", url: "https://tii.ae" },
];


export default function Parceiros() {
  return (
    <section className="bg-[#ffffff] py-16 text-center p-8">
      <h2 className="text-3xl font-semibold text-[#1351B4] mb-10">
        Nossos Parceiros
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
        {parceiros.map((parceiro, index) => (
          <a
            key={index}
            href={parceiro.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[#F0F0EC] text-[#1351B4] rounded-xl p-8 shadow-md hover:bg-[#4F97D1] hover:text-[#ffffff] transition-colors duration-200"
          >
            {parceiro.name}
          </a>
        ))}
      </div>
    </section>
  );
}
