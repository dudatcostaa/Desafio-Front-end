import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/home";
import Header from "./components/Header/index";
import Historia from "./pages/Historia/historia";
import Equipe from "./pages/Equipe/equipe";
import Noticias from "./pages/Noticias/noticias";
import Footer from "./components/Footer/index";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/equipe" element={<Equipe />} />
        <Route path="/noticias" element={<Noticias />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
