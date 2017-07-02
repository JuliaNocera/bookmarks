import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import activeAccount from './activeAccount'
import activeUser from './activeUser'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  routing: routerReducer,
  form: formReducer,
  activeAccount,
  activeUser
})
