import React from 'react'
import classes from './Headline.css'

const headline = props => (
  <div>
    <h1 className={classes.headline}>Hello {props.name}! :)</h1>
    <button onClick={props.changeName}>Click me!</button>
  </div>
)

export default headline
