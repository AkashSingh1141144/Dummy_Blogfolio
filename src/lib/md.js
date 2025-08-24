import matter from "gray-matter"

/**
 * Parse markdown file content
 * @param {string} raw - markdown file as raw string
 * @returns {object} { data, content }
 */
export function parseMarkdown(raw) {
  const { data, content } = matter(raw)
  return { frontmatter: data, content }
}
