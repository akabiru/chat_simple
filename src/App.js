import React, { Component } from 'react';
import messageStore from './messageStore';
import MessageView from './MessageView';
import MessageInput from './MessageInput';


class App extends Component {
  componentDidMount() {
    messageStore.subscribe(() => this.forceUpdate());
  }

  render() {
    const messages = messageStore.getState().messages;

    return (
      <div className='ui segment'>
        <MessageView messages={messages} />
        <MessageInput />
      </div>
    );
  }
}

export default App;
