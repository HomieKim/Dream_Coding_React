import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import styles from './login.module.css';

const LogIn = ({ authService }) => {
  const onLogIn = (event) => {
    authService.login(event.currentTarget.textContent).then(console.log());
  };
  return (
    <section className={styles.login}>
      <Header />
      <section>
        <h1>LogIn</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogIn}>Google</button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogIn}>GitHub</button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default LogIn;
