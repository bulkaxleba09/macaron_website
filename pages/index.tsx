import type { NextPage } from "next";
import PhoneHeader from "../components/phone-header";
import Content from "../components/content";
import Meni from "../components/meni";
import Hero from "../components/hero";
import Card11 from "../components/card11";
import Card3 from "../components/card3";
import Card from "../components/card";
import Sale from "../components/sale";
import Holiday from "../components/holiday";
import Gifts from "../components/gifts";
import NewsCards from "../components/news-cards";
import AdvItems from "../components/adv-items";
import Footer from "../components/footer";
import styles from "./index.module.css";

const Frame: NextPage = () => {
  return (
    <div className={styles.div}>
      <PhoneHeader />
      <Content />
      <Meni />
      <Hero />
      <section className={styles.cardsWrapper}>
        <div className={styles.cards}>
          <Card11 />
          <Card3 />
          <div className={styles.card56}>
            <Card
              bgCard1="/bg-card-5@2x.png"
              icCard1="ic-card-5.svg"
              prop="Корпоративные подарки"
              prop1="От 85 руб за шт. С уникальным дизайном. "
              prop2="Приятный комплимент для коллег и партнеров"
              propBackgroundImage="url('/bg-card-5@2x.png')"
              vector="/vector-8.svg"
            />
            <Card
              bgCard1="/bg-card-6@2x.png"
              icCard1="ic-card-6.svg"
              prop="Оптовые поставки"
              prop1="Предложение для кофеен, кафе, отелей и т.д."
              prop2="Посмотрите условия сотрудничества и отзывы."
              propBackgroundImage="url('/bg-card-6@2x.png')"
              vector="/vector-8.svg"
            />
          </div>
        </div>
      </section>
      <Sale />
      <Holiday />
      <Gifts />
      <div className={styles.wrapper}>
        <h1 className={styles.h1}>Новости</h1>
      </div>
      <NewsCards />
      <div className={styles.cardCarousel}>
        <h1 className={styles.h11}>Мы обо всём позаботились</h1>
      </div>
      <AdvItems />
      <Footer />
    </div>
  );
};

export default Frame;
