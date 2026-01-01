import { motion } from 'framer-motion'

type HeroProps = {
  name: string
  role: string
}

function Hero({ name, role }: HeroProps) {
  return (
    <motion.section
        id="home"
        className="space-y-4 p-10 rounded-lg bg-gradient-to-br from-gray-200 via-gray-100 to-gray-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        >
        <h1 className="text-3xl font-extrabold text-pink-800">
            I’m {name} 
        </h1>
        <p className="text-xl text-gray-800 max-w-2xl">{role}</p>
    </motion.section>
  )
}

export default Hero
