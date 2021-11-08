import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

const LogIn = ({ authService }) => {
  const onLogIn = (event) => {
    authService.login(event.currentTarget.textContent).then(console.log());
  };
  return (
    <section>
      <Header />
      <section>
        <h1>LogIn</h1>
        <ul>
          <li>
            <button onClick={onLogIn}>Google</button>
          </li>
          <li>
            <button onClick={onLogIn}>GitHub</button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default LogIn;
