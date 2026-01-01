import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Skills from './components/Skills'
import { skillsData } from './data/siteData'
import Blog from './components/Blog'
import { blogData } from './data/siteData'



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
        <Skills skills={skillsData} />
        <Projects projects={projectsData} />
        <Blog posts={blogData} />
        <Contact email={contactData.email} />
      </main>
      <Footer />
    </>
  )
}

export default App
