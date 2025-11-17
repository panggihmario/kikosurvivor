import { FC } from "react";
import styles from "../styles.module.scss";
import Link from "next/link";
import { useGetDetailNews } from "../hooks/use-get-detail-news";
type PageProps = {
  params: string;
};

export const EventPageDetailPage: FC<PageProps> = async ({ params }) => {
  const { dta } = await useGetDetailNews(params);

  return (
    <div className="pt-12 min-h-[70vh] kiko-bg">
      <div className={styles["kiko-event__list"]}>
        <div className="font-bold text-4xl text-charcoal-900">{dta.title}</div>
        <div className="text-base text-charcoal-900">{dta.created_at}</div>
        <div className="w-full h-px bg-blue-aqua mt-4"></div>
        <div
          className="text-charcoal-900 text-sm mt-10"
          dangerouslySetInnerHTML={{ __html: dta.content as string }}
        />
        <div className="text-blue-aqua mt-4 cursor-pointer">
          <Link href="/event">Kembali</Link>
        </div>
        <div className="w-full h-px bg-blue-aqua mt-2"></div>
      </div>
    </div>
  );
};
