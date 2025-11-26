import { getDictionary } from "@/locales";
import Image from "next/image";
import Logo from "@/public/images/logo_kikosurvivor.png";
import AppStoreButton from "@/public/images/all_dwl_aps.png";
import PlayStoreButton from "@/public/images/all_dwl_pls.png";
import Plus from "@/public/images/hm_pre_3_plus.png";
import Person from "@/public/images/hm_pre_person.png";
import Star from "@/public/images/hm_pre_star.png";
import styles from "../styles.module.scss";
import { NewsComponent, Intro, Characters, Features } from "../components";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: "en" | "id" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return (
    <div>
      <main id="home">
        <div className={styles["kiko__video-wrapper"]}>
          <video
            autoPlay
            className="w-full h-full object-cover"
            muted
            loop
            src="/video/kiko.mp4"
          ></video>
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2  w-full flex flex-col items-center justify-center gap-6 px-4">
            <div className="grid gap-3 opacity-70">
              <Image
                width={200}
                height={200}
                objectFit="contain"
                className="mobile-xl:w-[200px] mobile-xl:h-[200px] mx-auto"
                src={Logo}
                alt="Kiko Logo"
              />
              <div className="flex gap-3 items-center justify-between bg-ocean-navy p-4 rounded-lg h-auto">
                <div className="flex flex-col items-center gap-2">
                  <Image
                    width={40}
                    height={40}
                    objectFit="contain"
                    src={Star}
                    className="mobile-xl:w-16 mobile-xl:h-16"
                    alt="App store Download Button"
                  />
                  <div className="text-xs mobile-xl:text-base">4,0 Rating</div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Image
                    width={40}
                    height={40}
                    objectFit="contain"
                    src={Plus}
                    className="mobile-xl:w-16 mobile-xl:h-16"
                    alt="App store Download Button"
                  />
                  <div className="text-xs mobile-xl:text-base">
                    106 Rb {dict.common.players}
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Image
                    width={40}
                    height={40}
                    objectFit="contain"
                    src={Person}
                    alt="App store Download Button"
                    className="mobile-xl:w-16 mobile-xl:h-16"
                  />
                  <div className="text-xs mobile-xl:text-base">
                    {dict.common.allAges}
                  </div>
                </div>
              </div>
              {/* <div className="flex flex-col mobile-xl:flex-row  gap-2 items-center">
                <Imag
                  width={200}
                  height={60}
                  objectFit="contain"
                  src={AppStoreButton}
                  alt="App store Download Button"
                />
                <Image
                  width={200}
                  height={60}
                  objectFit="contain"
                  src={PlayStoreButton}
                  alt="App store Download Button"
                />
              </div> */}
            </div>
          </div>
        </div>
        <NewsComponent lang={lang} />
        <Intro lang={lang} />
        <Characters />
        <Features dict={dict} />
        {/* <Follow /> */}
      </main>
    </div>
  );
}
