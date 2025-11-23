import { BrCard } from "@govbr-ds/webcomponents-react";

const noticias = [
  {
    titulo: "Visita do Senador Esperidão Amim e Deputada Federal Ângela Amin",
    descricao:
      "Na segunda-feira dia 06/05/2019 recebemos a visita do Senador Esperidião Amin e da Deputada Federal Ângela Amin. Os ilustres visitantes foram recepcionados pelos Magnífico Reitor e pelo Supervisor do LabSEC.",
    link: "https://labsec.ufsc.br/2019/05/14/visita-do-senador-esperidiao-amin-e-deputada-federal-angela-amin/",
  },
  {
    titulo: "Apresentação de Projeto para a AARB",
    descricao:
      "Última reunião deste ano contou com a presença do professor Jean Martina",
    link: "https://labsec.ufsc.br/2018/12/18/apresentacao-de-projeto-para-a-aarb/",
  },
  {
    titulo: "Prof. Jean Martina from UFSC visiting CNR in Pisa for a seminar on Privacy-preserving on WIFI Trajectories",
    descricao:
      "Prof. Jean Martina from UFSC visited the CNR group in Pisa to present his work on privacy-preserving methods for WiFi trajectories. We discussed how to integrate this work with MASTER activities to enlarge our collaboration in a central topic of the project.",
    link: "https://labsec.ufsc.br/2018/12/18/prof-jean-martina-from-ufsc-visiting-cnr-in-pisa-for-a-seminar-on-privacy-preserving-on-wifi-trajectories/",
  },
];

export default function Noticias() {
  return (
    <div className="p-6 flex flex-col gap-4">
      <h2 className="text-3xl font-semibold text-[#1351B4] mb-4 flex justify-center">Notícias</h2>
      {noticias.map((n, i) => (
        <BrCard key={i}>
          <div slot="header">
            <h3 className="text-[#1351B4]">{n.titulo}</h3>
          </div>
          <div slot="content">
            <p>{n.descricao}</p>
          </div>
          <div slot="footer">
            <a
              href={n.link}
              className="br-button primary text-[#1351B4]"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leia mais
            </a>
          </div>
        </BrCard>
      ))}
    </div>
  );
}
