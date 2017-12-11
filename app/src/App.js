import React, { Component } from 'react';
import Recipient from './components/Recipient';
import Message from './components/Message';
import BitlyApi from './api/BitlyApi';
import BurstApi from './api/BurstApi';
import './App.css';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isNumberValid: true,
      isSending: false,
      messageSent: false
    };

    this.setMessageRef = this.setMessageRef.bind(this);
    this.setRecipientRef = this.setRecipientRef.bind(this);
    this.send = this.send.bind(this);
  }

  setMessageRef(input) {
    this.messageInput = input;
  }
  setRecipientRef(input) {
    this.recipientInput = input;
  }

  send() {
    if (this.isValid()) {
      BitlyApi.replaceWithShortUrls(this.messageInput.value).then(messageWithShortUrls => {
        this.setState({ isSending: true });
        BurstApi.send(messageWithShortUrls, this.recipientInput.value).then(() => {
          this.setState({ messageSent: true, isSending: false });
        });
      });
    }
  }

  isValid() {
    let isNumberValid = this.recipientInput.value.length === 10;
    this.setState({ isNumberValid });
    return isNumberValid;
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="col-md-8 col-md-offset-2">

            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Send SMS</h3>
              </div>
              <div className="panel-body">
                <Message setMessageRef={this.setMessageRef} />
                <Recipient setRecipientRef={this.setRecipientRef} isNumberValid={this.state.isNumberValid} />
                <button className="btn btn-primary pull-right"
                  onClick={this.send} disabled={this.state.isSending}>Send</button>
              </div>
              {this.state.messageSent && <div className="panel-footer">Message Sent</div>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
