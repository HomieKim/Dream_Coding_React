import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ FileInput, authService, cardRepository }) => {
  const location = useLocation();
  const locationState = location?.state;
  const navigate = useNavigate();
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(locationState && locationState.id);

  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService]); // useCallback 사용시 컴포넌트가 업데이트되어도 (즉, props나 state가 변경되어도 새로 호출되어지지 않음, 그러니까 authService변경시에는 새로 호출되어야 함)

  useEffect(() => {
      if(!userId){
          return;
      }
      const stopSync = cardRepository.syncCards(userId, cards =>{
        setCards(cards);
      });
      return () => stopSync();
  },[userId, cardRepository]);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        navigate("/");
      }
    });
  },[userId, authService, navigate]);

  const createOrupdateCard = (card) => {
    // state를 업데이트를 할 때 이전상태를 유지해야 하는 게 중요 업데이트 시점에 따라 동기적으로 안될 수 있다
    // 이를 피하기 위해 setCards에 콜백함수로 전달해 이전의 상태값을 유지
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    cardRepository.saveCard(userId, card);
  };
  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    cardRepository.removeCard(userId, card);
  };
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrupdateCard}
          updateCard={createOrupdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
