import type { NextPage } from "next";
import LogoHero from "./logo-hero";
import styles from "./hero.module.css";

export type HeroType = {
  className?: string;
};

const Hero: NextPage<HeroType> = ({ className = "" }) => {
  return (
    <section className={[styles.hero, className].join(" ")}>
      <img className={styles.bgHeroIcon} alt="" src="/bg-hero@2x.png" />
      <img
        className={styles.imgHeroIcon}
        loading="lazy"
        alt=""
        src="/img-hero@2x.png"
      />
      <div className={styles.heroInner}>
        <div className={styles.frameParent}>
          <div className={styles.logoHeroWrapper}>
            <LogoHero />
          </div>
          <h1 className={styles.h1}>Настоящая любовь</h1>
          <div className={styles.div}>
            <p className={styles.p}>{`Пирожные макарон и другие десерты `}</p>
            <p className={styles.p1}>
              из натуральных ингредиентов, приготовленные с любовью
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
