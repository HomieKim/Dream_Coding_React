import React, { Component } from 'react';

class Habit extends Component {
    
    handleIncrease = ()=>{
        this.props.onIncrease(this.props.habit);
    };

    handleDecrease = ()=>{
        this.props.onDecrease(this.props.habit);
    };

    handleDelete = ()=>{
        this.props.onDelete(this.props.habit);
    };

    render() {
        const {name, count} = this.props.habit; // habit 안에 있는 name과 count가 들어감(동일 해야함)

        return (
            <li className="habit">
            <span className="habit-name">{name}</span>
            <span className="habit-count">{count}</span>
            <button 
            className="habit-button habit-increase" 
            onClick={this.handleIncrease}
            >
            <i className="fas fa-plus-square"></i>
            </button>
            <button 
            className="habit-button habit-decrease"
            onClick={this.handleDecrease}
            >
            <i className="fas fa-minus-square"></i>
            </button>
            <button className="habit-button habit-trash"
            onClick={this.handleDelete}
            >
            <i className="fas fa-trash"></i>
            </button>
            </li>
        ); 
    }        
}
export default Habit;