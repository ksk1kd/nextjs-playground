import Link from "next/link";
export const dynamic = "force-dynamic";

export default async function Page() {
  const posts = ["1", "2", "3", "4", "5"];
  return (
    <>
      <h1>Blog List</h1>
      <ul>
        {posts.map((post) => (
          <li key={post}>
            <Link href={`/blog/${post}`}>Blog {post}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
