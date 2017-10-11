import React, { Component } from 'react';
import store from './store';
import MessageView from './MessageView';
import MessageInput from './MessageInput';

class App extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }

  render() {
    const messages = store.getState().messages;

    return (
      <div className='ui segment'>
        <MessageView messages={messages} />
        <MessageInput />
      </div>
    );
  }
}

export default App;
