
import React, { Component } from 'react';

class Counter extends Component {
    // Mounting
    // constructor() {
    //     super()
    //     console.log("constructor");
    // }

    // componentDidMount() {
    //     console.log('componentDidMount')
    // }

    // Updating
    // shouldComponentUpdate() {
    //     return false;
    //     // return true;
    // }

    // componentDidUpdate() {
    //     console.log("componentDidUpdate")
    // }

    // Unmounting
    // componentWillUnmount() {
    //     console.log('componentWillUnmount')
    // }

    state = {
        number: 0
    }

    Count = () => {
        this.setState({number: this.state.number+5}, () => {
            console.log(this.state.number)
        })
    }

    render() {
        return (
            <div>
                <h1>شماره {this.state.number}</h1>
                <button onClick={this.Count}>شمارش</button>
            </div>
        )
    }
}

export default Counter;