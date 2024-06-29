import type { NextPage } from "next";
import Card1 from "./card1";
import styles from "./card3.module.css";

export type Card3Type = {
  className?: string;
};

const Card3: NextPage<Card3Type> = ({ className = "" }) => {
  return (
    <div className={[styles.card34, className].join(" ")}>
      <button className={styles.card3}>
        <img className={styles.bgCard3Icon} alt="" src="/bg-card-3@2x.png" />
        <div className={styles.icCard3Wrapper}>
          <img
            className={styles.icCard3Icon}
            loading="lazy"
            alt=""
            src="/ic-card-3.svg"
          />
        </div>
        <div className={styles.parent}>
          <h3 className={styles.h3}>Набор с индивидуальной печатью</h3>
          <div className={styles.vectorWrapper}>
            <img className={styles.vectorIcon} alt="" src="/vector-8.svg" />
          </div>
        </div>
        <div className={styles.wrapper}>
          <div
            className={styles.div}
          >{`Собрать набор макарон с уникальным дизайном. `}</div>
        </div>
      </button>
      <Card1
        bgCard2="/bg-card-4@2x.png"
        icCard2="/ic-card-4.svg"
        prop="Свадебные предложения"
        prop1="Нежные пирожные макаронс с разными вкусами для украшения вашего свадебного торжества"
        propPadding="36px 20px 35px"
        propBackgroundImage="url('/bg-card-4@2x.png')"
        vector="/vector-8.svg"
      />
    </div>
  );
};

export default Card3;
