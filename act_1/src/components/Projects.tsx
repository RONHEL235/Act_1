type Project = {
  title: string
  description: string
}

const projects: Project[] = [
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio built with React and TypeScript.',
  },
  {
    title: 'Student Management System',
    description: 'A small system built to manage student records.',
  },
]

function Projects() {
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
