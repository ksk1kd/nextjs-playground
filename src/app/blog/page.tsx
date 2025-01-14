import Link from "next/link";
export const dynamic = "force-dynamic";

interface Post {
  id: string;
  title: string;
  content: string;
}

export default async function Page() {
  const posts: Post[] = await fetch("https://api.vercel.app/blog", {
    next: { tags: ["blog"] },
  }).then((res) => res.json());

  return (
    <>
      <h1>Blog List</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
