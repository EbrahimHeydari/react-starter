import React, { Component, createContext } from 'react'

export const ThemeContext = createContext()

class BookTheme extends Component {
  state = {
    isLight: true,
    light: { text: '#555', item: '#ddd', bg: '#eee', color: 'teal' },
    dark: { text: '#ddd', item: '#333', bg: '#555', color: 'orange' },
  }

  toggleTheme = () => this.setState({ isLight: !this.state.isLight })

  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, ToggleTheme: this.toggleTheme }}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export default BookTheme
