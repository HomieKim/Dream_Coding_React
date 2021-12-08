import React, { memo, useRef, useState } from "react";
import Button from "../button/button";

import styles from "./card_add_form.module.css";

const CardAddForm = memo(({FileInput, onAdd}) => {
  const formRef = useRef();
  const nameRef = useRef();
  const schoolRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const [file, setFile] = useState({fileName:null, fileURL:null});

  const onFileChange = file=>{
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(),
      name : nameRef.current.value || '',
      school : schoolRef.current.value || '',
      theme : themeRef.current.value || '',
      title : titleRef.current.value || '',
      email : emailRef.current.value || '',
      message : messageRef.current.value || '',
      fileName : file.fileName || '',
      fileURL : file.fileURL || '',
    }
    formRef.current.reset();
    setFile({fileName:null, fileURL:null});
    onAdd(card);
  };
  return (
    <form ref={formRef} className={styles.form}>
      <input ref={nameRef} 
        className={styles.input} 
        type="text" 
        name="name" 
        placeholder="Name" />
      <input ref={schoolRef}
        className={styles.input}
        type="text"
        name="school"
        placeholder="School"
      />
      <select ref={themeRef} className={styles.select} name="theme" placeholder="Theme">
        <option placeholder="dark">dark</option>
        <option placeholder="light">light</option>
        <option placeholder="colorful">colorful</option>
      </select>
      <input  ref={titleRef} className={styles.input} type="text" name="title" placeholder="Title" />
      <input ref={emailRef} className={styles.input} type="text" name="email" placeholder="E-mail" />
      <textarea ref={messageRef}
        className={styles.textarea}
        name="message"
        placeholder="Message"
      ></textarea>
      <div className={styles.fileInput}>
        <FileInput name={file.fileName} onFileChange={onFileChange} />
      </div>
      <Button name="Add" onClick={onSubmit} />
    </form>
  );
});

export default CardAddForm;
