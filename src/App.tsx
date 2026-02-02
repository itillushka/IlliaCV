import { Hero } from './components/Hero'
import { Profile } from './components/Profile'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Education } from './components/Education'
import { Certifications } from './components/Certifications'
import { Languages } from './components/Languages'
import { Additional } from './components/Additional'
import { Footer } from './components/Footer'
import { ParticlesBackground } from './components/ParticlesBackground'

function App() {
  return (
    <div className="relative flex flex-col w-full min-h-full bg-[var(--color-bg-dark)] font-primary">
      <ParticlesBackground />
      <Hero />
      <Profile />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <Languages />
      <Additional />
      <Footer />
    </div>
  )
}

export default App
