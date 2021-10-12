import React from 'react';
import HabbitAddForm from './habbitAddForm';
import Habit from './habit';

const Habits = ({
    habits,
    onIncrease,
    onDecrease,
    onDelete,
    onAdd,
    onReset
})=>{
    return (
        <div className="habits">
        <HabbitAddForm onAdd={onAdd}/>
        <ul>
        {
            habits.map(habit=>(
                <Habit key={habit.id} habit={habit} 
                onIncrease={onIncrease}
                onDecrease={onDecrease}
                onDelete={onDelete}
                /> 
            ))
        }
        </ul>
        <button className="habit-reset" onClick={onReset}>Reset All</button>
        </div>
    );
};


export default Habits;