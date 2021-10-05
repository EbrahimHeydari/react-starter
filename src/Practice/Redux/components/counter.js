import React from 'react';
const Counter = (props) => {

    const { value, onIncrement, onDecrement } = props

    return (
        <div>
            <h2>
                Number: {value}
            </h2>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
        </div>
    );
}

export default Counter;