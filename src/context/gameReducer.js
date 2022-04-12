export default (state, action) => {
  // console.log('action', action)
  switch (action.type) {
    case 'GET_GAMES':
      return {
        ...state,
        games: action.payload,
      }
    case 'SEARCH_RESULT':
      return {
        ...state, search: action.payload
      }
    case 'STATE_CLEAR':
      return {
        ...state, search: []
      }
    default:
      return state
  }
}
