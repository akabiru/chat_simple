function createStore(initialState, reducer) {
  let state = initialState;
  const listeners = [];

  const subscribe = (listener) => {
    listeners.push(listener);
  };

  const getState = () => (state);

  const dispatch = (action) => {
    state = reducer(state, action);
    // invoke all listeners on state change
    listeners.forEach(l => l());
  };

  return {
    getState,
    dispatch,
    subscribe,
  };
}

// reducers must be pure functions
function messageReducer(state, action) {
  if (action.type === 'ADD_MESSAGE') {
    return {
      messages: state.messages.concat(action.message),
    };
  } else if (action.type === 'DELETE_MESSAGE') {
    // Immutable deletion strategy
    // all elements from 0 to action index
    // all elements from action index + 1 to the end of the array
    return {
      messages: [
        ...state.messages.slice(0, action.index),
        ...state.messages.slice(action.index + 1, state.messages.length)
      ]
    }
  } else {
    return state;
  }
}


// App

const initialState = {
  messages: []
};

const store = createStore(initialState, messageReducer);

// log current state
const listener = () => {
  console.log('Current state: ', store.getState());
};

// subscribe the listener
store.subscribe(listener);

const addMessageAction1 = {
  type: 'ADD_MESSAGE',
  message: 'How do you read?',
};

store.dispatch(addMessageAction1);
// -> `listener()` is called
const addMessageAction2 = {
  type: 'ADD_MESSAGE',
  message: 'I read you loud and clear, Houston.',
};
store.dispatch(addMessageAction2);
// -> `listener()` is called
const deleteMessageAction = {
  type: 'DELETE_MESSAGE',
  index: 0,
};

store.dispatch(deleteMessageAction);
