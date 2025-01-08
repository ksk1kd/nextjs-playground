export async function generateStaticParams() {
  const posts = ["1", "2", "3", "4", "5"];

  return posts.map((post) => ({
    slug: post,
  }));
}
export const dynamicParams = false;

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  return <h1>Blog {slug}</h1>;
}
