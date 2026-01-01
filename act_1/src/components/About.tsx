type AboutProps = {
  description: string
}

function About({ description }: AboutProps) {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>{description}</p>
    </section>
  )
}

export default About
