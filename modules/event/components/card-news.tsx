"use client";

import styles from "../styles.module.scss";
import Image from "next/image";
import { VAR } from "@/lib/variable";
import { NewsItem } from "@/types";
import { FC } from "react";
import Link from "next/link";

type NewsCardProps = {
  d: NewsItem;
};
export const CardNews: FC<NewsCardProps> = ({ d }) => {
  return (
    <li>
      <Link
        className="grid cursor-pointer sm:grid-cols-[max-content_1fr] gap-1 sm:gap-4 border-b border-b-blue-aqua sm:border-b-0 max-sm:pb-2"
        href={`/event/${d.slug}`}
        passHref
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
        </div>
      </Link>
    </li>
  );
};
