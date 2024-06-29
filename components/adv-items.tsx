import type { NextPage } from "next";
import Adv from "./adv";
import Adv1 from "./adv1";
import styles from "./adv-items.module.css";

export type AdvItemsType = {
  className?: string;
};

const AdvItems: NextPage<AdvItemsType> = ({ className = "" }) => {
  return (
    <section className={[styles.advWrapper, className].join(" ")}>
      <div className={styles.adv}>
        <div className={styles.adv12}>
          <Adv
            imgAdv1="/img-adv-1@2x.png"
            prop="Лучшие ингрединты"
            prop1="Что-то про суперкачество, лучших поваров, свежесть и т.д."
          />
          <Adv1
            imgAdv1="/img-adv-2@2x.png"
            prop="Упаковка"
            prop1="Что-то про суперкоробочки и бантики и бла бла бла"
          />
        </div>
        <div className={styles.adv34}>
          <div className={styles.adv3}>
            <img
              className={styles.imgAdv3Icon}
              loading="lazy"
              alt=""
              src="/img-adv-3@2x.png"
            />
            <div className={styles.textAdv3}>
              <div className={styles.div}>Получение в день заказа</div>
              <div className={styles.div1}>
                В день заказа доставка курьером или самовывоз
              </div>
            </div>
          </div>
          <div className={styles.adv4}>
            <img
              className={styles.imgAdv4Icon}
              loading="lazy"
              alt=""
              src="/img-adv-4@2x.png"
            />
            <div className={styles.textAdv5}>
              <div className={styles.div2}>Анонимная доставка</div>
              <div className={styles.div3}>
                Можем преподнести Ваш заказ как анонимный подарок
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvItems;
