import CallToAction from './components/CallToAction/index';
import Cards from './components/Cards/index';
import Educacional from './components/Educacional/index';
import Footer from './components/Footer';
import Header from './components/Header/index'
import Hero from "./components/Hero/index";
import Interacao from './components/Interacao/index';
import LinhaDoTempo from './components/LinhaDoTempo/index';

export default function App(){
  return(
    <div>
      <Header />
      <Hero />
      <Educacional />
      <LinhaDoTempo />
      <Cards />
      <CallToAction />
      <Interacao />
      <Footer />
    </div>
  );
}