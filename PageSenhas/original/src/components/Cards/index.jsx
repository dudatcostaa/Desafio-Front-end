/* Referência:
https://www.microsoft.com/pt-br/security/business/security-101/what-is-password-protection */

import SpotlightCard from "../ReactBits/SpotlightCard";
import SplitText from "../ReactBits/SplitText";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

export default function Cards() {
  return (
    <motion.section
      id="curiosidades"
      className="min-h-screen flex flex-col items-center justify-center gap-24 px-6 py-20"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { duration: 1.2, ease: "easeOut" },
      }}
      viewport={{ once: true, amount: 0.4 }}
    >
      {/* MOBILE SLIDER */}
      <div className="w-full md:hidden relative p-5">
        <Swiper
          navigation
          className="relative w-full"
        >
          <SwiperSlide>
            <div className="flex flex-col items-center gap-6">
              <SplitText
                text="Como os hackers agem..."
                className="text-3xl font-semibold text-center"
                delay={50}
                duration={0.3}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                onLetterAnimationComplete={handleAnimationComplete}
              />
              <SpotlightCard
                className="custom-spotlight-card w-full"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <div>
                  <h3 className="text-xl font-medium mb-2">
                    Como as senhas são hackeadas?
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Ataques de força bruta</li>
                    <li>Ataques de dicionário</li>
                    <li>Keylogging</li>
                    <li>Malware</li>
                    <li>Phishing</li>
                  </ul>
                </div>
              </SpotlightCard>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col items-center gap-6">
              <SplitText
                text="E como se proteger"
                className="text-3xl font-semibold text-center"
                delay={50}
                duration={0.3}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                onLetterAnimationComplete={handleAnimationComplete}
              />
              <SpotlightCard
                className="custom-spotlight-card w-full"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <div>
                  <h3 className="text-xl font-medium mb-2">
                    Como se proteger de hackers?
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Use senhas fortes em todas as contas</li>
                    <li>Desconfie de links e anexos</li>
                    <li>Proteja telas e documentos ao redor</li>
                    <li>Evite Wi-Fi público</li>
                    <li>Instale antivírus e antimalware</li>
                  </ul>
                </div>
              </SpotlightCard>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* DESKTOP LAYOUT */}
      <div className="hidden md:flex flex-col items-center gap-24">
        {/* Linha 1 */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-20 max-w-6xl">
          <div className="flex-1 text-center md:text-left">
            <SplitText
              text="Como os hackers agem..."
              className="p-2 text-4xl md:text-5xl font-semibold"
              delay={50}
              duration={0.3}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </div>

          <SpotlightCard
            className="custom-spotlight-card flex-1 w-full md:w-auto"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <div>
              <h3 className="text-xl font-medium mb-2">
                Como as senhas são hackeadas?
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Ataques de força bruta</li>
                <li>Ataques de dicionário</li>
                <li>Keylogging</li>
                <li>Malware</li>
                <li>Phishing</li>
              </ul>
            </div>
          </SpotlightCard>
        </div>

        {/* Linha 2 */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 max-w-6xl">
          <SpotlightCard
            className="custom-spotlight-card flex-1 w-full md:w-auto"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <div>
              <h3 className="text-xl font-medium mb-2">
                Como se proteger de hackers?
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Use senhas fortes em todas as contas</li>
                <li>Desconfie de links e anexos</li>
                <li>Proteja telas e documentos ao redor</li>
                <li>Evite Wi-Fi público</li>
                <li>Instale antivírus e antimalware</li>
              </ul>
            </div>
          </SpotlightCard>

          <div className="flex-1 text-center md:text-left">
            <SplitText
              text="E como se proteger"
              className="p-2 text-4xl md:text-5xl font-semibold"
              delay={50}
              duration={0.3}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
