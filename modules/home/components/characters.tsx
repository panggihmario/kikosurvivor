"use client";

import styles from "../styles.module.scss";
import Karkus from "@/public/characters/karkus.png";
import Kiko from "@/public/characters/kiko.png";
import Lola from "@/public/characters/lola.png";
import Poli from "@/public/characters/poli.png";
import Patino from "@/public/characters/patino.png";
import Pupus from "@/public/characters/pupus.png";
import Tingting from "@/public/characters/tingting.png";
import Image from "next/image";
import { useEffect } from "react";
export const Characters = () => {
  useEffect(() => {
    const scrollerInner = document.getElementById("scroller-inner");
    if (!scrollerInner) return;
    const scrollerContent = Array.from(scrollerInner?.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true) as HTMLElement;
      duplicatedItem.setAttribute("aria-hidden", "true");
      scrollerInner.appendChild(duplicatedItem);
    });
  }, []);
  return (
    <section id="character" className={`${styles["kiko__news"]} p-4`}>
      <div className="text-center font-bold text-[1.5rem] text-ocean-teal-600">
        Characters
      </div>

      <div className={`${styles.scroller} scroller`} data-animated="true">
        <ul
          id="scroller-inner"
          className={`${styles["tag-list"]} ${styles["scroller-inner"]}`}
        >
          <li>
            <Image src={Karkus} alt="karkus" />
          </li>
          <li>
            <Image src={Kiko} alt="karkus" />
          </li>
          <li>
            <Image src={Lola} alt="karkus" />
          </li>
          <li>
            <Image src={Poli} alt="karkus" />
          </li>
          <li>
            <Image src={Patino} alt="Patino" />
          </li>
          <li>
            <Image src={Pupus} alt="Patino" />
          </li>
          <li>
            <Image src={Tingting} alt="Patino" />
          </li>
        </ul>
      </div>
    </section>
  );
};
