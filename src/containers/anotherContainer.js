import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { changePage } from '../helpers/navigation'
import Another from '../components/another'

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: (path) => changePage(path)
}, dispatch)

export default connect(
  null,
  mapDispatchToProps  
)(Another)
