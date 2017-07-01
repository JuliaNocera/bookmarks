import * as firebase from 'firebase'

import auth from './index'

export const signIn = (email, password) => {
 return auth.signInWithEmailAndPassword(email, password)
}

//export const signOut

//export const createUser



  
