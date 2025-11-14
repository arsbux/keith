import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Failures from './components/Failures'
import Services from './components/Services'
import Footer from './components/Footer'
import SpaceBackground from './components/SpaceBackground'

export default function Home() {
  return (
    <>
      <SpaceBackground />
      <main className="container">
        <Hero />
        <About />
        <Projects />
        <Failures />
        <Services />
        <Footer />
      </main>
    </>
  )
}
