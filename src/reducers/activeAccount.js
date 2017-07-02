const activeAccount = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_ACTIVE_ACCOUNT':
      return Object.assign({}, action.accountData, state)
    default:
      return state
  }
}

export default activeAccount
