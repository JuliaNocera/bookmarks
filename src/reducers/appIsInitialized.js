const appIsInitialized = (state = {}, action) => {
  switch (action.type) {
    case 'APP_IS_INITIALIZED':
      return Object.assign({}, state, action.isInitialized)
    default:
      return state
  }
}

export default appIsInitialized
