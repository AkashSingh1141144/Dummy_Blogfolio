import { getAllPosts } from "../lib/posts";
import { Link } from "react-router-dom";

export default function Categories() {
  const posts = getAllPosts();

  // Unique categories nikal rahe hain
  const categories = [...new Set(posts.map((post) => post.category))];

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">📂 Categories</h1>

      <div className="grid gap-6">
        {categories.map((category) => (
          <div key={category} className="p-4 border rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-2">{category}</h2>
            <ul className="list-disc ml-5">
              {posts
                .filter((post) => post.category === category)
                .map((post) => (
                  <li key={post.slug}>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-blue-500 hover:underline"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
