import React, { Component } from 'react'
import Headline from './components/Headline'

class App extends Component {
  // using this syntax just to see if babel plugin works
  state = {
    name: 'React'
  }

  // using this syntax just to see if babel plugin works
  changeName = () => this.setState({ name: 'REACT' })

  render() {
    return (
      <div>
        <Headline name={this.state.name} changeName={this.changeName} />
      </div>
    )
  }
}

export default App
