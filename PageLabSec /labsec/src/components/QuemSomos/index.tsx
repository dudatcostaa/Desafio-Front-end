import { BrButton } from "@govbr-ds/webcomponents-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const linkLinkedin = "https://www.linkedin.com/company/laborat%C3%B3rio-de-seguran%C3%A7a-em-computa%C3%A7%C3%A3o/posts/?feedView=all";
const linkGithub = "https://github.com/labsec";

export default function QuemSomos() {
  return (
    <section className="bg-[#ffffff] py-16 text-center">
      <h2 className="text-3xl font-semibold text-[#1351B4] mb-4">Quem somos?</h2>
      <p className="max-w-3xl mx-auto text-[#333333] mb-6 p-5">
        O Laboratório de Segurança em Computação (LabSEC) foi fundado em abril de 2000 e faz parte do
        Departamento de Informática e de Estatística (INE) da Universidade Federal de Santa Catarina (UFSC).
        O laboratório tem por objetivo estudar, pesquisar, avaliar e implementar soluções na área de segurança
        em computação.
      </p>

      <div className="flex justify-center gap-4">
        <BrButton className="flex items-center gap-2" emphasis="primary" onClick={() => window.location.href=linkLinkedin}>
          <FontAwesomeIcon icon={faLinkedin} /> Linkedin
        </BrButton>

        <BrButton className="flex items-center gap-2" emphasis="primary" onClick={() => window.location.href=linkGithub}>
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </BrButton>
      </div>
    </section>
  );
}
