"use client";

import styles from "../styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import Feature1 from "@/public/images/hm_lb_bg_1.png";
import Feature2 from "@/public/images/hm_lb_bg_2.png";
import Feature3 from "@/public/images/hm_lb_bg_3.png";
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
            <div className="flex items-center gap-2 ">
              <div>
                <Image src={Webimg} alt="Feature 1" />
              </div>
              <div className="text-bold text-blue-aqua sm:text-3xl">
                {dict.common.defeatEnemy}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center gap-2 m-auto ">
              <div>
                <Image width={339} height={466} src={Webimg1} alt="Feature 1" />
              </div>
              <div className="text-bold text-blue-aqua sm:text-3xl m-auto">
                {dict.common.conquerStages}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center gap-2 ">
              <div>
                <Image src={Webimg2} alt="Feature 1" />
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
