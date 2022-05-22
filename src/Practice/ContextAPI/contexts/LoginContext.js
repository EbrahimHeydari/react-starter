import React, { Component, createContext } from 'react';

export const LoginContext = createContext()

class LoginProvider extends Component {
    state = {
        login: false
    }

    changeLogin = () => {
        this.setState({
            login: !this.state.login
        })
    }

    render() { 
        return (
            <LoginContext.Provider value={{...this.state , ChangeLogin: this.changeLogin}}>
                {this.props.children}
            </LoginContext.Provider>
        )
    }
}
 
export default LoginProvider;