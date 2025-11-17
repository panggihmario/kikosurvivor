"use client";

import styles from "../styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import Webimg from "@/public/images/web.png";
import Webimg1 from "@/public/images/web-1.png";
import Webimg2 from "@/public/images/web-2.png";
import { FC } from "react";
import { type Dictionary } from "@/types";

type FeaturesProps = {
  dict: Dictionary;
};

export const Features: FC<FeaturesProps> = ({ dict }) => {
  const pagination = {
    clickable: true,
  };
  return (
    <section className={styles["kiko__background"]}>
      <div className="p-4 sm:px-48">
        <Swiper
          spaceBetween={50}
          pagination={pagination}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <div className="grid grid-cols-2 items-center gap-2 ">
              <div className="w-[400px]">
                <Image
                  style={{ objectFit: "contain" }}
                  src={Webimg}
                  alt="Feature 1"
                />
              </div>
              <div className="text-bold text-blue-aqua sm:text-3xl">
                {dict.common.defeatEnemy}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-2 items-center gap-2  ">
              <div className="w-[400px]">
                <Image
                  style={{ objectFit: "contain" }}
                  src={Webimg1}
                  alt="Feature 1"
                />
              </div>
              <div className="text-bold text-blue-aqua sm:text-3xl">
                {dict.common.conquerStages}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-2 items-center gap-2 ">
              <div className="w-[400px]">
                <Image
                  style={{ objectFit: "contain" }}
                  src={Webimg2}
                  alt="Feature 1"
                />
              </div>
              <div className="text-bold text-blue-aqua sm:text-3xl">
                {dict.common.saveWorld}
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
