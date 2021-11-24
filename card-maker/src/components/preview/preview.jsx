import React from "react";
import Card from "../../card/card";
import styles from "./preview.module.css";

const preview = ({ cards }) => {
  return (
    <section className={styles.preview}>
      <h1 className={styles.title}>preview</h1>
      <ul className={styles.cards}>
        {cards.map((card) => (
          <Card card={card} />
        ))}
      </ul>
    </section>
  );
};

export default preview;
