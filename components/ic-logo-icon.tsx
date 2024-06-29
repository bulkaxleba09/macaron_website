import type { NextPage } from "next";
import styles from "./ic-logo-icon.module.css";

export type IcLogoIconType = {
  className?: string;
};

const IcLogoIcon: NextPage<IcLogoIconType> = ({ className = "" }) => {
  return (
    <img
      className={[styles.icLogoIcon, className].join(" ")}
      loading="lazy"
      alt=""
      src="/ic-logo.svg"
    />
  );
};

export default IcLogoIcon;
