import styles from "../styles.module.scss";
import Beyond from "@/public/images/hm_log_wcg_2.jpg";
import Image from "next/image";
import { getDictionary } from "@/locales";
import { FC } from "react";

type NewsProps = {
  lang: "en" | "id";
};

export const News: FC<NewsProps> = async ({ lang }) => {
  const dict = await getDictionary(lang);
  const loopItems = [...Array.from({ length: 4 }, (_, i) => i + 1)];
  return (
    <section id="news" className={styles["kiko__news"]}>
      <div className="p-6">
        <div className="text-ocean-teal-600 text-5xl text-center mb-4">
          {dict.common.news}
        </div>
        <div className="flex gap-2 items-center justify-center flex-wrap ">
          {loopItems.map((num, idx) => (
            <div key={idx}>
              <Image src={Beyond} width={200} height={100} alt="news" />
              <div className="bg-blue-aqua p-2">
                <div className="text-xs">2025/10/30</div>
                <div className="text-xs">Gerakan anti match making</div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-blue-aqua p-2 w-fit mx-auto mt-4 rounded text-base font-medium cursor-pointer">
          {dict.common.more}
        </div>
      </div>
    </section>
  );
};
