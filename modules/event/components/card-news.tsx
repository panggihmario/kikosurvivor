"use client";

import styles from "../styles.module.scss";
import Image from "next/image";
import { VAR } from "@/lib/variable";
import { NewsItem } from "@/types";
import { FC } from "react";
import { useRouter } from "next/navigation";

type NewsCardProps = {
  d: NewsItem;
};
export const CardNews: FC<NewsCardProps> = ({ d }) => {
  const router = useRouter();
  const handleClick = (d: NewsItem) => {
    router.push(`/event/${d.slug}`);
  };
  return (
    <li
      onClick={() => handleClick(d)}
      className="grid cursor-pointer sm:grid-cols-[max-content_1fr] gap-1 sm:gap-4 border-b border-b-blue-aqua sm:border-b-0 max-sm:pb-2"
    >
      <div className={styles["kiko-event__img"]}>
        <Image
          width={200}
          height={100}
          src={`${VAR.urlImg}/${d.img_banner}`}
          alt="beyond"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div>
        <div className="text-sm text-charcoal-900">
          {d.created_at} - {d.category}
        </div>
        <div className="font-bold text-base text-charcoal-900">{d.title}</div>
        <div className="text-xs text-charcoal-900">{d.author}</div>
        {/* <div className="line-clamp-4 max-sm:hidden text-[10px] h-fit text-gray-600">
                    Halo semuanya! Kami masih terus mencari metode baru untuk
                    memerangi cheater dan memastikan pengalaman yang
                    menyenangkan bagi semua pemain. Sebagai bagian dari upaya
                    ini, kami akan memberikan sanksi atas kecurangan berdasarkan
                    sifat dan tingkat keparahan pelanggarannya. Tim kami akan
                    secara aktif memantau game sepanjang waktu untuk mendeteksi
                    dan mengambil tindakan terhadap cheater setiap hari. Selain
                    itu, kami akan membagikan kabar tentang kemajuan kami secara
                    berkala. Jika kalian menemukan peri
                  </div> */}
      </div>
    </li>
  );
};
