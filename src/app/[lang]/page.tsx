import { getDictionary } from "./dictionaries";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: "en" | "ja" }>;
}) {
  const lang = (await params).lang;
  const dict = await getDictionary(lang);
  return <>{dict.home}</>;
}
