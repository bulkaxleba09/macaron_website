import type { NextPage } from "next";
import styles from "./holiday.module.css";

export type HolidayType = {
  className?: string;
};

const Holiday: NextPage<HolidayType> = ({ className = "" }) => {
  return (
    <section
      className={[styles.upcomingHolidaysContentWrapper, className].join(" ")}
    >
      <div className={styles.upcomingHolidaysContent}>
        <div className={styles.upcomingHolidaysTitleContai}>
          <h1 className={styles.h1}>Ближайшие праздники</h1>
        </div>
        <div className={styles.holidaysContainer}>
          <div className={styles.holidaysImageContainer}>
            <img
              className={styles.holidaysMacaronIcon}
              loading="lazy"
              alt=""
              src="holidays-macaron@2x.png"
            />
          </div>
          <div className={styles.holidaysList}>
            <b className={styles.b}>
              <p className={styles.p}>{`Скоро `}</p>
              <p className={styles.p1}>День Рождения</p>
            </b>
            <div className={styles.div}>
              <p className={styles.p2}>1 января</p>
              <p className={styles.p3}>Новый Год</p>
              <p className={styles.p4}>2021</p>
            </div>
            <div className={styles.div1}>
              <p className={styles.p5}>14 февраля</p>
              <p className={styles.p6}>День Святого</p>
              <p className={styles.p7}>Валентина</p>
            </div>
            <div className={styles.div2}>
              <p className={styles.p8}>23 февраля</p>
              <p className={styles.p9}>День Защитника</p>
              <p className={styles.p10}>Отечества</p>
            </div>
            <div className={styles.div3}>
              <p className={styles.p11}>8 марта</p>
              <p className={styles.p12}>Международный</p>
              <p className={styles.p13}>Женский День</p>
            </div>
            <div className={styles.div4}>
              <p className={styles.p14}>9 марта</p>
              <p className={styles.p15}>День Сурка</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Holiday;
