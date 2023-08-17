import React, { useContext } from 'react'
import { BookContext } from '../contexts/book'
import remove from '../delete.svg'

const BookDetail = ({ book }) => {
  const { removeBook } = useContext(BookContext)
  // const { dispatch } = useContext(BookContext)

  return (
    <li>
      <img
        className='delete'
        src={remove}
        alt='delete'
        width='20'
        onClick={() => removeBook(book.id)}
      />
      {/* <img className='delete' src={remove} alt='delete' width='20'
                onClick={() => dispatch({ type: 'REMOVE_BOOK', id: book.id })} /> */}
      <div className='title'>
        عنوان:
        {` ${book.title} `}
      </div>
      <div className='subtitle'>
        مولف:
        {` ${book.author} `}
      </div>
    </li>
  )
}

export default BookDetail
