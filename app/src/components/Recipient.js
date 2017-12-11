import React, { Component } from 'react';

class Recipient extends Component {
  render() {
    return (
      <div className="form-group">
        <label>Recipient:</label>
        <div className="input-group" style={{ marginBottom: "5px" }}>
          <div className="input-group-addon">+63</div>
          <input
            ref={this.props.setRecipientRef}
            type="number" className="form-control" placeholder="9171112222" />
        </div>
        {!this.props.isNumberValid && <span className="label label-danger">Recipient input must be 10 digits.</span>}
      </div>
    );
  }
}

export default Recipient;
