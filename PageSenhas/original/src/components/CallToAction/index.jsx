import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        scale: 1.05,
        transition: { duration: 2 },
      }}
      viewport={{
        once: true,
        amount: "0.5",
      }}
    >
    <section id="teste" className="p-10 text-center min-h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-8">
        <h2 className="text-4xl">Faça agora mesmo um teste para descobrir a força de suas senhas</h2>
        <Link
          to="interacao"
          smooth={true}
          duration={600}
          offset={-250}
          className="text-xl sm:text-xl md:text-2xl lg:text-2xl rounded-3xl cursor-pointer flex justify-center items-center
                     w-50 sm:w-60 md:w-70 lg:w-80 
                     h-8 sm:h-8 md:h-8 lg:h-10
                     bg-[linear-gradient(to_right,#a044ff_50%,#000000_50%)]
                     bg-size-[200%_100%] bg-right text-[#a044ff]
                     transition-all duration-400 ease-in-out border-2
                     hover:bg-left hover:text-[#000000] p-2"
        >
          Teste sua senha
        </Link>
      </div>
    </section>
    </motion.section>
  );
}
