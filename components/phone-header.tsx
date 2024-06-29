import type { NextPage } from "next";
import IcBurger from "./ic-burger";
import IcLogoIcon from "./ic-logo-icon";
import IcCart from "./ic-cart";
import styles from "./phone-header.module.css";

export type PhoneHeaderType = {
  className?: string;
};

const PhoneHeader: NextPage<PhoneHeaderType> = ({ className = "" }) => {
  return (
    <header className={[styles.phoneHeader, className].join(" ")}>
      <div className={styles.bgPhoneHeader} />
      <div className={styles.phoneHeader1}>
        <div className={styles.phoneHeaderContent}>
          <IcBurger />
        </div>
        <IcLogoIcon />
        <div className={styles.cartIconWrapper}>
          <IcCart />
        </div>
      </div>
    </header>
  );
};

export default PhoneHeader;
