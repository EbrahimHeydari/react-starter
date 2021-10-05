import React, { createContext, useContext, useState } from 'react';
import { ThemeContext } from './theme';
// import React, { createContext, useReducer, useEffect } from 'react';
// import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookProvider = (props) => {

    // use State
    const { isLight, light, dark } = useContext(ThemeContext)
    const theme = isLight ? light : dark;
    const randomId = Math.round(Math.random() * 999999999);

    const [books, setBook] = useState([])

    const removeBook = id => {
        setBook(
            books.filter(book => book.id !== id)
        )
    }

    const addBook = (title, author) => {
        setBook([...books, { title, author, id: randomId }])
    }

    return (
        <BookContext.Provider value={{ books, removeBook, addBook }}>
            <div className="box" style={{ background: theme.bg }}>
                {props.children}
            </div>
        </BookContext.Provider>
    );


    // reducer
    // const [books, dispatch] =  useReducer(bookReducer, [], () => {
    //     const data = localStorage.getItem('Book');
    //     return data ? JSON.parse(data) : []
    // })
    // useEffect( () => {
    //     localStorage.setItem('Book', JSON.stringify(books))
    // } , [books])

    // return (
    //     <BookContext.Provider  value={{books, dispatch}}>
    // <div className="box" style={{ background: theme.bg }}>
    //     {props.children}
    // </div>
    //     </BookContext.Provider>
    // );
}

export default BookProvider;