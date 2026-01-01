import type { Project } from '../data/siteData'

type ProjectsProps = {
  projects: Project[]
}

function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="space-y-6">
        <h2 className="text-2xl font-semibold">Projects</h2>

        <ul className="space-y-4">
            {projects.map((project) => (
            <li
                key={project.title}
                className="p-4 border rounded-lg"
            >
                <h3 className="font-medium">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
            </li>
            ))}
        </ul>
    </section>
  )
}

export default Projects
