import React, { Component } from "react";
import NavBar from '../navBar/navBar';

class QuantityPicker extends Component {
  state = {
    quantity: 1,
    minimum: 1,
  };

  render() {
    return (
      <div>
        <button disabled={this.state.quantity === this.state.minimum} onClick={this.decrease} className="btn btn-sm btn-info">-</button>
        <label className="quantity">{this.state.quantity}</label>
        <button onClick={this.increase} className="btn btn-sm btn-info">
          +
        </button>
      </div>
    );
  }

  increase = () => {
    let current = this.state.quantity;
    current += 1;
    this.setState({ quantity: current });
  };

  decrease = () => {
    let current = this.state.quantity;
    if(current !== this.state.minimum){
    current -= 1;
    this.setState({ quantity: current });
    }
  };
}

export default QuantityPicker;
