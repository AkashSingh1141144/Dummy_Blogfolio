import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="container mx-auto py-20 px-4 max-w-4xl">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-8 text-center text-gray-900 dark:text-white"
      >
        About This Blog
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
      >
        Welcome to this blog! Here, we share insights, tutorials, and guides on
        web development, programming, and technology trends. Our goal is to make
        learning easy, fun, and practical for developers of all levels.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="mb-6"
      >
        <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
          How It All Started
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          This blog was created with the vision to share knowledge about
          programming and web development. Over time, it has grown into a
          platform where beginners and experienced developers alike can discover
          tutorials, coding tips, and industry insights.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="mb-6"
      >
        <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
          Our Mission
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Our mission is to provide high-quality, easy-to-follow content that
          empowers developers to improve their skills. We believe in hands-on
          learning, clear explanations, and keeping up with the latest trends in
          technology.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="mb-6"
      >
        <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
          Our Vision
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          We envision a community of developers who continuously learn, share,
          and grow together. By providing engaging content, practical examples,
          and clear tutorials, we aim to inspire more people to explore coding
          and technology.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1 }}
      >
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-6">
          Thank you for visiting this blog! We hope you find valuable resources
          and enjoy reading our content. Stay curious, keep learning, and happy
          coding!
        </p>
      </motion.div>
    </div>
  );
}
