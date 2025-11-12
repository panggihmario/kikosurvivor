"use client";

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import EsiLogo from "@/public/images/all_log_esi.png";
import MncLogo from "@/public/images/all_log_mnca.png";
import styles from "./styles.module.scss";
import Image from "next/image";
export const Footer = () => {
  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <section className={styles["kiko__footer"] + " py-12 px-4"}>
      <div className="flex justify-center items-center gap-6">
        <div className="p-2 bg-black rounded-full transition-transform duration-300 hover:scale-120 cursor-pointer">
          <FaFacebookF size={24} className="text-blue-aqua hover:text-white" />
        </div>
        <div className="p-2 bg-black rounded-full transition-transform duration-300 hover:scale-120 cursor-pointer">
          <FaInstagram size={24} className="text-blue-aqua hover:text-white" />
        </div>
        <div className="p-2 bg-black rounded-full transition-transform duration-300 hover:scale-120 cursor-pointer">
          <FaYoutube size={24} className="text-blue-aqua hover:text-white" />
        </div>
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
