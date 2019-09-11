const usernameReducer = (state = {}, action) => {
  switch(action.type) {
    case 'set_username':
      return {
        ...state,
        username: action.data,
      }

    default:
      return state
  }
}

export {usernameReducer}