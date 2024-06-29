import type { NextPage } from "next";
import Asle from "./asle";
import styles from "./sale.module.css";

export type SaleType = {
  className?: string;
};

const Sale: NextPage<SaleType> = ({ className = "" }) => {
  return (
    <section
      className={[styles.actionTitleWrapperWrapper, className].join(" ")}
    >
      <div className={styles.actionTitleWrapper}>
        <div className={styles.actionTitleContainer}>
          <h1 className={styles.h1}>Акции</h1>
        </div>
        <div className={styles.salesContainer}>
          <div className={styles.sale}>
            <div className={styles.sale12}>
              <div className={styles.sale1}>
                <div className={styles.itemContent}>
                  <div className={styles.itemDetails}>
                    <img
                      className={styles.saleImg1Icon}
                      alt=""
                      src="sale-img-1@2x.png"
                    />
                    <div className={styles.flagSale1}>
                      <div className={styles.wrapper}>
                        <div className={styles.div}>БЕСПЛАТНАЯ ДОСТАВКА</div>
                      </div>
                      <img
                        className={styles.saleFlagIcon}
                        loading="lazy"
                        alt=""
                        src="vector-21.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.textSale1}>
                    <div className={styles.div1}>
                      <p className={styles.p}>По СПб в районе КАД – от 3000₽</p>
                      <p className={styles.p1}>По МСК – от 5000₽</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.sale2}>
                <div className={styles.secondSaleItem}>
                  <img
                    className={styles.imgSale2Icon}
                    alt=""
                    src="img-sale-2@2x.png"
                  />
                  <div className={styles.container}>
                    <div className={styles.div2}>НОВИНКА</div>
                  </div>
                  <img
                    className={styles.secondSaleFlagIcons}
                    alt=""
                    src="vector-2-1.svg"
                  />
                </div>
                <div className={styles.textSale2}>
                  <div className={styles.div3}>
                    Шоколадное пирожное картошка на основе бисквита!
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.sale34}>
              <Asle
                imgSale3="img-sale-3@2x.png"
                prop="НОВИНКА"
                prop1="Аппетитные конфеты "
                prop2="на основе миндального печенья и крема"
                vector2="vector-2-1.svg"
              />
              <Asle
                imgSale3="img-sale-4@2x.png"
                prop="САХАРНАЯ НОВИНКА"
                prop1="Карамель на палочке"
                prop2="из натуральных ингредиентов"
                vector2="vector-2-1.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.dotsNavigation}>
          <div className={styles.dots} />
          <div className={styles.dots1} />
          <div className={styles.dots2} />
        </div>
      </div>
    </section>
  );
};

export default Sale;
