import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import styles from "../styles.module.scss";
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
    </section>
  );
};
