import React, { Component } from 'react'
import { SubmissionError } from 'redux-form'

import { updateActiveUser } from '../actions/actions'
import { getUserData, listenToUserData } from '../firebase/database'
import { signIn, setupAuthListener } from '../firebase/firebaseAuth'
import { customerAdminSwitchboard } from '../routing/navigation'
import LoginForm from './forms/Misc/LoginForm'

class Login extends Component {

  authHandler(userData) {
    const { updateActiveUser } = this.props
    getUserData(userData.uid)
      .then((userDocument) => {
        let userDocWithId = userDocument.val()
        userDocWithId.uid = userData.uid
        updateActiveUser(userDocWithId)
        customerAdminSwitchboard(userDocument.val())
        listenToUserData(userData.uid, updateActiveUser)
      })
  }

  submit(data) {
    return signIn(data.username, data.password)
      .catch((error) => {
        throw new SubmissionError({_error: error.message})
      })
  }

  componentDidMount() {
    setupAuthListener(this.authHandler.bind(this))
  }

  render() {
    if(this.props.activeUser.email) {
      return this.props.children
    } else {
      return (
        <div style={styles.container}>
          <LoginForm onSubmit={ this.submit.bind(this) } />
        </div>
      )
    }
  }
}
