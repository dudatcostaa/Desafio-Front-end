import { Link } from "react-router-dom";
import { useState } from "react";
import { BrButton } from "@govbr-ds/webcomponents-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

import logoGov from "../../assets/images/gov-br_logo-svg.png";

// Links secoes do labsec
const SecoesLinks = [
  { name: "História", path: "/historia" },
  { name: "Equipe", path: "/equipe" },
  { name: "Notícias", path: "/noticias" },
];

const linkEntrarComGov =
  "https://sso.acesso.gov.br/login?client_id=www.gov.br&authorization_id=19a2ca22418";

export default function Header() {
  const [isSecoesMenuOpen, setIsSecoesMenuOpen] = useState(false);
  const [isGovMenuOpen, setIsGovMenuOpen] = useState(false);

  return (
    <div className="w-full relative">
      {/* BARRA SUPERIOR */}

      <div className="bg-white border-b border-gray-200">
        <div className="w-full px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo Gov + Governo Federal */}
          <div className="flex items-center space-x-2">
            {/* ESQUERDA: Logo */}
            <a
              href="https://www.gov.br/"
              className="flex items-center space-x-2"
            >
              <img
                src={logoGov}
                alt="logo Governo"
                className="h-10 sm:h-12 md:h-14 w-auto object-contain"
              />
              <span className="hidden sm:block text-sm text-[#333333]">
                Governo Federal
              </span>
            </a>
          </div>

          {/* MEIO: Links */}
          <nav className="hidden lg:flex items-center space-x-4 text-sm font-medium text-[#1351B4]">
            <a
              href="https://www.gov.br/pt-br/orgaos-do-governo"
              className="px-4 py-2 rounded-full hover:bg-[#C5D4EB] transition-colors duration-200"
            >
              Órgãos do Governo
            </a>
            <a
              href="https://www.gov.br/acessoainformacao/pt-br"
              className="px-4 py-2 rounded-full hover:bg-[#C5D4EB] transition-colors duration-200"
            >
              Acesso à Informação
            </a>
            <a
              href="https://www4.planalto.gov.br/legislacao"
              className="px-4 py-2 rounded-full hover:bg-[#C5D4EB] transition-colors duration-200"
            >
              Legislação
            </a>
            <a
              href="https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital"
              className="px-4 py-2 rounded-full hover:bg-[#C5D4EB] transition-colors duration-200"
            >
              Acessibilidade
            </a>
          </nav>

          {/* DIREITA: Botões */}
          <div className="flex items-center space-x-2">
            <BrButton
              emphasis="primary"
              className="whitespace-nowrap flex items-center h-6 px-2 text-xs sm:h-5 sm:px-2 sm:text-sm md:h-8 md:px-4 lg:h-8 lg:px-4"
              onClick={() => (window.location.href = linkEntrarComGov)}
            >
              Entrar com gov.br
            </BrButton>

            {/* Botão mobile */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsGovMenuOpen(!isGovMenuOpen)}
                className="text-[#333333] rounded-md"
              >
                <FontAwesomeIcon icon={faEllipsisV} className="h-5 w-5" />
              </button>
            </div>
          </div>

          {isGovMenuOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-[#ffffff] border border-gray-200 rounded-md shadow-lg z-40">
              <a
                href="https://www.gov.br/pt-br/orgaos-do-governo"
                className="block px-4 py-2 text-sm text-[#1351B4] hover:bg-gray-100"
              >
                Órgãos do Governo
              </a>
              <a
                href="https://www.gov.br/acessoainformacao/pt-br"
                className="block px-4 py-2 text-sm text-[#1351B4] hover:bg-gray-100"
              >
                Acesso à Informação
              </a>
              <a
                href="https://www4.planalto.gov.br/legislacao"
                className="block px-4 py-2 text-sm text-[#1351B4] hover:bg-gray-100"
              >
                Legislação
              </a>
              <a
                href="https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital"
                className="block px-4 py-2 text-sm text-[#1351B4] hover:bg-gray-100"
              >
                Acessibilidade
              </a>
            </div>
          )}
        </div>
      </div>

      {/* MENU LABSEC */}
      <div className="bg-[#ffffff] border-b border-gray-200 shadow-sm sticky top-0 z-30">
        <div className="w-full px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* ESQUERDA: botão hambúrguer + título */}
          <div className="flex items-center">
            <button
              onClick={() => setIsSecoesMenuOpen(!isSecoesMenuOpen)}
              type="button"
              className="p-2 text-[#333333] focus:outline-none rounded-full hover:bg-[#C5D4EB] transition-colors duration-200"
              aria-controls="Secoes-menu-mobile"
              aria-expanded={isSecoesMenuOpen}
            >
              <span className="sr-only">Abrir menu do LabSec</span>
              <FontAwesomeIcon
                icon={isSecoesMenuOpen ? faTimes : faBars}
                className="h-6 w-6"
              />
            </button>

            <Link to="/" className="text-2xl font-semibold text-[#1351B4]">
              LabSEC
            </Link>
          </div>

          {/* DIREITA: barra de pesquisa */}
          <div className="flex-1 flex justify-end">
            <div className="relative w-4/5 sm:w-full max-w-lg">
              <input
                type="text"
                placeholder="O que você procura?"
                className="w-full bg-gray-100 h-10 sm:h-12 py-2 pl-4 pr-12 text-[#333333] rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {isSecoesMenuOpen && (
        <div
          className="absolute top-full w-full bg-[#ffffff] shadow-xl border-t border-gray-200 z-20"
          id="Secoes-menu-mobile"
        >
          <div className="px-4 pt-2 pb-4 space-y-1">
            {SecoesLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsSecoesMenuOpen(false)}
                className="block text-[#333333] text-lg font-medium px-3 py-2 rounded-md hover:bg-gray-100 transition duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
