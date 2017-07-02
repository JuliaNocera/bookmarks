import React from 'react'
import { connect } from 'react-redux'

import Home from '../components/home'

const mapStateToProps = (state) => ({
  activeUser: state.activeUser
})

export default connect(
  mapStateToProps
)(Home)


