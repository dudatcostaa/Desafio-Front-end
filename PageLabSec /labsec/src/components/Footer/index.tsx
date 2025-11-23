import {
  BrFooter,
  BrFooterLogo,
  BrFooterCategory,
  BrFooterItem,
  BrFooterSocial,
  BrFooterLegal,
} from "@govbr-ds/webcomponents-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import logoGovBranca from "../../assets/images/LogoGovBranca.png";
import logoUFSCBranca from "../../assets/images/LogoUfscFundoEscuro.png";
import logoLabSEC from "../../assets/images/LogoLabSec.jpg";

export default function Footer() {
  return (
    <BrFooter>
      <BrFooterLogo
        slot="logo"
        src={logoGovBranca}
        description="Logo do Governo"
      ></BrFooterLogo>

      <div className="grid grid-cols-3">
        <BrFooterCategory label="Serviços">
          <BrFooterItem>Criptografia</BrFooterItem>
          <BrFooterItem>Assinatura Digital</BrFooterItem>
          <BrFooterItem>Segurança em Sistemas Computacionais</BrFooterItem>
          <BrFooterItem>Infraestrutura de Chaves Públicas (ICPs)</BrFooterItem>
          <BrFooterItem>Protocolos Criptográficos</BrFooterItem>
        </BrFooterCategory>

        <BrFooterCategory label="Contato">
          <BrFooterItem>
            Endereço: Salas 213 a 221, Departamento de Informática e Estatística
            (INE/UFSC), Florianópolis - SC
          </BrFooterItem>
          <BrFooterItem>Telefone: +55 48 3721 7546</BrFooterItem>
          <BrFooterItem>E-mail: labsec.contato@gmail.com</BrFooterItem>
        </BrFooterCategory>

        <BrFooterCategory label="Links">
          <BrFooterItem href="/historia">História</BrFooterItem>
          <BrFooterItem href="/equipe">Equipe</BrFooterItem>
          <BrFooterItem href="/noticias">Notícias</BrFooterItem>
        </BrFooterCategory>
      </div>

      <BrFooterSocial
        customId=""
        description=""
        href="https://www.linkedin.com/company/laborat%C3%B3rio-de-seguran%C3%A7a-em-computa%C3%A7%C3%A3o/posts/?feedView=all"
        icon=""
      ></BrFooterSocial>
      <BrFooterSocial
        customId=""
        description=""
        href="https://github.com/labsec"
        icon=""
      ></BrFooterSocial>

      <div slot="social-network" className="flex gap-4 items-center">
        <a
          href="https://www.linkedin.com/company/labsec-ufsc/"
          className="inline-flex items-center justify-center w-8 h-8"
          style={{ color: "inherit" }}
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>

        <a
          href="https://github.com/LabSEC"
          className="inline-flex items-center justify-center w-8 h-8"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>

      <div
        slot="partner-logo"
        className="flex justify-end gap-6 pr-8 items-end"
      >
        <BrFooterLogo src={logoUFSCBranca} description="Logo UFSC" />
        <BrFooterLogo src={logoLabSEC} description="Logo LabSec" />
      </div>

      <BrFooterLegal slot="legal">
        © {new Date().getFullYear()} LabSec — Universidade Federal de Santa
        Catarina
      </BrFooterLegal>
    </BrFooter>
  );
}
