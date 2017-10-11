const reducer = function (state, action) {
  switch(action.type) {
    case 'ADD_MESSAGE':
      return {
        messages: state.messages.concat(action.message)
      }
    case 'DELETE_MESSAGE':
      return {
        messages: [
          ...state.messages.splice(0, action.index),
          ...state.messages.slice(
            action.index + 1, state.messages.length
          )
        ]
      }
    default:
      return state
  }
}

export default reducer;
