type ContactProps = {
  email: string
}

function Contact({ email }: ContactProps) {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>You can reach me at {email}</p>
    </section>
  )
}

export default Contact
