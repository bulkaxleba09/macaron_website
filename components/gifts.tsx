import type { NextPage } from "next";
import Gift from "./gift";
import styles from "./gifts.module.css";

export type GiftsType = {
  className?: string;
};

const Gifts: NextPage<GiftsType> = ({ className = "" }) => {
  return (
    <section className={[styles.gifts, className].join(" ")}>
      <div className={styles.popularSetsTitleContainer}>
        <h1 className={styles.h1}>Популярные наборы</h1>
      </div>
      <div className={styles.popularSetsContainer}>
        <div className={styles.giftItems}>
          <div className={styles.gift1}>
            <div className={styles.bgGift1} />
            <img
              className={styles.imgGift1Icon}
              loading="lazy"
              alt=""
              src="img-gift-1@2x.png"
            />
            <div className={styles.giftInfoContainer}>
              <div className={styles.giftTitlesContainer}>
                <div className={styles.div}>Сердце</div>
              </div>
              <div className={styles.giftDescriptionsContainer}>
                <div className={styles.div1}>
                  <p className={styles.p}>24 штуки в коробке в виде сердца.</p>
                  <p className={styles.p1}>{`Ассорти из 6 вкусов `}</p>
                </div>
              </div>
              <div className={styles.fifthGiftInfo}>
                <div className={styles.fifthGiftInfoChild} />
                <div className={styles.fifthGiftPriceContainer}>
                  <div className={styles.fifthGiftPriceWrapper}>
                    <div className={styles.fifthGiftPriceValueContain}>
                      <div className={styles.div2}>2800 руб</div>
                    </div>
                    <button className={styles.fifthGiftCartButtonContain}>
                      <div className={styles.fifthGiftAddToCartContain}>
                        <div
                          className={styles.fifthGiftAddToCartContainChild}
                        />
                      </div>
                      <div className={styles.fifthGiftAddToCartIconCo}>
                        <img
                          className={styles.fifthGiftAddToCartIconCoChild}
                          alt=""
                          src="group-3-1.svg"
                        />
                      </div>
                      <div className={styles.fifthGiftAddToCartButton}>
                        <div className={styles.div3}>В корзину</div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Gift
            imgGift2="img-gift-2@2x.png"
            prop="Красота спасёт мир "
            prop1="Набор 16 шт. Вкусы: клубника - базилик, кокос, голубой сыр, пармезан"
            prop2="750 руб"
            group3="group-3-1.svg"
          />
          <div className={styles.gift3}>
            <div className={styles.bgGift3} />
            <img
              className={styles.ingGift3Icon}
              loading="lazy"
              alt=""
              src="ing-gift-3@2x.png"
            />
            <div className={styles.gift3Inner}>
              <div className={styles.parent}>
                <div className={styles.div4}>Круглый набор</div>
                <div className={styles.div5}>
                  40 макаронс в круглой коробке с персональной надписью
                </div>
              </div>
            </div>
            <div className={styles.sixthGiftInfo}>
              <div className={styles.sixthGiftInfoChild} />
              <div className={styles.sixthGiftPriceContainer}>
                <div className={styles.sixthGiftPriceWrapper}>
                  <div className={styles.sixthGiftPriceValueContain}>
                    <div className={styles.div6}>3900 руб</div>
                  </div>
                  <button className={styles.sixthGiftCartButtonContain}>
                    <div className={styles.sixthGiftAddToCartContain}>
                      <div className={styles.sixthGiftAddToCartContainChild} />
                    </div>
                    <div className={styles.sixthGiftAddToCartIconCo}>
                      <img
                        className={styles.sixthGiftAddToCartIconCoChild}
                        alt=""
                        src="group-3-1.svg"
                      />
                    </div>
                    <div className={styles.sixthGiftAddToCartButton}>
                      <div className={styles.div7}>В корзину</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Gift
            imgGift2="ing-gift-4@2x.png"
            prop="Набор на 9"
            prop1="Набор из 9 штук в квадратной коробке. Вкусы: шоколад, фисташка, вишня"
            prop2="950 руб"
            group3="group-3-1.svg"
          />
          <Gift
            imgGift2="ing-gift-5@2x.png"
            prop="Набор на 16"
            prop1="Набор 16 шт. Вкусы: соленая карамель, голубой сыр, пармезан, шоколад "
            prop2="1500 руб"
            group3="group-3-1.svg"
          />
          <div className={styles.gift6}>
            <div className={styles.bgGift6} />
            <img
              className={styles.ingGift6Icon}
              loading="lazy"
              alt=""
              src="ing-gift-3@2x.png"
            />
            <div className={styles.frameParent}>
              <div className={styles.wrapper}>
                <div className={styles.div8}>{`Сердце `}</div>
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.container}>
                  <div className={styles.div9}>
                    <p className={styles.p2}>
                      24 штуки в коробке в виде сердца.
                    </p>
                    <p className={styles.p3}>{`Ассорти из 6 вкусов `}</p>
                  </div>
                </div>
                <div className={styles.lineParent}>
                  <div className={styles.frameChild} />
                  <div className={styles.frameWrapper}>
                    <div className={styles.frameContainer}>
                      <div className={styles.frame}>
                        <div className={styles.div10}>2500 руб</div>
                      </div>
                      <button className={styles.frameButton}>
                        <div className={styles.lineWrapper}>
                          <div className={styles.frameItem} />
                        </div>
                        <div className={styles.frameDiv}>
                          <img
                            className={styles.frameInner}
                            alt=""
                            src="group-3-1.svg"
                          />
                        </div>
                        <div className={styles.wrapper1}>
                          <div className={styles.div11}>В корзину</div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.allGiftsButtonContainer}>
          <button className={styles.buttonGift}>
            <div className={styles.buttonGiftChild} />
            <div className={styles.div12}>Все праздничные наборы</div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gifts;
