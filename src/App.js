import React, { Component } from 'react'
import Headline from './components/Headline'

class App extends Component {
  /**
   * Using this syntax just to see if babel plugin works
   *
   * @memberof App
   */
  state = {
    name: 'React'
  }

  /**
   * Using this syntax just to see if babel plugin works
   *
   * @memberof App
   */
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
