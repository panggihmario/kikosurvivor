import BgFeature from "@/public/images/story_baru.png";
import Image from "next/image";
import styles from "../styles.module.scss";
import { LangProps } from "@/types";
import { FC } from "react";
import { getDictionary } from "@/locales";
export const Intro: FC<LangProps> = async ({ lang }) => {
  const dict = await getDictionary(lang);
  return (
    <section className={`${styles["kiko__news"]} p-4`}>
      <Image src={BgFeature} alt="Features Background" />
      <div className="text-center m-w-[800px] text-ocean-teal-600">
        <div className="text-[1.5rem]  font-bold">
          <span className="text-brick-red">KIKO</span> {dict.common.and}{" "}
          <span className="text-brick-red">POLI</span> {dict.common.enterGame}
        </div>
        <div>
          {dict.common.helpKiko} <br />
          {dict.common.assist}
        </div>
      </div>
    </section>
  );
};
