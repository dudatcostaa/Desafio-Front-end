import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import logo from "../../assets/images/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 
                   w-1/2 max-w-3xl rounded-full 
                   bg-[#000000]/70
                   flex items-center justify-between 
                   px-4 py-2
                   shadow-lg border border-[#ffffff]/10 
                   transition-all duration-500 overflow-hidden"
      >
        {/* LOGO */}
        <a href="/">
          <img src={logo} alt="logo" className="w-14" />
        </a>

        {/* LINKS DESKTOP */}
        <ul className="hidden lg:flex items-center gap-8 text-white">
          {[
            { to: "educacional", label: "Educacional" },
            { to: "linha", label: "Evolução" },
            { to: "curiosidades", label: "Curiosidades" },
            { to: "teste", label: "Teste" },
          ].map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                smooth={true}
                duration={600}
                offset={-10}
                className="group relative inline-block cursor-pointer text-lg font-medium p-2"
              >
                {item.label}
                <span className="linha absolute bottom-0 right-0 w-0 h-[3px] rounded-full transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* BOTÃO MOBILE */}
        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </header>

      {/* MENU MOBILE */}
      {isOpen && (
        <ul
          className="fixed left-1/2 -translate-x-1/2 
                     top-[92px]  /* mesma altura do header */
                     w-1/2 max-w-3xl bg-black/90 
                     flex flex-col items-center gap-6 py-6 
                     rounded-b-3xl z-40 lg:hidden"
        >
          {[
            { to: "educacional", label: "Educacional" },
            { to: "linha", label: "Evolução" },
            { to: "curiosidades", label: "Curiosidades" },
            { to: "teste", label: "Teste" },
          ].map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                smooth={true}
                duration={600}
                offset={-10}
                className="cursor-pointer text-xl font-medium text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
