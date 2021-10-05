import React, { createContext, useState } from 'react';

export const LoginContext = createContext();

const MusicLogin = (props) => {

    const [login, setLogin] = useState(false,{})

    const changeLogin = () => {
        setLogin((login) => login = !login)
    }

    return (
        <LoginContext.Provider value={{login, changeLogin}}>
            {props.children}
        </LoginContext.Provider>
    );
}
 
export default MusicLogin;