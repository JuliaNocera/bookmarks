import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

//import { destroyAllAccountListeners } from '../firebase/firebaseDataInitialization'

import LoginContainer from '../containers/LoginContainer'

const persistURL = (routerData) => {
  const URL = routerData.location.pathname
  window.localStorage.setItem('url', URL)
  return
}

const persistURLAndDestroyAccountListeners = (routerData) => {
  persistURL(routerData)
//  destroyAllAccountListeners()
}

injectTapEventPlugin()

const Root = ({ store }) => (
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route 
          path='/' 
          component={LoginContainer} 
        />
        <Route
          path='*'
        />
      </Router>
    </Provider>
  </MuiThemeProvider>
)

export default Root
