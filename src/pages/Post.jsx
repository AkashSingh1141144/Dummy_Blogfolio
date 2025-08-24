import { useParams } from "react-router-dom";
import { getAllPosts } from "../lib/posts";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState, useEffect } from "react";
import NotFound from "./NotFound";

export default function Post() {
  const { slug } = useParams();
  const posts = getAllPosts();
  const post = posts.find((p) => p.slug === slug);

  // Load comments from localStorage
  const [comments, setComments] = useState(() => {
    const stored = localStorage.getItem(`comments-${slug}`);
    return stored ? JSON.parse(stored) : [];
  });
  const [commentInput, setCommentInput] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!commentInput.trim()) return;
    const updatedComments = [...comments, commentInput.trim()];
    setComments(updatedComments);
    setCommentInput("");
    localStorage.setItem(`comments-${slug}`, JSON.stringify(updatedComments));
  };

  if (!post) {
    return <NotFound />;
  }

  return (
    <div className="container mx-auto py-10 prose dark:prose-invert">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-6">
        {post.date} • {post.author}
      </p>
      <ReactMarkdown
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                style={oneDark}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {post.body}
      </ReactMarkdown>

      {/* Comments Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Comments</h2>
        <form onSubmit={handleCommentSubmit} className="mb-6">
          <textarea
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            placeholder="Write your comment..."
            className="w-full p-3 border rounded-lg mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-700"
            rows={4}
          />
          <button
            type="submit"
            className="px-14 py-2 bg-blue-600 text-white rounded-lg mx-auto hover:bg-blue-700 transition"
          >
            Submit Comment
          </button>
        </form>

        {/* Comments List */}
        {comments.length > 0 ? (
          <ul className="space-y-4">
            {comments.map((c, i) => (
              <li
                key={i}
                className="p-4 border rounded-lg dark:border-gray-700 bg-gray-50 dark:bg-gray-900"
              >
                {c}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 dark:text-gray-400">
            No comments yet. Be the first to comment!
          </p>
        )}
      </div>
    </div>
  );
}
