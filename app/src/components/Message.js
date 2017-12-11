import React, { Component } from 'react';

class Message extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      messageLength: 0
    };
  }
  onChange(event) {
    this.setState({ messageLength: event.target.value.length });
  }
  render() {
    const { messageLength } = this.state;
    let textCount = (Math.floor((messageLength-1)/160)+1);
    if (textCount === 0) textCount = 1;

    return (
      <div className="form-group">
        <label>Message:</label>
        <textarea
          ref={this.props.setMessageRef}
          onChange={this.onChange.bind(this)}
          maxLength="480"
          className="form-control" rows="10"></textarea>
        <small className="pull-right form-text text-muted">
          {messageLength}/{textCount*160} ({textCount})
        </small>
      </div>
    );
  }
}

export default Message;
