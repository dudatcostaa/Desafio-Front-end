import { useState } from "react";

const panels = [
  {
    titulo: "Início",
    texto: `No início de 1993, foi criado no Departamento de Informática e Estatística (INE),
    o Laboratório de Computação Algébrica e Simbólica (LabCAS). A criação do LabCAS
    foi fruto da necessidade, que ao longo de vários anos foi sendo identificada
    por docentes e pesquisadores na área de métodos computacionais para a solução
    de problemas matemáticos.`,
  },
  {
    titulo: "Desenvolvimento",
    texto: `Ao longo de sete anos foram desenvolvidos alguns projetos buscando atingir os
    objetivos do LabCAS, muitos dos quais com auxílio de bolsistas de Iniciação
    Científica, outros realizados exclusivamente pelos professores ligados ao
    Laboratório. Assim, durante a existência do LabCAS, contribuiu-se significativamente
    na formação de estudantes dos cursos de Engenharias e de Ciência da Computação,
    bem como a nível de Pós-Graduação, com o oferecimento de disciplinas no curso
    de mestrado em Ciência da Computação.`,
  },
  {
    titulo: "Nova Fase",
    texto: `Entretanto, a partir do ano 2000, os professores associados ao LabCAS sentiram
    a necessidade de direcionar as atividades de pesquisa e desenvolvimento para
    a ciência da computação. Uma das áreas que houve premente necessidade de
    envolvimento de pesquisadores com o nosso perfil foi a criptografia. A
    criptografia é a ciência de esconder a informação e torná-la disponível
    somente à entidades desejadas. É uma das únicas tecnologias que podem resolver
    os problemas de segurança em computação, aplicável a redes, sistemas operacionais,
    comunicação segura, autoridades de certificação digital, comércio eletrônico, entre outros.
    Assim, além de continuar com os objetivos iniciais, estendemos nossos objetivos
    à área de segurança em computação, contribuindo para a Universidade e para a Ciência.`,
  },
];

export default function Historia() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="bg-[#ffffff] py-16 text-center">
      <h2 className="text-3xl font-semibold text-[#1351B4] mb-12">
        Nossa História
      </h2>

      <div className="max-w-3xl mx-auto text-[#333333] mb-6 p-5">
        {/* Linha do tempo */}
        <div className="flex items-center justify-between mb-8 relative">
          {panels.map((panel, i) => (
            <div key={i} className="flex-1 flex flex-col items-center relative">
              {/* Bolinha */}
              <button
                onClick={() => goTo(i)}
                className={`w-8 h-8 rounded-full border-2 flex items-center justify-center 
                  ${i === activeIndex ? "bg-[#1351B4] border-[#1351B4]" : "bg-[#ffffff] border-gray-300 hover:bg-[#4F97D1] hover:text-[#ffffff]"}`}
              >
                <span className={`${i === activeIndex ? "text-[#ffffff]" : "text-[#333333]"}`}>{i + 1}</span>
              </button>
              {/* Título abaixo da bolinha */}
              <span className="mt-2 text-sm font-medium">{panel.titulo}</span>
            </div>
          ))}
        </div>

        {/* Painel ativo */}
        <div className="text-center text-[#333333] mb-6 px-4">
          <p>{panels[activeIndex].texto}</p>
        </div>

      </div>
    </section>
  );
}
