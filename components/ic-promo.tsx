import type { NextPage } from "next";
import styles from "./ic-promo.module.css";

export type IcPromoType = {
  className?: string;
};

const IcPromo: NextPage<IcPromoType> = ({ className = "" }) => {
  return (
    <div className={[styles.icPromo, className].join(" ")}>
      <img className={styles.flowerIcon} alt="" src="/flower.svg" />
      <div className={styles.div}>
        <img
          className={styles.vectorIcon}
          loading="lazy"
          alt=""
          src="/vector.svg"
        />
        <b className={styles.b}>100%</b>
      </div>
    </div>
  );
};

export default IcPromo;
