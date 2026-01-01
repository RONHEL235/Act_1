import type { Project } from '../data/siteData'
import { motion } from 'framer-motion'

type ProjectsProps = {
  projects: Project[]
}

function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="space-y-6">
        <h2 className="text-2xl font-semibold">Projects</h2>

        <ul className="space-y-4">
            {projects.map((project) => (
                <motion.li
                key={project.title}
                className="p-4 border rounded-lg text-gray-700"
                whileHover={{ scale: 1.05, boxShadow: '0 8px 15px rgba(0,0,0,0.1)' }}
                transition={{ type: 'spring', stiffness: 300 }}
            >
                    <h3 className="font-medium">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                </motion.li>
            ))}
        </ul>
    </section>
  )
}

export default Projects
