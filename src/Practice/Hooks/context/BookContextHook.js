import React, { createContext, useState } from 'react'

export const BookContextHook = createContext()

const BookListProvider = props => {
  const [books] = useState([
    { title: 'اثر مرکب', id: 1 },
    { title: 'قدرت عادت', id: 2 },
    { title: 'قدرت برنامه ریزی', id: 3 },
    { title: 'تخت خوابت را مرتب کن', id: 4 },
  ])

  return (
    <BookContextHook.Provider value={{ books }}>
      {props.children}
    </BookContextHook.Provider>
  )
}

export default BookListProvider
