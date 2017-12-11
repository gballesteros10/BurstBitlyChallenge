import React, { Component } from 'react';

class Recipient extends Component {
  render() {
    return (
      <div className="input-group" style={{ marginBottom: "5px" }}>
        <div className="input-group-addon">+63</div>
        <input
          type="number" className="form-control" placeholder="917-999-9999" />

        <div className="input-group-addon">Add</div>
      </div>
    );
  }
}

export default Recipient;
