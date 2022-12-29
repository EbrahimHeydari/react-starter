import '@testing-library/jest-dom'
import ReactDOM from 'react-dom'
import App from '../../App'
import React from 'react'

test('renders a star', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  expect(div.querySelector('form')).toHaveAttribute('class', 'form')
})

