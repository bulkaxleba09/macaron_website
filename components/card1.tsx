import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./card1.module.css";

export type Card1Type = {
  className?: string;
  bgCard2?: string;
  icCard2?: string;
  prop?: string;
  prop1?: string;
  vector?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propBackgroundImage?: CSSProperties["backgroundImage"];
};

const Card1: NextPage<Card1Type> = ({
  className = "",
  bgCard2,
  icCard2,
  prop,
  prop1,
  propPadding,
  propBackgroundImage,
  vector,
}) => {
  const card2Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      backgroundImage: propBackgroundImage,
    };
  }, [propPadding, propBackgroundImage]);

  return (
    <button className={[styles.card2, className].join(" ")} style={card2Style}>
      <img className={styles.bgCard2Icon} alt="" src="bgCard2.png" />
      <div className={styles.icCard2Wrapper}>
        <img
          className={styles.icCard2Icon}
          loading="lazy"
          alt=""
          src={icCard2}
        />
      </div>
      <div className={styles.card2Inner}>
        <div className={styles.parent}>
          <h3 className={styles.h3}>{prop}</h3>
          <div className={styles.iconLinks}>
            <img className={styles.vectorIcon} alt="" src="vector-8.svg" />
          </div>
        </div>
      </div>
      <div className={styles.div}>{prop1}</div>
    </button>
  );
};

export default Card1;
