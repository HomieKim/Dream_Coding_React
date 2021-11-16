import React, { useEffect } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import styles from './login.module.css';
import { useNavigate } from 'react-router';

const LogIn = ({ authService }) => {
  const navigate = useNavigate();
  const goToMaker = userId=>{
    navigate('/maker',{state :{id:userId}});
  };

  const onLogIn = (event) => {
    authService
    .login(event.currentTarget.textContent)
    .then(data => goToMaker(data.user.uid));
  };

  useEffect(()=>{
    authService.onAuthChange(user=>{
      user && goToMaker(user.uid);
    });
  });


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
