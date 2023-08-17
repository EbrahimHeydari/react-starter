// Class-Based
import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

class ChangeTheme extends Component {
  static contextType = ThemeContext
  render() {
    const { ChangeTheme } = this.context
    return <button onClick={ChangeTheme}>تغییر حالت</button>
  }
}

export default ChangeTheme
