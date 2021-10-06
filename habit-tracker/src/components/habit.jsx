import React, { Component } from 'react';

class Habit extends Component {
    state = {
        count : 0,
    };
    handleIncrease = ()=>{
        // state 오브젝트 안에 있는 count를 증가 한뒤 state를 업데이트
        this.setState({count : this.state.count +1});
    };
    handleDecrease = ()=>{
        const count = this.state.count-1;
        this.setState({count : count >0 ? count: 0})
    };
    render() {
        
        return (
            <li className="habit">
            <span className="habit-name">Reading</span>
            <span className="habit-count">{this.state.count}</span>
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
            <button className="habit-button habit-trash">
            <i className="fas fa-trash"></i>
            </button>
            </li>
        ); 
    }        
}
export default Habit;