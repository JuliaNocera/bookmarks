const activeUser = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_ACTIVE_USER':
      console.log(action.userData)
      return Object.assign({}, state, action.userData)
    case 'CLEAR_STORE':
      return {}
    default:
      return state
  }
}

export default activeUser
