import type { Project } from '../data/siteData'
import { motion } from 'framer-motion'

type ProjectsProps = {
  projects: Project[]
}

function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="space-y-6 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-3xl font-semibold text-pink-800">Projects</h2>

        <ul className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
            <motion.li
                key={project.title}
                className="p-6 bg-gray-100 border rounded-xl shadow hover:shadow-lg hover:bg-gray-200 transition"
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 250 }}
            >
                <h3 className="font-bold text-lg text-pink-800">{project.title}</h3>
                <p className="text-gray-800 mt-2">{project.description}</p>
            </motion.li>
            ))}
        </ul>
    </section>
  )
}

export default Projects
