import React, { Component } from 'react'

import Headline from './components/Headline'

export default class App extends Component {
  /**
   * Using this syntax just to see if babel plugin works
   *
   * @memberof App
   */
  state = {
    name: 'React',
  }

  /**
   * Using this syntax just to see if babel plugin works
   *
   * @memberof App
   */
  changeName = () => this.setState({ name: 'REACT' })

  render() {
    const { name } = this.state

    return (
      <div>
        <Headline name={name} changeName={this.changeName} />
      </div>
    )
  }
}
