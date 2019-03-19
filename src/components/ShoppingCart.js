import React, { Component } from 'react';

const cartStyle={
  display: 'grid',
  width: '50%',
  marginTop: '50px'
}


class ShoppingCart extends Component {
  render() {
    return (
    <div style={cartStyle}>
      <h1>Shopping Cart</h1>
      {this.props.children}
    </div>
    );
  }
}

export default ShoppingCart;
