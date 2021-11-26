import React from "react";
import Button from "../button/button";
import ImgInput from '../img_input/img_input';
import styles from "./card_add_form.module.css";

const CardAddForm = () => {
  const onSubmit = () => {};
  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" name="name" placeholder="Name" />
      <input
        className={styles.input}
        type="text"
        name="school"
        placeholder="School"
      />
      <select className={styles.select} name="theme" placeholder="Theme">
        <option placeholder="dark">Dark</option>
        <option placeholder="light">Light</option>
        <option placeholder="colorful">Colorful</option>
      </select>
      <input className={styles.input} type="text" name="title" placeholder="Title" />
      <input className={styles.input} type="text" name="email" placeholder="E-mail" />
      <textarea
        className={styles.textarea}
        name="message"
        placeholder="Message"
      ></textarea>
      <div className={styles.fileInput}>
        <ImgInput />
      </div>
      <Button name="Add" onClick={onSubmit} />
    </form>
  );
};

export default CardAddForm;
