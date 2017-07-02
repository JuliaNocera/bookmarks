import React from 'react'
import { Route, Link } from 'react-router-dom'

import Home from '../homeContainer'
import Login from '../loginContainer'
import About from '../../components/about'
import Another from '../anotherContainer'

const App = () => (
  <div style={{margin: "10px"}}>
    <header>
      <Link to="/">Home</Link>
      <br/>
      <Link to="/about">About</Link>
      <br/>
      <Link to='another'>Another</Link>
    </header>

    <main>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/another" component={Another} />
    </main>
  </div>
)

export default App
