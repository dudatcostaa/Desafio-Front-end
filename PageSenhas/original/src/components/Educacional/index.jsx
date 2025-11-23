/* Referência:
https://www.microsoft.com/pt-br/security/business/security-101/what-is-password-protection */

import { motion } from "framer-motion";

export default function Educacional() {
  return (
    <motion.section
      id="educacional"
      initial={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center"
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
      <div className="w-1/2 flex flex-col justify-center items-center gap-10 text-sm sm:text-base md:text-lg lg:text-x">
        <div className="min-h-screen flex flex-col text-center items-center gap-10 justify-center">
          <div>
            <h2 className="txtGradiente text-4xl p-3 font-semibold text-center">
              Proteção de senhas
            </h2>

            <p className="">
              A proteção por senha é uma técnica de controle de acesso que
              mantém dados importantes seguros contra hackers. Apenas quem
              possui as credenciais corretas consegue acessar a informação.
            </p>
          </div>

          <div>
            <h2 className="txtGradiente text-4xl p-3 font-semibold text-center">
              Por que a proteção por senha é importante?
            </h2>

            <p>
              Senhas são a primeira linha de defesa contra acessos não
              autorizados. Senhas fortes protegem contas, dispositivos e
              arquivos contra invasores e softwares mal-intencionados. Senhas
              fracas são como deixar a porta aberta: inseguro.
            </p>
          </div>

          <div>
            <h2 className="txtGradiente text-4xl p-3 font-semibold text-center">
              Consequências de senhas fracas:
            </h2>
            <p className="">
              Usar senhas fracas ou repetidas pode causar perda de informações
              pessoais e financeiras, prejudicar a reputação e gerar
              dificuldades no acesso a serviços essenciais. Empresas também
              podem sofrer perdas financeiras, de propriedade intelectual e
              danos à reputação.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
