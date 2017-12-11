import React, { Component } from 'react';

class Message extends Component {
  render() {
    return (
      <div>
        <textarea ref={this.props.setMessageRef} className="form-control" rows="10"></textarea>
        <small className="pull-right form-text text-muted">1/160 (1)</small>
      </div>
    );
  }
}

export default Message;
