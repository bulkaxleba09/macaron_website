import type { NextPage } from "next";
import MenuItem from "./menu-item";
import styles from "./meni.module.css";

export type MeniType = {
  className?: string;
};

const Meni: NextPage<MeniType> = ({ className = "" }) => {
  return (
    <header className={[styles.meni, className].join(" ")}>
      <div className={styles.meniInner}>
        <a className={styles.discountBannerContentParent}>
          <div className={styles.discountBannerContent}>
            <div className={styles.div}>СЛАДКИЕ ДНИ</div>
          </div>
          <div className={styles.ellipseParent}>
            <div className={styles.frameChild} />
            <div className={styles.logoCount}>%</div>
          </div>
        </a>
      </div>
      <MenuItem prop="подарочные наборы" vector="/vector-5.svg" />
      <div className={styles.wrapper}>
        <a className={styles.a}>Собрать набор</a>
      </div>
      <div className={styles.a1}>
        <img className={styles.icon} alt="" loading="lazy" src="logologo.svg" />
      </div>
      <div className={styles.container}>
        <a className={styles.a2}>Создать дизайн</a>
      </div>
      <MenuItem prop="КОМПАНИЯМ" vector="/vector-5.svg" frameDivWidth="unset" />
      <MenuItem
        prop="ВЕСЬ КАТАЛОГ"
        vector="/vector-5.svg"
        frameDivWidth="unset"
      />
    </header>
  );
};

export default Meni;
