import { Link } from "react-router-dom";
import { getAllPosts } from "../lib/posts";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Blog() {
  const posts = getAllPosts();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [tag, setTag] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 4; // paggination 4 page hi show hoga

  //  Extract unique categories & tags safely
  const categories = [
    "All",
    ...new Set(posts.map((post) => post.category || "Uncategorized")),
  ];
  const tags = ["All", ...new Set(posts.flatMap((post) => post.tags || []))];

  //  Filter posts (search + category + tag) safely
  const filteredPosts = posts.filter((post) => {
    const title = post.title || "";
    const author = post.author || "";
    const postCategory = post.category || "Uncategorized";
    const postTags = post.tags || [];

    const matchesSearch =
      title.toLowerCase().includes(search.toLowerCase()) ||
      author.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ? true : postCategory === category;
    const matchesTag = tag === "All" ? true : postTags.includes(tag);

    return matchesSearch && matchesCategory && matchesTag;
  });

  //  Pagination Logic
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const displayedPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage
  );

  return (
    <div className="container mx-auto py-12 relative">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>

      {/*  Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1); // reset to first page when searching
          }}
          className="w-full max-w-md px-4 py-2 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 dark:bg-gray-900 dark:text-white dark:border-gray-700"
        />
      </div>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setCategory(cat);
              setCurrentPage(1); // reset page on filter change
            }}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
              category === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {displayedPosts.length > 0 ? (
          displayedPosts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 bg-white dark:bg-gray-900 shadow-md rounded-2xl hover:shadow-xl transition"
            >
              <h2 className="text-2xl font-semibold mb-2">
                <Link
                  to={`/blog/${post.slug}`}
                  className="hover:text-blue-500 dark:hover:text-blue-400"
                >
                  {post.title || "Untitled Post"}
                </Link>
              </h2>

              <p className="text-gray-500 text-sm mb-2">
                {post.date || "Unknown Date"} •{" "}
                {post.author || "Unknown Author"}
              </p>

              <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-600 rounded-full mb-4">
                {post.category || "Uncategorized"}
              </span>

              <p className="text-gray-700 dark:text-gray-300 line-clamp-3 mb-4">
                {post.body
                  ? post.body.replace(/[#_*`]/g, "").slice(0, 120)
                  : "No content available"}
                ...
              </p>

              <Link
                to={`/blog/${post.slug}`}
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                Read More →
              </Link>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No posts found.
          </p>
        )}
      </div>

      {/* Pagination Buttons */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 space-x-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg disabled:opacity-50"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded-lg ${
                currentPage === i + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-800 dark:text-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
