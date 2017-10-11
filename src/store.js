import createStore from './createStore'
import reducer from './reducer'

const initialState = { messages: [] }
const store = createStore(reducer, initialState)

export default store
