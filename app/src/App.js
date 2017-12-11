import React, { Component } from 'react';
import Recipient from './components/Recipient';
import Message from './components/Message';
import './App.css';

class App extends Component {

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
                  <Message />
                </div>
                <div className="form-group">
                  <label>Recipient(s):</label>
                  <Recipient />
                  <Recipient />
                  <Recipient />
                </div>
                <button className="btn btn-primary pull-right">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
