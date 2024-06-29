import type { NextPage } from "next";
import IcPromo from "./ic-promo";
import styles from "./content.module.css";

export type ContentType = {
  className?: string;
};

const Content: NextPage<ContentType> = ({ className = "" }) => {
  return (
    <section className={[styles.content, className].join(" ")}>
      <header className={styles.promo}>
        <div className={styles.icAroowLeftWrapper}>
          <img
            className={styles.icAroowLeftIcon}
            alt=""
            src="ic-aroow-left.svg"
          />
        </div>
        <div className={styles.promoImageWrapper}>
          <IcPromo />
          <div className={styles.wrapper}>
            <div className={styles.div}>
              МИНДАЛЬНАЯ МУКА И НАТУРАЛЬНЫЕ ИНГРЕДИЕНТЫ
            </div>
          </div>
        </div>
        <div className={styles.icArrowRightWrapper}>
          <img
            className={styles.icArrowRightIcon}
            alt=""
            src="ic-arrow-right.svg"
          />
        </div>
      </header>
      <header className={styles.nav}>
        <div className={styles.navLinksContentWrapper}>
          <div className={styles.navLinksContent}>
            <a className={styles.a}>Гарантия свежести</a>
            <a className={styles.a1}>Доставка и оплата</a>
            <div className={styles.div1}>Оптовые поставки</div>
            <a className={styles.a2}>Контакты</a>
          </div>
        </div>
        <button className={styles.placeParent}>
          <div className={styles.place}>
            <div className={styles.locationBackground} />
            <img className={styles.locationIcon} alt="" src="vector-1.svg" />
          </div>
          <div className={styles.container}>
            <div className={styles.div2}>Санкт-Петербург</div>
          </div>
          <div className={styles.phoneWrapper}>
            <img className={styles.phoneIcon} alt="" src="vector-2.svg" />
          </div>
        </button>
        <a className={styles.phoneParent} href="tel:+89996975425">
          <img
            className={styles.phoneIcon1}
            loading="lazy"
            alt=""
            src="phone.svg"
          />
            <div className={styles.placeholder}>8 812 309-82-88</div>
        </a>
        <button className={styles.cartButtonWrapper}>
          <div className={styles.cartButtonContent}>
            <img
              className={styles.bagIcon}
              loading="lazy"
              alt=""
              src="bag.svg"
            />
            <div className={styles.ellipseParent}>
              <div className={styles.frameChild} />
              <div className={styles.div3}>4</div>
            </div>
          </div>
          <div className={styles.frame}>
            <div className={styles.div4}>В корзине (4 товара)</div>
          </div>
        </button>
        <div className={styles.socialLinksWrapper}>
          <div className={styles.tg}>
            <div className={styles.socialMediaBackground} />
            <img
              className={styles.socialMediaLogos}
              alt=""
              src="vector-3.svg"
            />
          </div>
          <div className={styles.vk}>
            <a className={styles.vkChild} />
            <img className={styles.vectorIcon} alt="" src="vector-4.svg" />
          </div>
          <div className={styles.ok}>
            <img
              className={styles.okIcon}
              alt=""
              loading="lazy"
              src="ok.svg"
            />
          </div>
        </div>
      </header>
    </section>
  );
};

export default Content;
