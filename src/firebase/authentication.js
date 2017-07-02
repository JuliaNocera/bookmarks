import * as firebase from 'firebase'

import { clearStore } from '../actions'
import { auth } from './firebaseApp'

export const signIn = (email, password) => {
 return auth.signInWithEmailAndPassword(email, password)
}

export const signOut = () => {
  return dispatch => {
    auth.signOut()
    window.localStorage.clear()
    dispatch(clearStore())
  }
}

export const setupAuthListener = (callback) => {
  auth.onAuthStateChanged((user) => {
    if(user) {
      callback(user)
    } else {
      console.log('not logged in')
    }
  })
}


  
