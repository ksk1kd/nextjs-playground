interface Post {
  id: string;
  title: string;
  content: string;
}

export async function generateStaticParams() {
  const posts: Post[] = await fetch("https://api.vercel.app/blog").then((res) =>
    res.json(),
  );
  return posts.map((post) => ({
    slug: String(post.id),
  }));
}
export const revalidate = 10;
export const dynamicParams = false;

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const id = (await params).slug;
  const post: Post = await fetch(`https://api.vercel.app/blog/${id}`).then(
    (res) => res.json(),
  );
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>Current Time: {new Date().toLocaleString()}</p>
    </>
  );
}
