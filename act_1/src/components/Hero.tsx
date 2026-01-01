import { motion } from 'framer-motion'

type HeroProps = {
  name: string
  role: string
}

function Hero({ name, role }: HeroProps) {
  return (
    <motion.section
      id="home"
      className="space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl font-bold">Hi, I’m {name} 👋</h1>
      <p className="text-lg text-gray-600 max-w-2xl">{role}</p>
    </motion.section>
  )
}

export default Hero
