import React, { Component } from 'react';
import HabbitAddForm from './habbitAddForm';
import Habit from './habit';

class Habits extends Component {
    
    
    render() {
        return (
            <>
            <HabbitAddForm onAdd={this.props.onAdd}/>
            <ul>
            {
                this.props.habits.map(habit=>(
                    <Habit key={habit.id} habit={habit} // habit이라는 props이름으로 habit을 전달해줌
                    onIncrease={this.props.onIncrease}
                    onDecrease={this.props.onDecrease}
                    onDelete={this.props.onDelete}
                    /> 
                ))
            }
            </ul>
            <button className="habit-reset" onClick={this.props.onReset}>Reset All</button>
            </>
        );
    }
}

export default Habits;