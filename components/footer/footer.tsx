"use client";

import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import EsiLogo from "@/public/images/all_log_esi.png";
import MncLogo from "@/public/images/all_log_mnca.png";
import styles from "./styles.module.scss";
import Image from "next/image";
import { VAR } from "@/lib/variable";
import Link from "next/link";
export const Footer = () => {
  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };

  const medsosData = [
    {
      url: VAR.fb,
      icon: FaFacebookF,
    },
    {
      url: VAR.ig,
      icon: FaInstagram,
    },
    {
      url: VAR.ytEsi,
      icon: FaYoutube,
    },
    {
      url: VAR.tiktok,
      icon: FaTiktok,
    },
  ];

  return (
    <section className={styles["kiko__footer"] + " py-12 px-4"}>
      <div className="flex justify-center items-center gap-6">
        <a href={VAR.fb}></a>
        {medsosData.map((med, index) => {
          const Icon = med.icon;

          return (
            <Link
              key={index}
              href={med.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p-2 bg-black rounded-full transition-transform duration-300 hover:scale-110 cursor-pointer">
                <Icon size={24} className="text-blue-aqua hover:text-white" />
              </div>
            </Link>
          );
        })}
      </div>
      <div className="flex mt-4 flex-col sm:flex-row md:flex-row justify-between items-center gap-4">
        <Image width={77} height={58} src={EsiLogo} alt="Esi" />
        <div className="flex order-3  sm:order-2 md:order-2 items-center  gap-2 mt-4 text-blue-aqua">
          <div
            onClick={() =>
              handleClick("https://kikosurvivor.mncgames.com/privacypolicy/")
            }
            className="z-20 cursor-pointer"
          >
            PRIVACY POLICY{" "}
          </div>
          <div className="border-l border-l-white  h-3"></div>
          <div
            onClick={() =>
              handleClick("https://kikosurvivor.mncgames.com/termsofservice/")
            }
            className="cursor-pointer"
          >
            TERM OF SERVICE
          </div>
        </div>
        <Image
          className="order-2 sm:order-3 md:order-3"
          width={77}
          height={58}
          src={MncLogo}
          alt="Mnc"
        />
      </div>

      <div className="text-center">
        COPYRIGHT © 2023 PT ESPORTS STAR INDONESIA. ALL RIGHTS
      </div>
      <div className="text-center">RESERVED.</div>
    </section>
  );
};
