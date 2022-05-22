import React, { createContext, useContext, useState } from 'react';
import { ThemeContext } from './theme';

export const BookContext = createContext()

const BookProvider = props => {
    // use State
    const [books, setBook] = useState([])

    const { isLight, light, dark } = useContext(ThemeContext)
    const theme = isLight ? light : dark
    const randomId = Math.round(Math.random() * 999999999)

    const removeBook = id => setBook(books.filter(book => book.id !== id))
    const addBook = (title, author) => setBook([...books, { title, author, id: randomId }])

    return (
        <BookContext.Provider value={{ books, removeBook, addBook }}>
            <div className="box" style={{ background: theme.bg }}>
                {props.children}
            </div>
        </BookContext.Provider>
    )
}

export default BookProvider;