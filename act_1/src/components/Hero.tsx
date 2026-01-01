type HeroProps = {
  name: string
  role: string
}

function Hero({ name, role }: HeroProps) {
  return (
    <section id="home">
      <h1>Hi, I’m {name} 👋</h1>
      <p>{role}</p>
    </section>
  )
}

export default Hero
