import type { NextPage } from "next";
import styles from "./ic-cart.module.css";

export type IcCartType = {
  className?: string;
};

const IcCart: NextPage<IcCartType> = ({ className = "" }) => {
  return (
    <button className={[styles.icCart, className].join(" ")}>
      <img className={styles.icCartChild} alt="" src="/group-3.svg" />
      <div className={styles.locationPin} />
      <a className={styles.cityName}>4</a>
    </button>
  );
};

export default IcCart;
