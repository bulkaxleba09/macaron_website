import type { NextPage } from "next";
import Card from "./card";
import Card1 from "./card1";
import styles from "./card11.module.css";

export type Card11Type = {
  className?: string;
};

const Card11: NextPage<Card11Type> = ({ className = "" }) => {
  return (
    <div className={[styles.card12, className].join(" ")}>
      <Card
        bgCard1="/bg-card-1@2x.png"
        icCard1="/ic-card-1.svg"
        prop="Готовые наборы"
        prop1="Готовые наборы со скидкой. "
        prop2="Вы можете подобрать набор на подходящий случай."
        vector="/vector-8.svg"
      />
      <Card1
        bgCard2="/bg-card-2@2x.png"
        icCard2="/ic-card-2.svg"
        prop="Собрать свой набор"
        prop1="Выбрать количество макарун, и выбрать вкусы"
        vector="/vector-8.svg"
      />
    </div>
  );
};

export default Card11;
