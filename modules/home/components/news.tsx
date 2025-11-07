import styles from "../styles.module.scss";
import Beyond from "@/public/images/hm_log_wcg_2.jpg";
import Image from "next/image";
export const News = () => {
  const loopItems = [...Array.from({ length: 4 }, (_, i) => i + 1)];
  return (
    <section id="news" className={styles["kiko__news"]}>
      <div className="p-4">
        <div className="text-ocean-teal-600 text-5xl text-center">Berita</div>
        <div className="flex gap-2 items-center justify-center flex-wrap ">
          {loopItems.map((num, idx) => (
            <div>
              <Image src={Beyond} width={200} height={100} alt="news" />
              <div className="bg-blue-aqua">
                <div className="text-xs">2025/10/30</div>
                <div className="text-xs">Gerakan anti match making</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
