import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin';

import store, { history } from './store'
import App from './appContainer'
import './index.css';

const target = document.querySelector('#root')

injectTapEventPlugin()

render(
  <MuiThemeProvider>
    <Provider store={store} >
      <ConnectedRouter history={history}>
        <div>
          <App />
        </div>
      </ConnectedRouter>
    </Provider>
  </MuiThemeProvider>,
  target
)

