import type { Skill } from '../data/siteData'

type SkillsProps = {
  skills: Skill[]
}

function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="space-y-6">
      <h2 className="text-2xl font-semibold">Skills</h2>

      <ul className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="px-4 py-2 border rounded-lg text-gray-700"
          >
            {skill.name}
            {skill.level && <span className="ml-2 text-gray-500">({skill.level})</span>}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
