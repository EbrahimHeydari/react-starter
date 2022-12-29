import React, { useState } from 'react'

const NewSongForm = ({ addSong }) => {
  const [title, setTitle] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    addSong(title)
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='add'>Song Name: </label>
      <input
        id='add'
        value={title}
        required
        onChange={event => {
          setTitle(event.target.value)
        }}
      />
      <button type='submit'>Add</button>
    </form>
  )
}

export default NewSongForm
