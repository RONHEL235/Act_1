import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

import {
  heroData,
  aboutData,
  projectsData,
  contactData,
} from './data/siteData'

function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-16 space-y-24">
        <Hero name={heroData.name} role={heroData.role} />
        <About description={aboutData.description} />
        <Projects projects={projectsData} />
        <Contact email={contactData.email} />
      </main>
      <Footer />
    </>
  )
}

export default App
