import React, { Component } from 'react';
import Recipient from './components/Recipient';
import Message from './components/Message';
import BitlyApi from './api/BitlyApi';
import BurstApi from './api/BurstApi';
import './App.css';

class App extends Component {
  constructor(props, context) {
    super(props, context);

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
    if (this.messageInput && this.recipientInput &&
      this.messageInput.value && this.recipientInput.value) {
      BitlyApi.replaceWithShortUrls(this.messageInput.value).then(messageWithShortUrls => {
        BurstApi.send(messageWithShortUrls, this.recipientInput.value).then(result => {
          if (result)
            console.log('Message sent');
          else
            console.log('Message not sent');
        });
      });
    }
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
                <div className="form-group">
                  <label>Message:</label>
                  <Message setMessageRef={this.setMessageRef} />
                </div>
                <div className="form-group">
                  <label>Recipient:</label>
                  <Recipient setRecipientRef={this.setRecipientRef} />
                </div>
                <button className="btn btn-primary pull-right" onClick={this.send}>Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
