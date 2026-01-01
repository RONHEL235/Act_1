type AboutProps = {
  description: string
}

function About({ description }: AboutProps) {
  return (
    <section id="about" className="space-y-4">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="text-gray-700 max-w-3xl">{description}</p>
    </section>
  )
}

export default About
