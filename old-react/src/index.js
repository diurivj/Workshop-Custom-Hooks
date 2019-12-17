import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import ThemeContextProvider from './context/ThemeContext'

ReactDOM.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>,
  document.getElementById('root')
)

serviceWorker.unregister()
