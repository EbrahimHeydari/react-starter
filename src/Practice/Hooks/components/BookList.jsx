import React, { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import AddNewBook from './AddBook'

var i = -1

const BookList = () => {
  const [books, setBook] = useState([])

  const AddBook = name => {
    setBook([...books, { name, id: uuid() }])
    i++
  }

  useEffect(() => console.log('Effect: ', books[i]), [books])

  return (
    <div>
      <ul>
        {books.map(book => (
          <li key={book.id}> {book.name} </li>
        ))}
      </ul>
      <AddNewBook AddBook={AddBook} />
    </div>
  )
}

export default BookList
