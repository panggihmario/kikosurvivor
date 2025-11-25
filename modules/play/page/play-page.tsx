import BgPlay from "@/public/images/hm_bg_home.png";
import Image from "next/image";
import Kikorun from "@/public/images/logo_kikosurvivor.png";
import AppStoreButton from "@/public/images/all_dwl_aps.png";
import PlayStoreButton from "@/public/images/all_dwl_pls.png";
import { getDictionary } from "@/locales";
export const PlayPage = async ({
  params,
}: {
  params: Promise<{ lang: "en" | "id" }>;
}) => {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return (
    <section className="pt-12">
      <div className="kiko-bg">
        <div className="h-full relative">
          <Image alt="bg" src={BgPlay} />
          <div className="-translate-y-1/2 left-1/2 -translate-x-1/2 z-10 absolute top-1/2 ">
            <div className="flex flex-col items-center gap-4">
              <div className="text-blue-aqua font-bold text-3xl">
                {dict.common.play}
              </div>
              <Image width={200} src={Kikorun} alt="kikorun" />
              <div className="text-blue-aqua font-bold text-3xl">
                {dict.common.now}
              </div>
              {/* <div className="flex flex-col mobile-xl:flex-row  gap-2 items-center">
                <Image
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
      </div>
    </section>
  );
};
