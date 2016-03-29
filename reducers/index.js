import { combineReducers } from 'redux'
import list from './list'
import email from './email'

const rootReducer = combineReducers({
  list,
  email
})

export default rootReducer
