import Image from "next/image";
import Rcti from "@/public/images/wh_prt_rcti.png";
import Rctiplus from "@/public/images/wh_prt_rcti_plus_2.png";
import Netflix from "@/public/images/wh_prt_nfx.png";
import Visionplus from "@/public/images/wh_prt_vp.png";
import Youtube from "@/public/images/wh_prt_yt.png";
import Mnctv from "@/public/images/wh_prt_mnctv.png";
import KikoBgMovie from "@/public/images/wh_ads_bg.jpg";
export const WatchPage = () => {
  return (
    <section className="pt-12">
      <div className="kiko-bg p-10">
        <div className="grid gap-4 ">
          <div className="text-charcoal-900 mt-4 font-bold text-[1.5rem] uppercase text-center">
            ayo nonton petualangan kiko di
          </div>
          <div className="grid grid-cols-6 px-4">
            <Image src={Rcti} alt="rcti" />
            <Image src={Mnctv} alt="rcti" />
            <Image src={Visionplus} alt="rcti" />
            <Image src={Netflix} alt="rcti" />
            <Image src={Youtube} alt="rcti" />
            <Image src={Rctiplus} alt="rcti" />
          </div>
          <div className="w-120 aspect-video m-auto">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/UMKvyqifQGg"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div>
        <Image src={KikoBgMovie} alt="kiko movie" />
      </div>
      <div className="bg-navy-blue font-dimbo text-xl">
        <div className="kiko-width m-auto py-6 grid gap-4">
          <p className="">
            Setelah diluncurkan dengan sukses pada Februari 2016 di RCTI, salah
            satu stasiun TV Free-to-Air nomor 1 dengan jangkauan terluas di
            Indonesia.
          </p>
          <p>
            KIKO telah menjadi seri animasi anak-anak teratas di Indonesia dan
            dengan cepat mendapatkan banyak minat dari pasar Internasional.
          </p>
          <p>
            Nilai yang ingin disampaikan adalah{" "}
            <span className="text-sky-blue">persahabatan</span>,{" "}
            <span className="text-lime-green"> kekeluargaan</span>,
            <span className="text-sunset-orange"> suka menolong</span>, dan{" "}
            <span className="text-coral-red"> pantang menyerah</span>. Itu yang
            dicerminkan karakter KIKO di serialnya.
          </p>
        </div>
      </div>
    </section>
  );
};
