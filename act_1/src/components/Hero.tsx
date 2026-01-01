type HeroProps = {
  name: string
  role: string
}

function Hero({ name, role }: HeroProps) {
  return (
    <section id="home" className="space-y-4">
      <h1 className="text-4xl font-bold">
        Hi, I’m {name} 👋
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl">
        {role}
      </p>
    </section>
  )
}

export default Hero
