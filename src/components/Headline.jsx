import React from 'react'
import PropTypes from 'prop-types'

import classes from './Headline.css'

const Headline = ({
  name,
  changeName,
}) => (
  <div>
    <h1 className={classes.headline}>
      Hello
      {name}
      ! :)
    </h1>
    <button onClick={changeName} type="button">Click me!</button>
  </div>
)

Headline.propTypes = {
  name: PropTypes.string.isRequired,
  changeName: PropTypes.func.isRequired,
}

export default Headline
