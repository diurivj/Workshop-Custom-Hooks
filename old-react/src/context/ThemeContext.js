import React from 'react'

export const ThemeContext = React.createContext()

function ThemeContextProvider({ children }) {
  return <ThemeContext.Provider value="card">{children}</ThemeContext.Provider>
}

export default ThemeContextProvider
