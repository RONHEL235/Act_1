import type { Project } from '../data/siteData'

type ProjectsProps = {
  projects: Project[]
}

function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <ul>
        {projects.map((project) => (
          <li key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Projects
