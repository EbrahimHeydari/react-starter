import React, { useContext } from 'react';
import { MusicContext } from '../contexts/music';
import { ThemeContext } from '../contexts/theme';
import { LoginContext } from '../contexts/login';

const MusicNavbar = () => {

    const {isLight, light, dark} = useContext(ThemeContext);
    const theme = isLight ? light : dark;
    const {musics} = useContext(MusicContext);
    const {login, changeLogin} = useContext(LoginContext);

    return (
        <nav className="navbar"  style={{background: theme.item , color:theme.text}}>
            <h1>
                لیست موسیقی های شما
            </h1>
            <p>
                تعداد:
                {` ${musics.length} `}
            </p>
            
            <p>
                {login ? 'خوش آمدید' : 'لطفا وارد شوید'}
            </p>
            <button onClick={changeLogin} className="send" style={{background: theme.bg, color:theme.text}}>ورود</button>
        </nav>
        
    );
}
 
export default MusicNavbar;