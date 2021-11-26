import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({authService})=>{
    const [cards, setCards] = useState([
        {
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
        {
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
        {
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
    ]);
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

    const addCard = card =>{
        const update = [...cards, card];
        setCards(update);
    }
    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
            <div className={styles.container}>
                <Editor cards={cards} addCard={addCard}/>
                <Preview cards={cards}/>
            </div>
            <Footer/>
        </section>
    )
};

export default Maker;