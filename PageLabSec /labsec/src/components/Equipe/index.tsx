import equipeImage from "../../assets/images/Equipe.png";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Equipe() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const equipes = [
    {
      titulo: "Professores",
      cor: "bg-[#2F6FED]", // azul claro
      conteudo: [
        {
          nome: "Ricardo Felipe Custódio (supervisor)",
          formacao:
            "Doutor em Ciência da Computação (Universidade Federal do Rio Grande do Sul)",
          email: "ricardo.custodio@ufsc.br",
          links: [
            {
              texto: "Lattes",
              url: "http://lattes.cnpq.br/9716092379282146",
            },
            { texto: "Página pessoal", url: "https://rfcustodio.github.io/" },
            {
              texto: "Publicações",
              url: "https://scholar.google.com/citations?user=l29lg_IAAAAJ",
            },
          ],
        },
        {
          nome: "Jean Everson Martina",
          formacao: "Doutor em Ciência da Computação (University of Cambridge)",
          email: "jean.martina@ufc.br",
          links: [
            {
              texto: "Lattes",
              url: "http://lattes.cnpq.br/3531795815749652",
            },
            {
              texto: "Página pessoal",
              url: "https://jeanmartina.paginas.ufsc.br/",
            },
            {
              texto: "Publicações",
              url: "https://scholar.google.com.br/citations?hl=pt-BR&user=Ov5Fe5QAAAAJ&view_op=list_works&sortby=pubdate",
            },
          ],
        },
        {
          nome: "Martin Augusto Gagliotti Vigil",
          formacao:
            "Doutor em Ciência da Computação (Technische Universität Darmstadt)",
          email: "martin.vigil@ufsc.br",
          links: [
            {
              texto: "Lattes",
              url: "http://lattes.cnpq.br/2323279755124770",
            },
            {
              texto: "Publicações",
              url: "https://scholar.google.com.br/citations?hl=en&user=S4MOnqEAAAAJ&view_op=list_works&sortby=pubdate",
            },
          ],
        },
        {
          nome: "Thaís Bardini Idalino",
          formacao: "Doutora em Ciência da Computação (University of Ottawa)",
          email: "thais.bardini@ufsc.br",
          links: [
            {
              texto: "Lattes",
              url: "http://lattes.cnpq.br/1392550024680269",
            },
            {
              texto: "Publicações",
              url: "https://scholar.google.com.br/citations?hl=pt-BR&user=hS_R7ZsAAAAJ&view_op=list_works&sortby=pubdate",
            },
          ],
        },
      ],
    },
    {
      titulo: "Alunos de pós-graduação",
      cor: "bg-[#0C2D68]",
      conteudo: [
        {
          nome: "Alexandre Augusto Giron",
          formacao: "Doutorando em Ciência da Computação (PPGCC/UFSC)",
          email: "alexandre.giron.posgrad@ufsc.br",
          links: [
            {
              texto: "Lattes",
              url: "http://lattes.cnpq.br/6212241930248741",
            },
          ],
        },
        {
          nome: "Dúnia Marchiori",
          formacao: "Mestranda em Ciência da Computação (PPGCC/UFSC)",
          email: "dunia.marchiori.posgrad@ufsc.br",
          links: [
            {
              texto: "Lattes",
              url: "http://lattes.cnpq.br/7372786036057388",
            },
          ],
        },
        {
          nome: "Fernanda Oliveira Gomes",
          formacao: "Doutoranda em Ciência da Computação (PPGCC/UFSC)",
          email: "fernanda.gomes.posgrad@ufsc.br",
          links: [
            {
              texto: "Lattes",
              url: "http://lattes.cnpq.br/2114796936989569",
            },
          ],
        },
        {
          nome: "Filipe Oliveira de Borba",
          formacao: "Mestrando em Ciência da Computação (PPGCC/UFSC)",
          email: "filipe.borba.posgrad@ufsc.br",
          links: [
            {
              texto: "Lattes",
              url: "http://lattes.cnpq.br/8018576043678087",
            },
          ],
        },
        {
          nome: "Frederico Schardong",
          formacao: "Doutorando em Ciência da Computação (PPGCC/UFSC)",
          email: "frederico.schardong.posgrad@ufsc.br",
          links: [
            {
              texto: "Lattes",
              url: "http://lattes.cnpq.br/8896031429725811",
            },
          ],
        },
        {
          nome: "Gabriel Estevam de Oliveira",
          formacao: "Mestrando em Ciência da Computação (PPGCC/UFSC)",
          email: "gabriel.oliveira.posgrad@ufsc.br",
          links: [
            {
              texto: "Lattes",
              url: "http://lattes.cnpq.br/0325101089009277",
            },
          ],
        },
        {
          nome: "Giovana Nunes Inocêncio",
          formacao: "Mestranda em Ciência da Computação (PPGCC/UFSC)",
          email: "giovana.inocencio.posgrad@ufsc.br",
          links: [
            {
              texto: "Lattes",
              url: "http://lattes.cnpq.br/3787181100285214",
            },
          ],
        },
        {
          nome: "Gustavo Zambonin",
          formacao:
            "Doutorando em Ciência da Computação (Computer Science/uOttawa)",
          email: "gustavo.zambonin.posgrad@ufsc.br",
          links: [
            {
              texto: "Lattes",
              url: "http://lattes.cnpq.br/8192345791741876",
            },
            {
              texto: "Página pessoal",
              url: "https://zambonin.org/",
            },
          ],
        },
        {
          nome: "Johann Westphall",
          formacao: "Doutorando em Ciência da Computação (PPGCC/UFSC)",
          email: "johann.westphall.posgrad@ufsc.br",
          links: [
            {
              texto: "Lattes",
              url: "http://lattes.cnpq.br/8336798231836953",
            },
          ],
        },
        {
          nome: "Luca Fachini Campelli",
          formacao: "Mestrando em Ciência da Computação (PPGCC/UFSC)",
          email: "luca.campelli.posgrad@ufsc.br",
          links: [
            {
              texto: "Lattes",
              url: "http://lattes.cnpq.br/0508183288540011",
            },
          ],
        },
        {
          nome: "Lucas Machado da Palma",
          formacao: "Doutorando em Ciência da Computação (PPGCC/UFSC)",
          email: "lucas.palma.posgrad@ufsc.br",
          links: [
            {
              texto: "Lattes",
              url: "http://lattes.cnpq.br/5299852225140569",
            },
            {
              texto: "Página pessoal",
              url: "https://www.linkedin.com/in/lucasmpalma/ ",
            },
          ],
        },
        {
          nome: "Lucas Mayr de Athayde",
          formacao: "Mestrando em Ciência da Computação (PPGCC/UFSC)",
          email: "lucas.athayde.posgrad@ufsc.br",
          links: [
            {
              texto: "Lattes",
              url: "http://lattes.cnpq.br/5010614795919540",
            },
          ],
        },
        {
          nome: "Luiz Filipi de Sousa Moura",
          formacao: "Mestrando em Ciência da Computação (PPGCC/UFSC)",
          email: "luiz.moura.posgrad@ufsc.br",
          links: [
            {
              texto: "Lattes",
              url: "http://lattes.cnpq.br/9736593152697583",
            },
          ],
        },
        {
          nome: "Maurício de Vasconcelos Barros",
          formacao: "Mestrando em Ciência da Computação (PPGCC/UFSC)",
          email: "mauricio.barros.posgrad@ufsc.br",
          links: [
            {
              texto: "Lattes",
              url: "http://lattes.cnpq.br/8273888309163028",
            },
          ],
        },
        {
          nome: "Pablo Rinco Montezano",
          formacao: "Mestrando em Ciência da Computação (PPGCC/UFSC)",
          email: "pablo.montezano.posgrad@ufsc.br",
          links: [
            {
              texto: "Lattes",
              url: "http://lattes.cnpq.br/2321526277908152",
            },
            {
              texto: "Página pessoal",
              url: "https://www.linkedin.com/in/montezano/",
            },
          ],
        },
        {
          nome: "Taciane Martimiano",
          formacao: "Doutoranda em Ciência da Computação (PPGCC/UFSC)",
          email: "taciane.martimiano.posgrad@ufsc.br",
          links: [
            {
              texto: "Lattes",
              url: "http://lattes.cnpq.br/2548110075771299",
            },
          ],
        },
        {
          nome: "Thiago Leucz Astrizi",
          formacao: "Doutorando em Ciência da Computação (PPGCC/UFSC)",
          email: "thiago.astrizi.posgrad@ufsc.br",
          links: [
            {
              texto: "Lattes",
              url: "",
            },
          ],
        },
      ],
    },
    {
      titulo: "Alunos de graduação",
      cor: "bg-[#2F6FED]",
      nomes: [
        "Eduarda Oliveira Gomes",
        "Lucas Silva da Costa",
        "Vitor Katsuziro Egami",
        "Leonardo Gideão Costa Rocha",
        "Eduardo Silveira Godinho",
        "Arthur Gabriel Crippa Milanez",
        "Pedro Henrique Dadalt de Queiroz",
        "Gabriel Holstein Meireles",
        "Lucas Coelho Pini de Sousa",
      ],
    },

    {
      titulo: "Alumni",
      cor: "bg-[#0C2D68]",
      nomes: [
        "Gustavo Banegas",
        "Túlio Cícero Salvaro de Souza",
        "Marcelo Carlomagno Carlos",
        "Ricardo Pereira e Silva",
        "Ricardo Moraes",
        "Lucas Pandolfo Perin",
        "Rick Lopes de Souza",
        "Nícolas Pfeifer",
        "Douglas de Oliveira Mendes",
        "Juliano Romani",
        "Leonardo Schmitz da Costa",
        "Marcelo Mendonça Scheidt",
        "Jeandré Monteiro Sutil",
        "Nelson da Silva",
        "Rogério Bodemüller Júnior",
        "Thiago Acórdi Ramos",
        "Maurício Simões de Oliveira",
        "Hendri Nogueira",
        "Dayana Spagnuelo",
        "Felipe Sasso",
        "Douglas Marcelino Beppler Martins",
        "Alex Sandro da Silva Pereira",
        "Leandro Perin de Oliveira",
        "Bianca Brasil Silva Santos",
        "Camile Mansur Pimpão de Oliveira",
        "Gabriel Gaspar Becker",
        "Maike de Paula Santos",
        "Filipe Oliveira de Borba",
        "Luiz Henrique Urias de Sousa",
        "Guilherme Christopher Michaelsen Cardoso",
        "Eduardo Bellani",
        "Euclides Pinheiro de Melo",
        "Felipe Menegola Blauth",
        "Khristian Alexander Schönrock",
        "Marina Morillos",
        "César Barone Marques Costa",
        "Deise Luise Wrasse",
        "Julia Baldissera",
        "Marina da Silva Coelho",
        "Anna Victoria Oikawa",
        "Pedro Henrique Lenzi Soares",
        "Matteus Legat",
        "Ghabriel Calsa Nunes",
        "Vinícius Weisheimer",
        "Raphael Schwinden da Silveira",
        "Ana Carolina Duarte",
        "Hendri Nogueira",
        "Júlia Nakayama Silveira",
        "Claudio Dettoni",
        "Lucas Tomasi",
        "Raniere Althoff",
        "Guilherme André Welter",
        "José Victor Feijó de Araujo",
        "Rodolfo Lottin Pereira",
        "Gustavo Garcia Gava",
        "Ramna Sidharta de Andrade Palma",
        "Matheus Silva Pinheiro Bittencourt",
        "Gabriel Müller",
        "Fabio Moreira",
        "Vinicius Steffani Schweitzer",
        "Vinicius Guedes dos Santos",
        "João Victhor Campos",
        "Vinicius Macelai",
      ],
    },
  ];

  return (
    <section className="bg-[#ffffff] p-10">
      <h2 className="text-3xl font-semibold text-[#1351B4] mb-6">
        Nossa Equipe
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        <div className="w-full mx-auto flex flex-col gap-4 mt-20">
          {equipes.map((grupo, index) => (
            <div key={index} className="rounded overflow-hidden shadow-sm">
              {/* Cabeçalho */}
              <button
                onClick={() => toggle(index)}
                className={`w-full flex justify-between items-center text-[#ffffff] ${grupo.cor} px-4 py-3 text-left transition-all`}
              >
                <span className="flex items-center gap-2">
                  {grupo.titulo}
                </span>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className={`transition-transform duration-200 ${
                    openIndex === index ? "rotate-90" : ""
                  }`}
                />
              </button>

              {/* Conteúdo */}
              {openIndex === index && (
                <div className="bg-gray-50 text-[#333333] px-6 py-3 border border-t-0 border-gray-200">
                  {/* Se for o grupo de Professores */}
                  {grupo.conteudo ? (
                    <ul className="space-y-4">
                      {grupo.conteudo.map((prof, i) => (
                        <li key={i}>
                          <p className="font-semibold">{prof.nome}</p>
                          <p className="text-sm text-[#333333]">
                            {prof.formacao}
                          </p>
                          <div className="flex flex-wrap gap-3 mt-1">
                            {prof.links.map((link, j) => (
                              <a
                                key={j}
                                href={link.url}
                                className="text-[#1351B4] hover:underline text-sm"
                              >
                                {link.texto}
                              </a>
                            ))}
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <ul>
                      {grupo.nomes?.map((nome, i) => (
                        <li key={i} className="py-1">
                          {nome}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center items-start">
          <img
            src={equipeImage}
            alt="Imagem da equipe"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
