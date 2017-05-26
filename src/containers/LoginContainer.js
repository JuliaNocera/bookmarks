import React from 'react'
import { connect } from 'react-redux'

import Login from '../components/Login'

const mapStateToProps = (state) => ({
  appInitialized: state.appInitialized,
  activeUser: state.activeUser
})

const mapDispatchToProps = {
  updateActiveUser
}

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

export default LoginContainer
