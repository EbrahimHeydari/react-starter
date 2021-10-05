import React, { useContext, useState } from 'react';
import { GameContext } from '../contexts/game';
import { ThemeContext } from '../contexts/theme';

const GameForm = () => {

    const [name, setName] = useState('');
    const [creator , setCreator] = useState('');
    const [platform, setPlatform] = useState('ویندوز');
    const {dispatch} = useContext(GameContext);
    const {isLight, light, dark} = useContext(ThemeContext)
    const theme = isLight ? light : dark;

    const submitHandler = (event) => {
        event.preventDefault();
        setName('')
        setCreator('')
        setPlatform('ویندوز')
        dispatch({
            type: 'ADD_GAME',
            game: {
                name, creator, platform
            }
        })
    }

    return (
        <form onSubmit={submitHandler} style={{background: theme.item, color: theme.text}}>
            <input type="text" required className="detail" style={{background: theme.bg , color:theme.text}}
            value={name} placeholder="نام" onChange={ (event) => setName(event.target.value)} />
            <input type="text" required className="detail" style={{background: theme.bg , color:theme.text}}
            value={creator} placeholder="شرکت سازنده" onChange={ (event) => setCreator(event.target.value)} />
            <label htmlFor="platform">پلتفرم:</label>
            <select className="detail" id="platform" style={{background: theme.bg , color:theme.text}}
            value={platform} onChange={ (event) => setPlatform(event.target.value)}>
                <option value="ویندوز">ویندوز</option>
                <option value="لینوکس">لینوکس</option>
                <option value="مکینتاش">مکینتاش</option>
                <option value="اندروید">اندروید</option>
                <option value="آیفون">آیفون</option>
            </select>
            <button type="submit" className="send" style={{background: theme.bg, color: theme.text}}>افزودن</button>
        </form>
    );
}
 
export default GameForm;