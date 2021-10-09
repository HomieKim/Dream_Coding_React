import React, { PureComponent } from 'react';

class HabbitAddForm extends PureComponent {
    intputRef = React.createRef();
    formRef = React.createRef();
    onSubmit = event =>{
        event.preventDefault();
        const name = this.intputRef.current.value;
        name && this.props.onAdd(name);
        //this.intputRef.current.value = '';
        this.formRef.current.reset();

    }
    render() {
        console.log('habbitAddForm');
        return (
            <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
                <input ref={this.intputRef} type="text" placeholder="Habbit" className="add-input"/>
                <button type="submit" className="add-button">Add</button>
            </form>
        );
    }
}

export default HabbitAddForm;