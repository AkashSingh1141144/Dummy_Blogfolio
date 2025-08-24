// src/components/blog/PostCard.jsx
import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition">
      <h2 className="text-xl font-semibold mb-2">
        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
      </h2>

      <p className="text-sm text-gray-500 mb-2">
        {post.date} {post.author ? `• ${post.author}` : ""}
      </p>

      <p className="text-gray-700 mb-3">
        {post.excerpt || post.body.slice(0, 120) + "..."}
      </p>

      <Link
        to={`/blog/${post.slug}`}
        className="text-blue-500 hover:underline font-medium"
      >
        Read more →
      </Link>
    </div>
  );
}
