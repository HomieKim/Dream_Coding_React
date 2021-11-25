import React from "react";
import styles from "./card_edit_form.module.css";
const CardEditForm = ({ card }) => {
  const { name, school, title, email, message, theme, fileName, fileURL } =card;
  return (
    <from>
      <input type="text" name="name" value={name} />
      <input type="text" name="school" value={school} />
      <input type="text" name="title" value={title} />
      <input type="text" name="email" value={email} />
    </from>
  );
};

export default CardEditForm;
