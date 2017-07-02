import * as firebase from 'firebase'

import { auth } from './firebaseApp'

export const signIn = (email, password) => {
 return auth.signInWithEmailAndPassword(email, password)
}

//export const signOut

//export const createUser
export const setupAuthListener = (callback) => {
  auth.onAuthStateChanged((user) => {
    if(user) {
      callback(user)
    } else {
      console.log('not logged in')
    }
  })
}


  
