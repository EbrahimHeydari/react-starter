import React, { useContext } from 'react'
import { ThemeContext } from '../../ContextAPI/contexts/ThemeContext'
import { BookContextHook } from '../context/BookContextHook'

const BookListHook = () => {
  const { isLight, light, dark } = useContext(ThemeContext)
  const theme = isLight ? light : dark
  const { books } = useContext(BookContextHook)

  return (
    <div
      className='list-item'
      style={{ background: theme.bg, color: theme.color }}>
      <ul>
        {books.map(book => {
          return (
            <li style={{ background: theme.item }} key={book.id}>
              {' '}
              {book.title}{' '}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default BookListHook
