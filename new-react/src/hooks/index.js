import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)

  const handleInput = e => {
    setValue(e.target.value)
  }

  return {
    value,
    onChange: handleInput
  }
}

export function useWidth() {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handleWidth = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWidth)
    return () => {
      window.removeEventListener('resize', handleWidth)
    }
  })
  return width
}

export function useTitle(value) {
  useEffect(() => {
    document.title = value
  })
}

export function useTheme() {
  return useContext(ThemeContext)
}
