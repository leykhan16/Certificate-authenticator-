import Header from './components/header/header'
import HeaderHero from './components/hero/headerHero'
import FeatureHero from './components/hero/featureHero'
//import FeatureHeroTwo from './components/hero/featureHeroTwo'
import HowItWorks from "./components/hero/howItWorksHero"
import CallToAction from './components/section/callToActionHero'
import Footer from './components/footer/footer'
 
function App() {
  
  return (
    <>

      <section className="pb-20">

        <Header />

        <HeaderHero />

      </section>

      <FeatureHero />

      

      <HowItWorks />

      <CallToAction />

      <Footer />
      
    </>
  )
}

export default App
