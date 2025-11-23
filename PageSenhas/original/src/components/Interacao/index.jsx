import { useState } from "react";
import { FiLock } from "react-icons/fi";

export default function Interacao() {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  //força da senha
  const checkStrength = (pwd) => {
    if (pwd.length === 0) return "";
    let score = 0;
    if (pwd.length >= 8) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;

    if (score <= 1) return "fraca";
    if (score === 2 || score === 3) return "media";
    if (score >= 4) return "forte";
  };

  const handleTest = () => {
    setStrength(checkStrength(password));
  };

  //gradiente do cadeado
  const getLockColor = () => {
    switch (strength) {
      case "fraca":
        return "bg-gradient-to-r from-red-500 to-red-700";
      case "media":
        return "bg-gradient-to-r from-yellow-400 to-yellow-600";
      case "forte":
        return "bg-gradient-to-r from-green-400 to-green-600";
      default:
        return "bg-gray-400";
    }
  };

  return (
     <section id="interacao" className="min-h-screen">
    <div className="grid gird-cols-1 md:grid-cols-2 gap-8 items-center p-8 max-w-4xl mx-auto rounded-xl shadow-lg">
      {/* Lado esquerdo */}
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Teste uma senha</h2>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha..."
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a044ff]"
        />
        <button
          onClick={handleTest}
          className="bg-[linear-gradient(to_left,#a044ff_50%,#000000_50%)
                     bg-size-[200%_100%] bg-right text-[#000000] bg-[#a044ff]
                     transition-all duration-400 ease-in-out border-2
                     hover:bg-left hover:bg-[#000000] hover:text-[#a044ff] p-2 rounded-4xl"
        >
          Testar
        </button>
        {strength && (
          <p className="mt-2 text-lg">
            Força da senha:{" "}
            <span
              className={
                strength === "fraca"
                  ? "text-[#ff0000]"
                  : strength === "media"
                  ? "text-[#ce8900]"
                  : "text-[#0ca31e]"
              }
            >
              {strength.toUpperCase()}
            </span>
          </p>
        )}
      </div>

      {/* Lado direito */}
      <div className="flex justify-center items-center">
        <div
          className={`w-32 h-32 rounded-full flex justify-center items-center text-white text-6xl transition-colors ${getLockColor()}`}
        >
          <FiLock />
        </div>
      </div>
    </div>
    </section>
  );
}
