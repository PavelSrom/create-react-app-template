import React from 'react'
import PropTypes from 'prop-types'

import classes from './Headline.css'

const Headline = ({
  name,
}) => (
  <div>
    <h1 className={classes.headline}>Hello {name}! :)</h1>
    <button onClick={changeName}>Click me!</button>
  </div>
)

Headline.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Headline
