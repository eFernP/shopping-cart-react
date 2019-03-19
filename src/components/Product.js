import React, { Component } from 'react';

const productStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  borderBottom: '1px solid gray'
}

const quantityStyle = {
  display: 'flex',
}


const sectionStyle = {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '10px',
  marginRight: '5px',
  alignSelf: 'center'
}

const buttonStyle={
  border: '1px solid gray',
  borderRadius: '2px',
  backgroundColor: 'white',
  color: 'gray'
}


class Product extends Component {
  render() {
    return (
      <div style={productStyle}>
        <h3>{this.props.name}</h3>
        <div style={quantityStyle}>
          <div style={sectionStyle}>
            <button onClick={this.props.increase} style={buttonStyle}>+</button>
            <button onClick={this.props.decrease} style={buttonStyle}>-</button>
          </div>
          <p style={sectionStyle}>{this.props.quantity}</p>
        </div>
        <p style={sectionStyle}>{this.props.price}</p>
      </div>
    );
  }
}

export default Product;