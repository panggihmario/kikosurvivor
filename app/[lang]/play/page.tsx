import { PlayPage } from "@/modules/play/page";

export default function Play({
  params,
}: {
  params: Promise<{ lang: "en" | "id" }>;
}) {
  return <PlayPage params={params} />;
}
