"use client";

import Image from "next/image";
import { VAR } from "@/lib/variable";
import { NewsItem } from "@/types";
import { FC } from "react";
import Link from "next/link";

type NewsCardProps = {
  data: NewsItem;
};

export const NewsCard: FC<NewsCardProps> = ({ data }) => {
  return (
    <Link href={`/event/${data.slug}`} passHref>
      <div key={data.id} className="overflow-hidden cursor-pointer">
        <div className="h-[100px] w-[200px] overflow-hidden">
          <Image
            src={`${VAR.urlImg}/${data.img_banner}`}
            width={200}
            height={100}
            alt="news"
            className="transition-transform hover:scale-120 duration-300 ease-out"
          />
        </div>

        <div className="bg-blue-aqua p-2">
          <div className="text-xs">{data.created_at}</div>
          <div className="text-base font-semibold">{data.title}</div>
        </div>
      </div>
    </Link>
  );
};
