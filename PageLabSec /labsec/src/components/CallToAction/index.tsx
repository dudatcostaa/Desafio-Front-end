import { BrButton } from "@govbr-ds/webcomponents-react";
import contratandoImage from "../../assets/images/EstamosContratando.png";

const linkCandidato = "https://pbad.labsec.ufsc.br/hiring/";

export default function CallToAction() {
  return (
    <section className="bg-[#ffffff] py-16 px-8">
      <h2 className="text-3xl font-semibold text-[#1351B4] mb-10 text-center">
        Estamos Contratando?
      </h2>

      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-6 max-w-5xl mx-auto items-center">
        {/* Texto + botão */}
        <div className="bg-[#E1F3F8] text-[#000000] rounded-xl p-8 shadow-md flex flex-col justify-center text-center h-full">
          <p>
            Para saber se estamos com algum processo seletivo aberto,{" "}
            <a
              href={linkCandidato}
              className="text-[#1351B4] underline hover:text-indigo-600"
            >
              clique aqui
            </a>
            . Agradecemos desde já o interesse em participar do Laboratório!
          </p>

          <div className="mt-6">
            <BrButton emphasis="primary" onClick={() => window.location.href=linkCandidato}>
              Participe do Lab
            </BrButton>
          </div>
        </div>

        {/* Imagem */}
        <div className="flex justify-center">
          <img
            src={contratandoImage}
            alt="Imagem em espaco empresarial"
            className="rounded-xl shadow-md max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
