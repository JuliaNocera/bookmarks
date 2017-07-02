import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { signOut } from './firebase/authentication'
import App from './app'

const mapDispatchToProps = dispatch => bindActionCreators({
  signOut: () => signOut()
}, dispatch)

const mapStateToProps = (state) => ({
  activeUser: state.activeUser
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
  
