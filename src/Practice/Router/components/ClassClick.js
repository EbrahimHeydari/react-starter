import React, { Component } from 'react';

class ClassClick extends Component {
    state = {
        message: 'Clicked Button!'
    }

    clickHandler = () => {
        alert(this.state.message)
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click Me!</button>
            </div>
        )
    }
}

export default ClassClick;