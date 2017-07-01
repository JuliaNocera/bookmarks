import * as firebase from 'firebase'

var config = {
  apiKey: "AIzaSyBjB2tRZb5IY0peaSjXvWZ_sFbwq4m8pKk",
  authDomain: "bookmarkme-9056b.firebaseapp.com",
  databaseURL: "https://bookmarkme-9056b.firebaseio.com",
  projectId: "bookmarkme-9056b",
  storageBucket: "bookmarkme-9056b.appspot.com",
  messagingSenderId: "1060423230232"
};

const firebaseApp = firebase.initializeApp(config);


export const database = firebaseApp.database()

export const auth = firebaseApp.auth()

//export const storage = firebaseApp.storage()

