import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./card.module.css";

export type CardType = {
  className?: string;
  bgCard1?: string;
  icCard1?: string;
  prop?: string;
  prop1?: string;
  prop2?: string;
  vector?: string;

  /** Style props */
  propBackgroundImage?: CSSProperties["backgroundImage"];
};

const Card: NextPage<CardType> = ({
  className = "",
  bgCard1,
  icCard1,
  prop,
  prop1,
  prop2,
  propBackgroundImage,
  vector,
}) => {
  const card1Style: CSSProperties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <button className={[styles.card1, className].join(" ")} style={card1Style}>
      <img className={styles.bgCard1Icon} alt="" src="bgCard1.png" />
      <div className={styles.icCard1Wrapper}>
        <img
          className={styles.icCard1Icon}
          loading="lazy"
          alt=""
          src={icCard1}
        />
      </div>
      <div className={styles.card1Inner}>
        <div className={styles.parent}>
          <h3 className={styles.h3}>{prop}</h3>
          <div className={styles.vectorWrapper}>
            <img className={styles.vectorIcon} alt="" src="vector-8.svg" />
          </div>
        </div>
      </div>
      <div className={styles.div}>
        <p className={styles.p}>{prop1}</p>
        <p className={styles.p1}>{prop2}</p>
      </div>
    </button>
  );
};

export default Card;
