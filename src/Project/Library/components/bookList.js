import React, { useContext } from 'react';
import { BookContext } from '../contexts/book';
import { ThemeContext } from '../contexts/theme';
import BookDetail from './bookDetails';

const BookList = () => {
    const {isLight, light, dark} = useContext(ThemeContext);
    const theme = isLight ? light : dark;
    const {books} = useContext(BookContext)
    return books.length ? (
        <div className="list-item" style={{background: theme.item , color: theme.color }}>
            <ul>
                {books.map( book => {
                    return (
                        <BookDetail key={book.id} book={book} />
                    )
                })}
            </ul>
        </div>
    ):(
        <div style={{color: theme.color}}>
            <p>هیچ کتابی یافت نشد :)</p>
        </div>
    )
}
 
export default BookList;