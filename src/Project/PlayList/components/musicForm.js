import React, { useContext, useState } from 'react';
import { MusicContext } from '../contexts/music';
import { ThemeContext } from '../contexts/theme';

const MusicForm = () => {

    const [title, setTitle] = useState('')
    const [singer, setSinger] = useState('')
    const [category, setCategory] = useState('');
    const { addMusic } = useContext(MusicContext)
    const { isLight, light, dark } = useContext(ThemeContext);
    const theme = isLight ? light : dark;

    const SubmitHandler = (event) => {
        event.preventDefault();
        addMusic(title, singer, category)
        setTitle('')
        setSinger('')
        setCategory('')
    }

    return (
        <form onSubmit={SubmitHandler} style={{ background: theme.item }}>
            <input className="detail" placeholder="عنوان" value={title} required onChange={
                (event) => setTitle(event.target.value)} style={{ background: theme.bg, color: theme.text }} />
            <input className="detail" placeholder="خواننده" value={singer} required onChange={
                (event) => setSinger(event.target.value)} style={{ background: theme.bg, color: theme.text }} />
            <label htmlFor="category">دسته بندی: </label>
            <select id="category" className="detail" value={category} 
            onChange={ (event) => setCategory(event.target.value)}>
                <option value="شاد">شاد</option>
                <option value="غمگین">غمگین</option>
                <option value="حماسی">حماسی</option>
                <option value="انگیزشی">انگیزشی</option>
                <option value="نوستالژیک">نوستالژیک</option>
                <option value="رپ">رپ</option>
            </select>
            <button className="send" type="submit" style={{ background: theme.bg, color: theme.text }}>افزودن</button>
        </form>
    );
}

export default MusicForm;