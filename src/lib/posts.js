import matter from "gray-matter";

// Vite sabhi markdown files ko raw string ke roop me import karega
const files = import.meta.glob("../content/posts/*.md", {
  eager: true,
  as: "raw",
});

export function getAllPosts() {
  return Object.entries(files).map(([filePath, raw]) => {
    // raw string ko parse kra
    const { data, content } = matter(raw);

    // slug nikala (file name se)
    const slug = filePath.split("/").pop().replace(".md", "");

    return {
      slug,
      ...data, // frontmatter (title, date, tags, etc.)
      body: content, // markdown content
    };
  });
}
