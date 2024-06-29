import type { NextPage } from "next";
import styles from "./asle.module.css";

export type AsleType = {
  className?: string;
  imgSale3?: string;
  prop?: string;
  prop1?: string;
  prop2?: string;
  vector2?: string;
};

const Asle: NextPage<AsleType> = ({
  className = "",
  imgSale3,
  prop,
  prop1,
  prop2,
  vector2,
}) => {
  return (
    <div className={[styles.asle3, className].join(" ")}>
      <div className={styles.imgSale3Parent}>
        <img className={styles.imgSale3Icon} alt="" src= "imgSale3.png" />
        <div className={styles.wrapper}>
          <div className={styles.div}>{prop}</div>
        </div>
        <img className={styles.frameChild} alt="" src= "vector2.svg" />
      </div>
      <div className={styles.textSale3}>
        <div className={styles.div1}>
          <p className={styles.p}>{prop1}</p>
          <p className={styles.p1}>{prop2}</p>
        </div>
      </div>
    </div>
  );
};

export default Asle;
