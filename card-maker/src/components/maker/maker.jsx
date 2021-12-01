import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({authService})=>{
    const [cards, setCards] = useState({
        '1':{
            id:'1',
            name:'homie',
            school:'donga',
            title:'student',
            theme:'light',
            email:'homie@gmail.com',
            message:'go for it',
            fileName:'homie',
            fileURL : null
        },
        '2':{
            id:'2',
            name:'jenny',
            school:'bugeong',
            title:'Developer',
            theme:'dark',
            email:'homie@gmail.com',
            message:'do it for fun',
            fileName:'homie',
            fileURL : null
    
        },
        '3':{
            id:'3',
            name:'rose',
            school:'busan',
            title:'Engineer',
            theme:'colorful',
            email:'homie@gmail.com',
            message:'Yes i do',
            fileName:'homie',
            fileURL : null
    
        },
    });
    
    const navigate = useNavigate();
    const onLogout = ()=>{
        authService.logout();
    };
    useEffect(()=>{
        authService.onAuthChange(user=>{
            if(!user){
                navigate('/');
            }
        });
    });

 
    const createOrupdateCard = card =>{
        // state를 업데이트를 할 때 이전상태를 유지해야 하는 게 중요 업데이트 시점에 따라 동기적으로 안될 수 있다
        // 이를 피하기 위해 setCards에 콜백함수로 전달해 이전의 상태값을 유지
        setCards(cards=>{
            const updated = {...cards};
            updated[card.id] = card;
            return updated;
        });
    }
    const deleteCard = card =>{
        setCards(cards=>{
            const updated = {...cards};
            delete updated[card.id];
            return updated;
        });
    }
    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
            <div className={styles.container}>
                <Editor cards={cards} addCard={createOrupdateCard} updateCard={createOrupdateCard} deleteCard={deleteCard}/>
                <Preview cards={cards}/>
            </div>
            <Footer/>
        </section>
    )
};

export default Maker;