import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/theme';

const SwitchTheme = () => {
    const {isLight, light, dark, SwitchTheme} = useContext(ThemeContext);
    const theme = isLight ? light : dark;

    return (
        <button onClick={SwitchTheme} className="send" style={{background: theme.item, color: theme.text}}>تغییر حالت</button>
    )
}

export default SwitchTheme;