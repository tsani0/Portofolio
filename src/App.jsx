
import AboutMeMain from './components/aboutme/AboutMeMain'
import HeroGradient from './components/heroSection/HeroGradient'
import HeroMain from './components/heroSection/HeroMain'
import SubHeroSection from './components/heroSection/SubHeroSection'
import ProjectMain from './components/project/ProjectMain'
import Navbarmain from './components/navbar/navbarmain'
import Sertif from './components/sertif/sertif'
import Footer from './components/footer/footer'


function App() {

  
  return (
    <main className='font-body'>
      <Navbarmain />
      <AboutMeMain />
      <HeroGradient />
      <SubHeroSection />
      <HeroMain />
      <ProjectMain />
      <Sertif />
      <Footer />
    </main>
  )
}

export default App
