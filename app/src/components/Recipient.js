import React, { Component } from 'react';

class Recipient extends Component {
  render() {
    return (
      <div className="input-group" style={{ marginBottom: "5px" }}>
        <div className="input-group-addon">+63</div>
        <input
          ref={this.props.setRecipientRef}
          type="number" className="form-control" placeholder="9171112222" />
      </div>
    );
  }
}

export default Recipient;
