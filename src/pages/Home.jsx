import { motion } from "framer-motion";
export default function Home() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 overflow-hidden">
      {/* Hero Image */}
      <img
        src="https://images.pexels.com/photos/1557251/pexels-photo-1557251.jpeg"
        alt="Hero"
        className="absolute w-full h-full object-cover opacity-70"
      />

      {/* Animated Text */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="relative text-center text-white px-4"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Welcome to My Blog
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 2, delay: 1 }}
          className="text-xl md:text-2xl font-medium drop-shadow-md"
        >
          Explore. Learn. Create.
        </motion.p>
      </motion.div>
    </div>
  );
}
