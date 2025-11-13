import HomePage from "@/modules/home/page/home-page";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: "en" | "id" }>;
}) {
  return (
    <>
      <HomePage params={params} />
    </>
  );
}
