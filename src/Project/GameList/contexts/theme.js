import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

class GameTheme extends Component {
    state = {
        isLight: true,
        light: {
            text: '#555',
            item: '#ddd',
            bg: '#eee',
            color: 'teal'
        },
        dark: {
            text: '#ddd',
            item: '#333',
            bg: '#555',
            color: 'orange'
        }
    }

    setTheme = () => {
        this.setState({
            isLight: !this.state.isLight
        })
    }

    render() {
        return (
            <ThemeContext.Provider value={{...this.state, setTheme: this.setTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default GameTheme;