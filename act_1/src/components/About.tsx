import { motion } from 'framer-motion'

type AboutProps = {
  description: string
}

function About({ description }: AboutProps) {
  return (
    <motion.section
        id="about"
        className="space-y-4 p-6 bg-gray-100 rounded-lg shadow"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        >
        <h2 className="text-3xl font-semibold text-pink-800">About Me</h2>
        <p className="text-xl text-gray-800 max-w-2xl">{description}</p>
    </motion.section>
  )
}

export default About
