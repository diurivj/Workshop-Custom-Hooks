import React from 'react'
import Card from './components/Card'
import Row from './components/Row'
import { useInput, useWidth, useTitle, useTheme } from './hooks'

function App() {
  const name = useInput('Diego')
  const surname = useInput('Vazquez')
  const theme = useTheme()
  const width = useWidth()
  useTitle(name.value + ' ' + surname.value)

  return (
    <div className="App">
      <Card className={theme}>
        <Row label="Name">
          <input {...name} />
        </Row>
        <Row label="Surname">
          <input {...surname} />
        </Row>
        <Row label="Width">
          <input name="width" value={width} />
        </Row>
      </Card>
    </div>
  )
}

export default App
