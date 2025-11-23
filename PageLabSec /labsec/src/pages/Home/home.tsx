import Hero from '../../components/Hero/index'
import QuemSomos from '../../components/QuemSomos'
import AreasAtuacao from '../../components/AreasDeAtuacao'
import CallToAction from '../../components/CallToAction'
import Parceiros from '../../components/Parceiros'

export default function PageHome() {
  return(
    <div className='home'>
      <Hero/>
      <QuemSomos/>
      <AreasAtuacao/>
      <CallToAction/>
      <Parceiros/>
    </div>
  )
}