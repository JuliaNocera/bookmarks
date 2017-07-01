import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { changePage } from '../helpers/navigation'
import Home from '../components/home'

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: (path) => changePage(path)
}, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(Home)
