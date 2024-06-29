import type { NextPage } from "next";
import styles from "./logo-hero.module.css";

export type LogoHeroType = {
  className?: string;
};

const LogoHero: NextPage<LogoHeroType> = ({ className = "" }) => {
  return (
    <div className={[styles.logoHero, className].join(" ")}>
      <h3 className={styles.macaronshop}>Macaronshop</h3>
      <div className={styles.since2013Parent}>
        <div className={styles.since2013}>since 2013</div>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
      </div>
    </div>
  );
};

export default LogoHero;
