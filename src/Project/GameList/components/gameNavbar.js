import React, { useContext } from 'react';
import { GameContext } from '../contexts/game';
import { ThemeContext } from '../contexts/theme';

const GameNavbar = () => {

    const {games} = useContext(GameContext);
    const {isLight, light, dark} = useContext(ThemeContext)
    const theme = isLight ? light : dark;

    return (
        <nav className="navbar" style={{background: theme.item, color: theme.text}}>
            <h1>لیست بازی ها</h1>
            <p>
                تعداد
                {` ${games.length} `}
            </p>
        </nav>
    );
}

export default GameNavbar;