import React, { Component } from 'react';

const totalStyle ={
  justifySelf: 'flex-end'
}

class Total extends Component {
  render() {
    return (
    <div style={totalStyle}>
      <p>Total: {this.props.totalPrice}</p>
      <p>IVA: {this.props.iva} %</p>
      <p>Total + IVA: {this.props.totalIvaPrice}</p>
    </div>
    );
  }
}

export default Total;