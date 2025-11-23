import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState} from "react";
import logo from "../../assets/images/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 
                   w-1/2 max-w-3xl rounded-full 
                   bg-[#000000]/70
                   flex items-center justify-center 
                   shadow-lg border border-[#ffffff]/10 transition-all duration-500">
      <nav className="flex justify-center items-center py-1 gap-8 text-[#ffffff]">
        <a href="/">
          <img src={logo} alt="logo" className="w-15" />
        </a>

        <ul className="hidden lg:flex items-center gap-8">
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
                className="group relative cursor-pointer text-lg font-medium p-2"
              >
                {item.label}
                <span className="linha absolute bottom-0 right-0 w-0 h-[3px] rounded-full transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* mobile */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        {isOpen && (
          <ul className="absolute top-full left-0 w-full bg-[#000000] flex flex-col items-center gap-6 py-6 md:hidden">
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
                  className="cursor-pointer text-xl font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
