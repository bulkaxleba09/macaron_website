import type { NextPage } from "next";
import styles from "./ic-burger.module.css";

export type IcBurgerType = {
  className?: string;
};

const IcBurger: NextPage<IcBurgerType> = ({ className = "" }) => {
  return (
    <button className={[styles.icBurger, className].join(" ")}>
      <div className={styles.icBurgerChild} />
      <div className={styles.icBurgerItem} />
      <div className={styles.icBurgerInner} />
    </button>
  );
};

export default IcBurger;
