import { motion } from 'framer-motion'
import type { BlogPost } from '../data/siteData'

type BlogProps = {
  posts: BlogPost[]
}

function Blog({ posts }: BlogProps) {
  return (
    <section id="blog" className="space-y-6">
      <h2 className="text-2xl font-semibold">Blog</h2>

      <ul className="space-y-4">
        {posts.map((post) => (
          <motion.li
            key={post.title}
            className="p-4 border rounded-lg"
            whileHover={{ scale: 1.02, boxShadow: '0 6px 12px rgba(0,0,0,0.05)' }}
            transition={{ type: 'spring', stiffness: 250 }}
          >
            <h3 className="font-medium text-lg">{post.title}</h3>
            <p className="text-gray-600">{post.excerpt}</p>
            {post.link && (
              <a
                href={post.link}
                className="text-blue-600 hover:underline mt-2 block"
                target="_blank"
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
