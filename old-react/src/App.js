import React, { Component } from 'react'
import Card from './components/Card'
import Row from './components/Row'
import { ThemeContext } from './context/ThemeContext'

class App extends Component {
  state = {
    name: 'Diego',
    surname: 'Vazquez',
    width: window.innerWidth
  }

  handleInput = e => {
    const { name, value } = e.target
    this.setState(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWidth)
    document.title = this.state.name + ' ' + this.state.surname
  }

  componentDidUpdate() {
    document.title = this.state.name + ' ' + this.state.surname
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWidth)
  }

  handleWidth = e => {
    this.setState({
      width: window.innerWidth
    })
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {theme => (
          <div className="App">
            <Card className={theme}>
              <Row label="Name">
                <input
                  name="name"
                  value={this.state.name}
                  onChange={this.handleInput}
                />
              </Row>
              <Row label="Surname">
                <input
                  name="surname"
                  value={this.state.surname}
                  onChange={this.handleInput}
                />
              </Row>
              <Row label="Width">
                <input name="width" value={this.state.width} />
              </Row>
            </Card>
          </div>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default App
