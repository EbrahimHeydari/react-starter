import React, { useContext } from 'react'
import { BookContext } from '../contexts/book'
import { ThemeContext } from '../contexts/theme'

const BookNavbar = () => {
  const { isLight, light, dark } = useContext(ThemeContext)
  const theme = isLight ? light : dark
  const { books } = useContext(BookContext)

  return (
    <div
      className='navbar'
      style={{ background: theme.item, color: theme.text }}>
      <h1>لیست کتاب های شما</h1>
      <p>
        تعداد:
        {` ${books.length} `}
      </p>
    </div>
  )
}

export default BookNavbar
