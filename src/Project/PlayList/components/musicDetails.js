import React, { useContext } from 'react';
import { MusicContext } from '../contexts/music';
import remove from '../delete.svg';

const MusicDetail = ({ music }) => {
    const { removeMusic } = useContext(MusicContext);
    return (
        <li>
            <img className="delete" src={remove} alt="delete" width="20" onClick={() => removeMusic(music.id)} />
            <div className="title">
                عنوان:
                {` ${music.title} `}
            </div>
            <div className="subtitle">
                خواننده:
                {` ${music.singer} `}
            </div>
            <div>
                دسته بندی:
                {` ${music.category} `}
            </div>
        </li>
    );
}

export default MusicDetail;