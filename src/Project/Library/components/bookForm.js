import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/book';
import { ThemeContext } from '../contexts/theme';

const BookForm = () => {

    const {isLight, light, dark} = useContext(ThemeContext);
    const theme = isLight ? light : dark;
    const {addBook} = useContext(BookContext);
    // const {dispatch} = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const submitHanler = (event) => {
        event.preventDefault();
        addBook(title, author)
        // dispatch({type: 'ADD_BOOK', book: {
        //     title, author
        // }})
        setTitle('')
        setAuthor('')
    }

    return (
        <form onSubmit={submitHanler} style={{background: theme.item}}>
            <input type="text" className="detail" placeholder="عنوان" value={title} required onChange={
                (event) => setTitle(event.target.value)
            } style={{background: theme.bg, color: theme.text}}/>
            <input type="text" className="detail" placeholder="مولف" value={author} required onChange={
                (event) => setAuthor(event.target.value)
            } style={{background: theme.bg, color: theme.text}}/>
            <button type="submit" className="send" style={{background: theme.bg, color: theme.text}}>ثبت</button>
        </form>
    );
}
 
export default BookForm;