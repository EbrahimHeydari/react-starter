import React, { useContext } from 'react';
import { FavoriteContext } from '../contexts/favorite';
import remove from './../delete.svg';

const FavoriteDetail = ({ favorite }) => {
    
    const { dispatch } = useContext(FavoriteContext);

    return (
        <li>
            <img src={remove} alt="delete" width="20" className="delete"
                onClick={() => dispatch({ type: 'REMOVE_FAVORITE', id: favorite.id })} />
            <div className="title">
                عنوان:
                {` ${favorite.name} `}
            </div>
            <div className="subtitle">
                توضیحات:
                {` ${favorite.description} `}
            </div>
        </li>
    );
}

export default FavoriteDetail;