import * as firebase from 'firebase'

import { database } from './firebaseApp'

export const getUserData = (uid)=> {
  const userRef = database.ref(`users/${uid}`)
  return userRef.once('value')
}

export const listenToUserData = (uid, callback) => {
  const userRef = database.ref(`users/${uid}`)
  return userRef.on('value', (snapshot) => {
    let userDocument = snapshot.val()
    userDocument.uid = uid
    callback(userDocument)
  })
}
