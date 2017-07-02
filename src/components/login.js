import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SubmissionError } from 'redux-form'

//import { updateActiveUser } from '../actions'
import { getUserData, listenToUserData } from '../firebase/database'
import { signIn, setupAuthListener  } from '../firebase/authentication'

import Home from '../containers/homeContainer'
import LoginForm from '../forms/LoginForm'

class Login extends Component {

  constructor(props) {
    super(props) 
  }

  authHandler(userData) {
    const { updateActiveUser } = this.props
    getUserData(userData.uid)
      .then((userDocument) => {
        let userDocWithId = userDocument.val()
        userDocWithId.uid = userData.uid
        updateActiveUser(userDocWithId)
        listenToUserData(userData.uid, updateActiveUser)
      })
  }

  componentDidMount() {
    setupAuthListener(this.authHandler.bind(this))
  }
  
  submit(data) {
    return signIn(data.email, data.password)
      .catch((err) => {
        throw new SubmissionError({_error: err.message})
      })
  }
  
  render() {
    const { changePage, activeUser } = this.props
    if(activeUser.account) {
      return (
      <Home /> 
      )
    } else {
      return (
        <LoginForm 
          onSubmit={this.submit.bind(this)}
        />
      ) 
    }
  }

}

export default Login
