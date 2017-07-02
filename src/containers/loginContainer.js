import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateActiveUser } from '../actions'
import { changePage } from '../helpers/navigation'
import Login from '../components/login'

const mapStateToProps = (state) => ({
  activeUser: state.activeUser
})

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: (path) => changePage(path),
  updateActiveUser: (userData) => updateActiveUser(userData)
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
