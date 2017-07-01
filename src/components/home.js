import React from 'react'

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>Someday we will log in here!</p>
    <button onClick={ () => props.changePage('/about') }> Go to about page via redux</button>
  </div>
)

export default Home
