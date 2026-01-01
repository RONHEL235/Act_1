import { motion } from 'framer-motion'
import type { BlogPost } from '../data/siteData'

type BlogProps = {
  posts: BlogPost[]
}

function Blog({ posts }: BlogProps) {
  return (
    <section id="blog" className="space-y-6 bg-gray-50 p-6 rounded-lg">
      <h2 className="text-3xl font-semibold text-pink-800">Blog</h2>

      <ul className="grid md:grid-cols-2 gap-6">
        {posts.map((post: BlogPost) => (
          <motion.li
            key={post.title}
            className="p-6 bg-gray-100 border rounded-xl shadow hover:shadow-lg hover:bg-gray-200 transition"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 250 }}
          >
            <h3 className="font-bold text-pink-800">{post.title}</h3>
            <p className="text-gray-800 mt-2">{post.excerpt}</p>
            {post.link && (
              <a
                href={post.link}
                target="_blank"
                className="text-pink-800 hover:underline mt-2 block"
              >
                Read more
              </a>
            )}
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

export default Blog
