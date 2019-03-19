import React, { Component } from 'react';
import './App.css';
import ShoppingCart from './components/ShoppingCart';
import Product from './components/Product';
import Total from './components/Total';

const products = [
  {
    name: 'Product 1',
    quantity: '2',
    price: '2.50'
  },
  {
    name: 'Product 2',
    quantity: '1',
    price: '1.50'
  }
]


const appStyle={
  display:'flex',
  justifyContent: 'center'
}

class App extends Component {

  state = {
    productsList: products
  }

  handleIncrease = (index) => {
    const products = this.state.productsList.map((e, i) => {
      if (i === index) {
        return e.quantity++
      }
    })
    this.setState({
      productsList: this.state.productsList
    });
  }

  handleDecrease = (index) => {
    const products = this.state.productsList.map((e, i) => {
      if (i === index && e.quantity !== 0) {
        return e.quantity--
      }
    })
    this.setState({
      productsList: this.state.productsList
    });
  }


  renderProducts() {
    return this.state.productsList.map((product, index) => {
      return <Product
        key={index}
        name={product.name}
        quantity={product.quantity}
        price={product.price * product.quantity + ' €'}
        increase={() => this.handleIncrease(index)}
        decrease={() => this.handleDecrease(index)}
      />
    })
  }

  renderTotal() {
    let total = 0;
    this.state.productsList.forEach(e => {
      total += e.quantity * e.price;
    })
    let totalIva = (total / 100) * 21;
    return <Total
      totalPrice={total}
      iva={21}
      totalIvaPrice={parseFloat(total + totalIva).toFixed(2)}
    />
  }

  render() {
    return (
      <div style={appStyle}>
        <ShoppingCart>
          {this.renderProducts()}
          {this.renderTotal()}
        </ShoppingCart>
      </div>

    );
  }
}

export default App;
