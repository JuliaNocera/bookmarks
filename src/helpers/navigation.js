import React from 'react'
import { push } from 'react-router-redux'

export const changePage = (path) => {
  return push(path)
}
