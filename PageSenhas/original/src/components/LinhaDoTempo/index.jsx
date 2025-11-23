/* referência
https://prensali.substack.com/p/uma-breve-historia-da-senha-e-por-que-ela-e-importante */

import { motion } from "framer-motion";

export default function LinhaDoTempo() {
  const timeline = [
    {
      ano: "Antiguidade",
      titulo: "Grécia Antiga — O Lema Secreto",
      texto:
        "O historiador Políbio descreveu um 'lema' usado pelos exércitos romanos: palavras de ordem que confirmavam se alguém era amigo ou inimigo. Era o embrião do conceito de autenticação.",
    },
    {
      ano: "1920s",
      titulo: "Senhas da Lei Seca",
      texto:
        "Nos EUA, os bares 'speakeasy' exigiam frases de código ou senhas secretas para permitir a entrada durante a proibição do álcool — um uso social e cultural das senhas.",
    },
    {
      ano: "1961",
      titulo: "A Primeira Senha Digital",
      texto:
        "Fernando Corbató, no MIT, criou o primeiro sistema de senhas digitais. Cada usuário precisava de um login para acessar o computador de uso compartilhado — o início da autenticação moderna.",
    },
    {
      ano: "1983–2003",
      titulo: "Senhas nas Telonas",
      texto:
        "De 'Jogos de Guerra' (1983) com a senha 'Joshua' a 'Matrix Reloaded' (2003) com 'Z1ON0101', o cinema popularizou a ideia de hackear e proteger sistemas com senhas.",
    },
    {
      ano: "Hoje",
      titulo: "O Futuro da Autenticação",
      texto:
        "Senhas continuam evoluindo — agora com autenticação multifator, biometria e passkeys. A jornada continua rumo a uma segurança mais inteligente e invisível.",
    },
  ];

  return (
    <section
      id="linha"
      className="relative flex flex-col items-center p-6 sm:p-10 bg-black text-white overflow-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16 bg-linear-to-r from-[#a044ff] to-[#ff0eb3] bg-clip-text text-transparent text-center p-10"
      >
        História das senhas
      </motion.h2>

      <div className="relative w-full max-w-5xl">
        {/* linha central */}
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-1.5 bg-linear-to-b from-[#a044ff] to-[#ff0eb3] hidden sm:block"></div>

        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            viewport={{ once: true }}
            className={`flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-8 mb-12 sm:mb-16 ${
              index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
            }`}
          >
            {/* card */}
            <div className="w-full sm:w-1/2 px-2 sm:px-4 text-center sm:text-right">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#a044ff]">
                {item.ano}
              </h3>
              <h4 className="text-lg sm:text-xl font-medium">{item.titulo}</h4>
              <p className="text-gray-300 text-sm sm:text-base mt-2">{item.texto}</p>
            </div>

            {/* bolinha */}
            <div className="w-4 h-4 rounded-full bg-pink-500 shadow-lg shadow-pink-500/40 sm:mx-4"></div>

            <div className="w-full sm:w-1/2 px-2 sm:px-4"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
