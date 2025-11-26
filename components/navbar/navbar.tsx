"use client";
import Image from "next/image";
import styles from "./navbar.module.scss";
import { FaXmark, FaBars, FaGlobe } from "react-icons/fa6";
import KikoLogo from "@/public/images/all_logo_gameplus.png";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { LnDrawer } from "./ln-drawer";
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname(); // e.g. /en/event
  const handleOpenMenu = () => {
    const menu = document.getElementById("navbar-menu");
    if (menu) {
      menu.classList.add(styles["navbar__show-menu"]);
      setIsMenuOpen(true);
      setIsDrawerOpen(false);
    }
  };

  const handleCloseMenu = () => {
    const menu = document.getElementById("navbar-menu");
    if (menu) {
      menu.classList.remove(styles["navbar__show-menu"]);
      setIsMenuOpen(false);
    }
  };

  const handleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    handleCloseMenu();
  };

  const selectLn = (ln: string) => {
    setIsDrawerOpen(false);
    const parts = pathname.split("/");
    parts[1] = ln;
    router.push(parts.join("/"));
  };
  return (
    <nav className={styles.navbar}>
      <div>
        <Link href="/">
          <Image width={120} height={40} src={KikoLogo} alt="Kiko Logo" />
        </Link>
      </div>
      <div className={`${styles["navbar__menu"]} h-full`} id="navbar-menu">
        <ul className={`${styles["navbar__list"]} h-full`}>
          <li className="flex items-center gap-2">
            <Link className={styles["navbar__event"]} href="/event">
              Event
            </Link>
          </li>
          {/* <li className="flex items-center gap-2">
            <Link href="/play">Play Now!</Link>
          </li> */}
          <li className="flex items-center gap-2">
            <Link href="/watch">Watch</Link>
          </li>
        </ul>
      </div>
      <div className="relative flex items-center justify-center gap-3">
        <div
          onClick={handleDrawer}
          className="border border-white rounded-full p-px cursor-pointer"
        >
          <FaGlobe color="white" />
        </div>
        {/* <FlagEnIcon /> */}
        {isDrawerOpen && <LnDrawer selectLn={selectLn} />}
        <div className={styles["navbar__icon"]}>
          {!isMenuOpen ? (
            <FaBars onClick={handleOpenMenu} size={20} color="white" />
          ) : (
            <FaXmark onClick={handleCloseMenu} size={20} color="white" />
          )}
        </div>
      </div>
    </nav>
  );
};
