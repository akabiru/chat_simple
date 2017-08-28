import reducer from './reducer';
import createStore from './store';

const initialState = { messages: [] };
const messageStore = createStore(reducer, initialState);

export default messageStore;
