import { EventPageDetailPage } from "@/modules/event/page/event-page-detail-page";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function EventDetail({ params }: PageProps) {
  const { slug } = await params;
  return <EventPageDetailPage params={slug} />;
}
