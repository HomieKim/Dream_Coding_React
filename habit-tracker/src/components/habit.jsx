import React, { memo } from 'react';

const Habit = memo(({habit, onIncrease, onDecrease, onDelete})=>{

    const handleIncrease = ()=>{
        onIncrease(habit);
    };

    const handleDecrease = ()=>{
        onDecrease(habit);
    };

    const handleDelete = ()=>{
        onDelete(habit);
    };

    return (
        <li className="habit">
        <span className="habit-name">{habit.name}</span>
        <span className="habit-count">{habit.count}</span>
        <button 
        className="habit-button habit-increase" 
        onClick={handleIncrease}
        >
        <i className="fas fa-plus-square"></i>
        </button>
        <button 
        className="habit-button habit-decrease"
        onClick={handleDecrease}
        >
        <i className="fas fa-minus-square"></i>
        </button>
        <button className="habit-button habit-trash"
        onClick={handleDelete}
        >
        <i className="fas fa-trash"></i>
        </button>
        </li>
    ); 
});

export default Habit;



