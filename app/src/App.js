import React, { Component } from 'react';
import Recipient from './components/Recipient';
import Message from './components/Message';
import BitlyApi from './api/BitlyApi';
import './App.css';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.setMessageRef = this.setMessageRef.bind(this);
    this.send = this.send.bind(this);
  }

  setMessageRef(input) {
    this.messageInput = input;
  }

  send() {
    if (this.messageInput && this.messageInput.value) {
      BitlyApi.replaceWithShortUrls(this.messageInput.value).then(messageWithShortUrls => {
        console.log(messageWithShortUrls) //TODO: Use Burst SMS to send
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
                  <label>Recipient(s):</label>
                  <Recipient />
                  <Recipient />
                  <Recipient />
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
