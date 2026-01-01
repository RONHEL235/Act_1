import type { Skill } from '../data/siteData'
import { motion } from 'framer-motion'

type SkillsProps = {
  skills: Skill[]
}

function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="space-y-6 bg-gray-200 p-6 rounded-lg">
        <h2 className="text-3xl font-semibold text-pink-800">Skills</h2>

        <ul className="flex flex-wrap gap-4">
            {skills.map((skill) => (
            <motion.li
                key={skill.name}
                className="px-4 py-2 border rounded-full text-gray-800 bg-gray-100 shadow hover:bg-gray-300 hover:text-pink-800 transition"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 250 }}
            >
                {skill.name}
            </motion.li>
            ))}
        </ul>
    </section>
  )
}

export default Skills
