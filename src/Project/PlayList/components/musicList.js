import React, { useContext } from 'react';
import { MusicContext } from '../contexts/music';
import MusicDetail from './musicDetails';
import {ThemeContext} from '../contexts/theme';

const MusicList = () => {

    const {isLight, light, dark} = useContext(ThemeContext);
    const theme = isLight ? light : dark;
    const { musics } = useContext(MusicContext);

    return musics.length ? (
        <div className="list-item" style={{ background: theme.item, color: theme.color }}>
            <ul>
                {musics.map(
                    music => {
                        return (
                            <MusicDetail key={music.id} music={music} />
                        )
                    }
                )}
            </ul>
        </div>
    )
    : (
        <div style={{color: theme.color}}>
            <p>هیچ موسیقی یافت نشد :)</p>
        </div>
    )
}

export default MusicList;