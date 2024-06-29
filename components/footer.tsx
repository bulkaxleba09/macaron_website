import type { NextPage } from "next";
import styles from "./footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.bgFooter} />
      <div className={styles.footerContent}>
        <div className={styles.footerTop}>
          <div className={styles.footerAdv}>
            <div className={styles.footerAdv1}>
              <div className={styles.footerAdvantageIcon}>
                <img
                  className={styles.icAdv11Icon}
                  loading="lazy"
                  alt=""
                  src="ic-adv-11.svg"
                />
              </div>
              <div className={styles.div}>
                <p className={styles.p}>{`Готовим вручную `}</p>
                <p className={styles.p1}>и с любовью</p>
              </div>
            </div>
            <div className={styles.footerAdv2}>
              <div className={styles.iconAdv2Wrapper}>
                <img
                  className={styles.iconAdv2}
                  loading="lazy"
                  alt=""
                  src="icon_adv_2.svg"
                />
              </div>
              <div className={styles.div1}>
                <p className={styles.p2}>Доставим</p>
                <p className={styles.p3}>в день заказа</p>
              </div>
            </div>
            <div className={styles.footerAdv3}>
              <div className={styles.vectorWrapper}>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="vector-13.svg"
                />
              </div>
              <div className={styles.div2}>
                <p className={styles.p4}>{`100% `}</p>
                <p className={styles.p5}>миндальная мука</p>
                <p className={styles.p6}>и натуральные ингредиенты</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.div3}>
          <p className={styles.p7}>
            © 2021 МакароншопООО "Квантум", Санкт-Петербург, улица Маршала
            Тухачевского, дом 22
          </p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.info}>
          <div className={styles.info1}>
            <div className={styles.div4}>Информация</div>
            <div className={styles.div5}>
              <p className={styles.p8}>О компании</p>
              <p className={styles.p9}>Гарантии вкуса и свежести</p>
              <p className={styles.p10}>Доставка и оплата</p>
              <p className={styles.p11}>Контакты</p>
            </div>
          </div>
          <div className={styles.catalog}>
            <div className={styles.div6}>Каталог</div>
            <div className={styles.div7}>
              <p className={styles.p12}>Каталог десертов</p>
              <p className={styles.p13}>Готовые наборы</p>
              <p className={styles.p14}>Собрать свой набор</p>
              <p className={styles.p15}>Акции</p>
            </div>
          </div>
          <div className={styles.buisness}>
            <div className={styles.div8}>ДЛЯ БИЗНЕСА</div>
            <div className={styles.div9}>
              <p className={styles.p16}>Корпоративные подарки</p>
              <p className={styles.p17}>Для юридических лиц</p>
              <p className={styles.p18}>Оповикам</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerContacts}>
        <div className={styles.contactsContainer}>
          <div className={styles.workTime}>
            <div className={styles.dayTime}>+7 (812) 309 82 88</div>
            <div className={styles.div10}>с 9:00 до 21:00</div>
          </div>
          <div className={styles.socialLinks}>
            <div className={styles.socialIcons}>
              <img
                className={styles.instIcon}
                loading="lazy"
                alt=""
                src="inst.svg"
              />
              <img
                className={styles.facebookIcon}
                loading="lazy"
                alt=""
                src="facebook.svg"
              />
              <img
                className={styles.vkIcon}
                loading="lazy"
                alt=""
                src="vk.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
