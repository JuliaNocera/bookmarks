import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const BookmarkMe = combineReducers({
  form: formReducer
})

export default BookmarkMe
