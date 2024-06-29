import type { NextPage } from "next";
import styles from "./gift.module.css";

export type GiftType = {
  className?: string;
  imgGift2?: string;
  prop?: string;
  prop1?: string;
  prop2?: string;
  group3?: string;
};

const Gift: NextPage<GiftType> = ({
  className = "",
  imgGift2,
  prop,
  prop1,
  prop2,
  group3,
}) => {
  return (
    <div className={[styles.gift2, className].join(" ")}>
      <div className={styles.bgGift2} />
      <img
        className={styles.imgGift2Icon}
        loading="lazy"
        alt=""
        src={imgGift2}
      />
      <div className={styles.frameParent}>
        <div className={styles.wrapper}>
          <div className={styles.div}>{prop}</div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.container}>
            <div className={styles.div1}>{prop1}</div>
          </div>
          <div className={styles.priceContainer}>
            <div className={styles.priceContainerChild} />
            <div className={styles.cartButtonContainer}>
              <div className={styles.cartButtonWrapper}>
                <div className={styles.priceWrapper}>
                  <div className={styles.div2}>{prop2}</div>
                </div>
                <button className={styles.lastThreeDescription}>
                  <div className={styles.addToCartDivider}>
                    <div className={styles.addToCartDividerChild} />
                  </div>
                  <div className={styles.addToCartIcon}>
                    <img
                      className={styles.addToCartIconChild}
                      alt=""
                      src={group3}
                    />
                  </div>
                  <div className={styles.addToCartButton}>
                    <div className={styles.div3}>В корзину</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gift;
