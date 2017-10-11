import React, { Component } from 'react';
import store from './store';

class MessageView extends Component {
  handleClick = (index) => {
    store.dispatch({
      type: 'DELETE_MESSAGE',
      index: index,
    });
  };

  render() {
    const messages = this.props.messages.map((message, index) => (
      <div
        className='comment'
        key={index}
        onClick={() => this.handleClick(index)}
      >
        {message}
      </div>
    ));

    return (
      <div className='ui comments'>
        {messages}
      </div>
    );
  }
}

export default MessageView;
