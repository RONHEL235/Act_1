type ContactProps = {
  email: string
}

function Contact({ email }: ContactProps) {
  return (
    <section id="contact" className="space-y-4">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="text-gray-700">
            You can reach me at{' '}
            <a
            href={`mailto:${email}`}
            className="underline"
            >
            {email}
            </a>
        </p>
    </section>
  )
}

export default Contact
