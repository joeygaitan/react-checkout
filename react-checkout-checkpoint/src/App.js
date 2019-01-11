import React, { Component } from 'react';
import './App.css';
import CartHeader from './components/cartheader';
import CartFooter from './components/cartfooter';
import CartItems from './components/cartitems';
import AddItem from './components/additem';

class App extends Component {
constructor(props){
  super(props);
  this.state = {
    cartItemsList : [
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 3.99 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 4.99 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 19.99 }, quantity: 1 },
    ] ,

   products: [
      { id: 40, name: 'Mediocre Iron Watch', priceInCents: 3.99 },
      { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 4.99 },
      { id: 42, name: 'Intelligent Paper Knife', priceInCents: 19.99 },
      { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 25.00 },
      { id: 44, name: 'Practical Copper Plate', priceInCents: 10.00 },
      { id: 45, name: 'Awesome Bronze Pants', priceInCents: 3.99 },
      { id: 46, name: 'Intelligent Leather Clock', priceInCents: 29.99 },
      { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 400.00 },
      { id: 48, name: 'Awesome Leather Shoes', priceInCents: 399.0 },
    ]
  }

}

addItems=(qty, prod)=>{  
const id = this.state.cartItemsList.length + 1;

const newCartItem = {
   id,
   product: prod,
   quantity: qty
 }

 this.setState({
   cartItemsList: [...this.state.cartItemsList, newCartItem]
 })
}


  render() {
      return (
      <React.Fragment>
      <header><CartHeader /></header>
      <CartItems items={this.state.cartItemsList}/>
      <AddItem click = { this.addItems } product = { this.state.products }/>
      <footer><CartFooter year={'2016'} /></footer>
    </React.Fragment>
    );
  }
}

export default App;
