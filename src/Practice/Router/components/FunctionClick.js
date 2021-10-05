import React from 'react';

const FunctionClick = () => {
    let message = 'Clicked Button'
    const ClickHandler = () => {
        alert(message)
    }

    return (
        <div>
            <button onClick={ClickHandler}>Click Me</button>
        </div>
    )
}

export default FunctionClick;