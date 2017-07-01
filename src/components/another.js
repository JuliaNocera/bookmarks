import React from 'react'

const Another = props => (
  <div>
    <h1>Another place!</h1>
    <button onClick={ () => props.changePage('/about')}>Go to About</button>
    <button onClick={ () => props.changePage('/')}>Go to Home</button>
  </div>
)

export default Another
