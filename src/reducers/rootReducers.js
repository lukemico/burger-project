import {combineReducers} from 'redux'
import {usernameReducer} from './usernameReducer'

const rootReducer = combineReducers({
    user: usernameReducer,
  },
)

export {rootReducer}