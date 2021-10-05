import React, { useState, createContext, useContext, useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import GameReducer from '../reducers';
import { ThemeContext } from './theme';

export const GameContext = createContext();

const GameProvider = (props) => {

    const [games, dispatch] = useReducer(GameReducer, []);
    const { isLight, light, dark } = useContext(ThemeContext);
    const theme = isLight ? light : dark;

    return (
        <GameContext.Provider value={{ games, dispatch }}>
            <div className="box" style={{ background: theme.bg }}>
                {props.children}
            </div>
        </GameContext.Provider>
    );
}

export default GameProvider;