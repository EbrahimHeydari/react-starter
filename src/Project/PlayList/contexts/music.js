import React, { createContext, useContext, useState } from 'react';
import { ThemeContext } from './theme';

export const MusicContext = createContext();

const MusicProvider = (props) => {

    // only use state
    const {isLight, light, dark} = useContext(ThemeContext);
    const theme = isLight ? light : dark;
    const [musics, setMusic] = useState([]);

    const addMusic = (title, singer, category) => {
        let randomId = Math.round(Math.random() * 999999999)
        setMusic([...musics, {title, singer,category, id: randomId }])
    }

    const removeMusic = (id) => {
        setMusic(
            musics.filter( music => music.id !== id)
        )
    }

    return (
        <MusicContext.Provider value={{musics, addMusic, removeMusic}}>
            <div className="box" style={{background: theme.bg}}>
                {props.children}
            </div>
        </MusicContext.Provider>
    );
}

export default MusicProvider;