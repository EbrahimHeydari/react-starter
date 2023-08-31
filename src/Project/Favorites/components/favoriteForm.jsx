import { FavoriteContext } from '../contexts/favorite'
import { ThemeContext } from '../contexts/theme'
import { useContext, useState } from 'react'

const FavoriteForm = () => {
  const { dispatch } = useContext(FavoriteContext)
  const { isLight, light, dark } = useContext(ThemeContext)
  const theme = isLight ? light : dark

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const SubmitHandler = event => {
    event.preventDefault()
    dispatch({
      type: 'ADD_FAVORITE',
      favorite: {
        name,
        description,
      },
    })
    setName('')
    setDescription('')
  }

  return (
    <form className='form' onSubmit={SubmitHandler} style={{ background: theme.item }}>
      <input
        className='detail'
        placeholder='عنوان'
        required
        value={name}
        onChange={event => setName(event.target.value)}
        style={{ background: theme.bg, color: theme.text }}
      />
      <textarea
        className='detail'
        placeholder='توضیحات'
        required
        value={description}
        rows='5'
        onChange={event => setDescription(event.target.value)}
        style={{ background: theme.bg, color: theme.text }}></textarea>
      <button
        type='submit'
        className='send'
        style={{ background: theme.bg, color: theme.text }}>
        افزودن
      </button>
    </form>
  )
}

export default FavoriteForm
