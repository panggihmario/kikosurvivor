import styles from "../../styles.module.scss";
import { getDictionary } from "@/locales";
import { FC } from "react";
import { useGetNews } from "../../hooks/use-get-news";
import { NewsCard } from "./news-card";
import Link from "next/link";

type NewsProps = {
  lang: "en" | "id";
};

export const NewsComponent: FC<NewsProps> = async ({ lang }) => {
  const dict = await getDictionary(lang);
  const { dta } = await useGetNews(true);

  return (
    <section id="news" className={styles["kiko__news"]}>
      <div className="p-6">
        <div className="text-ocean-teal-600 text-5xl text-center mb-4">
          {dict.common.news}
        </div>
        <div className="flex gap-2 items-center justify-center flex-wrap ">
          {dta.map((d) => (
            <NewsCard key={d.id} data={d} />
          ))}
        </div>
        <div className="bg-blue-aqua p-2 w-fit mx-auto mt-4 rounded text-base font-medium cursor-pointer">
          <Link href="/event">{dict.common.more}</Link>
        </div>
      </div>
    </section>
  );
};
