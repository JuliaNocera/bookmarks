import React from 'react'
import { Route, Link } from 'react-router-dom'

import Home from '../containers/homeContainer'
import Login from '../containers/loginContainer'
import About from '../components/about'
import Another from '../containers/anotherContainer'

const App = ({
  signOut,
  activeUser
}) => (
  <div style={{margin: "10px"}}>
    <header>
      <Link to="/">Home</Link>
      <br/>
      <Link to="/about">About</Link>
      <br/>
      <Link to='another'>Another</Link>
      <br/>
      { activeUser.account ?
        <button onTouchTap={() => signOut()}>Sign Out</button>
      : null }
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


// TODO: Turn this into the drawer style navigation and app an app bar
//
// TODO: Every other top container element should implement the Feature bar and have a back arrow to return
//
// TODO: Decide if this new way of handling navigation is the best
//      * Specifically how can we go back? is there a previous or a historical record held in the store?
