import type { NextPage } from "next";
import styles from "./adv1.module.css";

export type Adv1Type = {
  className?: string;
  imgAdv1?: string;
  prop?: string;
  prop1?: string;
};

const Adv1: NextPage<Adv1Type> = ({ className = "", imgAdv1, prop, prop1 }) => {
  return (
    <div className={[styles.adv2, className].join(" ")}>
      <img className={styles.imgAdv2Icon} loading="lazy" alt="" src= "imgAdv1.png" />
      <div className={styles.textAdv2}>
        <div className={styles.div}>{prop}</div>
        <div className={styles.div1}>{prop1}</div>
      </div>
    </div>
  );
};

export default Adv1;
