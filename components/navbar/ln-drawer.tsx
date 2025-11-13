import { FC } from "react";
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
          <div>
            <span className="text-sm">Indonesia</span>{" "}
          </div>
        </li>
        <li
          onClick={() => selectLn("en")}
          className="p-2 hover:text-blue-aqua cursor-pointer flex items-center gap-2"
        >
          <div>
            <span className="text-sm">English</span>{" "}
          </div>
        </li>
      </ul>
    </div>
  );
};
