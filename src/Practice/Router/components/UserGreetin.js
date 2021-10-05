import React, { Component } from 'react';

var inputInt = Number(prompt('please Enter 1 or 0'));
var booleanResult = Boolean(inputInt);
console.log(booleanResult);

class UserGreetin extends Component {
    state = {
        isLoggedIn: booleanResult
    }
    render() {

        return (
            this.state.isLoggedIn ?
            <h1>Welcome Ebrahim</h1> :
            <h1>Welcome Guest</h1>
        )
    }
}

export default UserGreetin;