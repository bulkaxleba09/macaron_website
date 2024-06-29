import type { NextPage } from "next";
import styles from "./news.module.css";

export type NewsType = {
  className?: string;
  newsUmg1?: string;
  emptyNewsDescription?: string;
  prop?: string;
  prop1?: string;
};

const News: NextPage<NewsType> = ({
  className = "",
  newsUmg1,
  emptyNewsDescription,
  prop,
  prop1,
}) => {
  return (
    <div className={[styles.news1, className].join(" ")}>
      <img
        className={styles.newsUmg1Icon}
        loading="lazy"
        alt=""
        src="newsUmg1.svg"
      />
      <div className={styles.newsText1}>
        <div className={styles.emptyNewsDescription}>
          {emptyNewsDescription}
        </div>
        <div className={styles.div}>{prop}</div>
        <div className={styles.div1}>{prop1}</div>
      </div>
    </div>
  );
};

export default News;
