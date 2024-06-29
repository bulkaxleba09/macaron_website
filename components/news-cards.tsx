import type { NextPage } from "next";
import News from "./news";
import styles from "./news-cards.module.css";

export type NewsCardsType = {
  className?: string;
};

const NewsCards: NextPage<NewsCardsType> = ({ className = "" }) => {
  return (
    <section className={[styles.newsContentWrapper, className].join(" ")}>
      <div className={styles.newsContent}>
        <div className={styles.newsBlock}>
          <div className={styles.news}>
            <News
              newsUmg1="news-umg-1@2x.png"
              emptyNewsDescription="25.02.2023"
              prop="Скоро главный праздник весны!"
              prop1="Девушки любят, когда вкусно, красиво и натурально. Смотрите больше наборов с десертами ручной работы"
            />
            <News
              newsUmg1="news-umg-2@2x.png"
              emptyNewsDescription="17.02.2023"
              prop="Конкурс на 23 февраля!"
              prop1="День Защитника Отечества уже совсем скоро! Порадуйте своего сладкоежку с помощью наборов от МакаронШоп!"
            />
            <News
              newsUmg1="news-umg-3@2x.png"
              emptyNewsDescription="11.02.2023"
              prop="Экспресс-конкурс ко дню Святого Валентина"
              prop1="Подарок уже через 2 дняДень всех влюблённых не за горами. Расскажи о своих чувствах с помощью сладкой валентинки от МакаронШоп"
            />
          </div>
          <div className={styles.paginationNews}>
            <div className={styles.paginationDot} />
            <div className={styles.paginationDot1} />
            <div className={styles.paginationDot2} />
          </div>
        </div>
        <button className={styles.buttonNewss}>
          <div className={styles.div}>Все новости</div>
        </button>
      </div>
    </section>
  );
};

export default NewsCards;
