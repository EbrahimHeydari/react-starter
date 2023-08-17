import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

class BookList extends Component {
  static contextType = ThemeContext
  render() {
    const { isLight, light, dark } = this.context
    const theme = isLight ? light : dark
    return (
      <div
        className='list-item'
        style={{ background: theme.bg, color: theme.color }}>
        <ul>
          <li style={{ background: theme.item }}>اثر مرکب</li>
          <li style={{ background: theme.item }}>قدرت عادت</li>
          <li style={{ background: theme.item }}>قدرت برنامه ریزی</li>
          <li style={{ background: theme.item }}>تخت خوابت را جمع کن</li>
        </ul>
      </div>
    )
  }
}

export default BookList
