import { FC } from "react";
import Link from "next/link";
import styles from "./navbar.module.scss";
type LnDrawerProps = {
  selectLn: (ln: string) => void;
};

export const LnDrawer: FC<LnDrawerProps> = ({ selectLn }) => {
  return (
    <div className={styles["navbar__drawer"]}>
      <ul>
        <li
          onClick={() => selectLn("id")}
          className="p-2 hover:text-blue-aqua cursor-pointer flex items-center gap-2"
        >
          <Link href="id">
            <span className="text-sm">Indonesia</span>{" "}
          </Link>
        </li>
        <li
          onClick={() => selectLn("en")}
          className="p-2 hover:text-blue-aqua cursor-pointer flex items-center gap-2"
        >
          <Link href="en">
            <span className="text-sm">English</span>{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
};
