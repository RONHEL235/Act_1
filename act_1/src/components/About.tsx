import { motion } from 'framer-motion'

type AboutProps = {
  description: string
}

function About({ description }: AboutProps) {
  return (
    <motion.section
        id="about"
        className="space-y-4"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        >
            <h2 className="text-2xl font-semibold">About Me</h2>
            <p className="text-gray-700 max-w-3xl">{description}</p>
    </motion.section>
  )
}

export default About
