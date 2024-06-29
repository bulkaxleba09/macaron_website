import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./menu-item.module.css";

export type MenuItemType = {
  className?: string;
  prop?: string;
  vector?: string;

  /** Style props */
  frameDivWidth?: CSSProperties["width"];
};

const MenuItem: NextPage<MenuItemType> = ({
  className = "",
  prop,
  vector,
  frameDivWidth,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth,
    };
  }, [frameDivWidth]);

  return (
    <div
      className={[styles.meniInner, className].join(" ")}
      style={frameDivStyle}
    >
      <a className={styles.parent}>
        <div className={styles.div}>{prop}</div>
        <div className={styles.vectorWrapper}>
          <img className={styles.vectorIcon} alt="" src={vector} />
        </div>
      </a>
    </div>
  );
};

export default MenuItem;
