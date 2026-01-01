import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const projects = [
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio built with React and TypeScript.',
  },
  {
    title: 'Student Management System',
    description: 'A small system built to manage student records.',
  },
]

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero
          name="Ronee"
          role="Software Engineering student passionate about building modern web applications."
        />

        <About description="I am a BSc IT Software Engineering student who     enjoys learning new technologies and building practical projects." />

        <Projects projects={projects} />
        <Contact email="ronnee@example.com" />
      </main>
      <Footer />
    </>
  )
}

export default App
