import type { NextPage } from "next";
import styles from "./adv.module.css";

export type AdvType = {
  className?: string;
  imgAdv1?: string;
  prop?: string;
  prop1?: string;
};

const Adv: NextPage<AdvType> = ({ className = "", imgAdv1, prop, prop1 }) => {
  return (
    <div className={[styles.adv1, className].join(" ")}>
      <img className={styles.imgAdv1Icon} loading="lazy" alt="" src= "imgAdv1.png" />
      <div className={styles.textAdv1}>
        <div className={styles.div}>{prop}</div>
        <div className={styles.div1}>{prop1}</div>
      </div>
    </div>
  );
};

export default Adv;
