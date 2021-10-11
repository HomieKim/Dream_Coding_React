import React, { memo } from 'react';

const HabbitAddForm =  memo(props =>{
    const intputRef = React.createRef();
    const formRef = React.createRef();
    const onSubmit = event =>{
        event.preventDefault();
        const name = intputRef.current.value;
        name && props.onAdd(name);
        //this.intputRef.current.value = '';
        formRef.current.reset();
    }

    return (
        <form ref={formRef} className="add-form" onSubmit={onSubmit}>
            <input ref={intputRef} type="text" placeholder="Habbit" className="add-input"/>
            <button type="submit" className="add-button">Add</button>
        </form>
    );
});

export default HabbitAddForm;