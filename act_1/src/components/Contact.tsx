import { motion } from 'framer-motion'

type ContactProps = {
  email: string
}

function Contact({ email }: ContactProps) {
  return (
    <motion.section
      id="contact"
      className="space-y-4 p-6 bg-gray-100 rounded-lg shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-semibold text-pink-800">Contact Me</h2>
      <p className="text-gray-800">
        I’d love to hear from you! You can reach me at:
      </p>
      <a
        href={`mailto:${email}`}
        className="text-pink-800 hover:underline text-lg font-medium"
      >
        {email}
      </a>

      {/* Optional: simple contact form */}
      <form className="mt-4 flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-2 border rounded-lg bg-gray-50 text-gray-800 focus:outline-pink-600"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-2 border rounded-lg bg-gray-50 text-gray-800 focus:outline-pink-600"
        />
        <textarea
          placeholder="Your Message"
          className="p-2 border rounded-lg bg-gray-50 text-gray-800 focus:outline-pink-600"
        />
        <button
          type="submit"
          className="bg-pink-800 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"
        >
          Send
        </button>
      </form>
    </motion.section>
  )
}

export default Contact
