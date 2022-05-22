import React, { useState } from 'react';

const AddNewBook = ({ AddBook }) => {
    const [name, setBook] = useState('')

    const handleSubmit = event => {
        event.preventDefault()
        AddBook(name)
        setBook('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="new">Book Name: </label>
            <input id="new" value={name} required
                onChange={
                    (event) => setBook(event.target.value)
                }
            />
            <button type="submit">Add</button>
        </form>
    )
}

export default AddNewBook;