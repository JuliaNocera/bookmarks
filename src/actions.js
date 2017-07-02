export const updateActiveUser = (userData) => ({
  type: 'UPDATE_ACTIVE_USER',
  userData
})

export const updateActiveAccount = (accountData) => ({
  type: 'UPDATE_ACTIVE_ACCOUNT',
  accountData
})

export const clearStore = () => ({
  type: 'CLEAR_STORE'
})
