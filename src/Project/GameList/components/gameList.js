import React, { useContext } from 'react';
import { GameContext } from '../contexts/game';
import { ThemeContext } from '../contexts/theme';
import remove from '../delete.svg';


const GameList = () => {
    
    const { games, dispatch} = useContext(GameContext)
    const {isLight, light, dark} = useContext(ThemeContext)
    const theme = isLight ? light : dark;

    return games.length ? (
        <div className="list-item">
            <ul>
                {games.map(game => {
                    return (
                        <li key={game.id} style={{background: theme.item , color: theme.color}}>
                            <img src={remove} alt="delete" width="20" className="delete" 
                            onClick={() => dispatch({type: 'REMOVE_GAME', id: game.id})} />
                            <div className="title">
                                نام:
                                {` ${game.name}`}
                            </div>
                            <div className="subtitle">
                                شرکت سازنده:
                                {` ${game.creator}`}
                            </div>
                            <div className="subtitle">
                                پلتفرم:
                                {` ${game.platform}`}
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    ) : (
        <div>
            <p style={{color: theme.color}}>
                هیچ موردی پیدا نشد
            </p>
        </div>
    )
}

export default GameList;