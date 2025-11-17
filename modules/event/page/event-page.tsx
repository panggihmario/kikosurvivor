import styles from "../styles.module.scss";
import Beyond from "@/public/images/hm_log_wcg_2.jpg";
import Image from "next/image";
import { useGetNews } from "@/modules/home/hooks/use-get-news";
import { VAR } from "@/lib/variable";

export default async function EventPage() {
  const loopItems = [...Array.from({ length: 4 }, (_, i) => i + 1)];

  const { dta } = await useGetNews(false);
  return (
    <main className="pt-12 min-h-[70vh] kiko-bg ">
      <div className={styles["kiko-event__list"]}>
        <ul className="grid gap-4">
          {dta.map((d, idx) => {
            return (
              <li
                key={idx}
                className="grid sm:grid-cols-[max-content_1fr] gap-1 sm:gap-4 border-b border-b-blue-aqua sm:border-b-0 max-sm:pb-2"
              >
                <div className={styles["kiko-event__img"]}>
                  <Image src={Beyond} alt="beyond" />
                </div>
                <div>
                  <div className="font-bold text-sm text-charcoal-900">
                    {d.title}
                  </div>
                  <div className="line-clamp-4 max-sm:hidden text-[10px] h-fit text-gray-600">
                    Halo semuanya! Kami masih terus mencari metode baru untuk
                    memerangi cheater dan memastikan pengalaman yang
                    menyenangkan bagi semua pemain. Sebagai bagian dari upaya
                    ini, kami akan memberikan sanksi atas kecurangan berdasarkan
                    sifat dan tingkat keparahan pelanggarannya. Tim kami akan
                    secara aktif memantau game sepanjang waktu untuk mendeteksi
                    dan mengambil tindakan terhadap cheater setiap hari. Selain
                    itu, kami akan membagikan kabar tentang kemajuan kami secara
                    berkala. Jika kalian menemukan peri
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
