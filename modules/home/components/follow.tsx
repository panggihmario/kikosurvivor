import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import EsiLogo from "@/public/images/all_log_esi.png";
import MncLogo from "@/public/images/all_log_mnca.png";
import styles from "../styles.module.scss";
import Image from "next/image";
export const Follow = () => {
  return (
    <section className={styles["kiko__follow"] + " py-12 px-4"}>
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
      <div className="flex justify-between items-center">
        <Image width={77} height={58} src={EsiLogo} alt="Esi" />
        <div className="flex items-center  gap-2 mt-4 text-blue-aqua">
          <div className="cursor-pointer">PRIVACY POLICY </div>
          <div className="border-l border-l-white  h-3"></div>
          <div className="cursor-pointer">TERM OF SERVICE</div>
        </div>
        <Image width={77} height={58} src={MncLogo} alt="Mnc" />
      </div>

      <div className="text-center">
        COPYRIGHT © 2023 PT ESPORTS STAR INDONESIA. ALL RIGHTS
      </div>
      <div className="text-center">RESERVED.</div>
    </section>
  );
};
