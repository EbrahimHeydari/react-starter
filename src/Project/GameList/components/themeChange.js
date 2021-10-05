import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/theme';

const ThemeChange = () => {

    const {setTheme} = useContext(ThemeContext)
    const {isLight, light, dark} = useContext(ThemeContext)
    const theme = isLight ? light : dark;

    return (
        <button onClick={setTheme} className="send" style={{background: theme.item, color: theme.text}}>
            تغییر حالت
        </button>
    );
}
 
export default ThemeChange;