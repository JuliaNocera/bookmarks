import React from 'react'
import { Route, Link } from 'react-router-dom'

import Home from '../home'
import About from '../../components/about'
import Another from '../another'

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <br/>
      <Link to="/about">About</Link>
      <br/>
      <Link to='another'>Another</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/another" component={Another} />
    </main>
  </div>
)

export default App
