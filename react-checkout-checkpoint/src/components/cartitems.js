import React, { Component } from 'react';
import CartItem from './cartitem';

// let cartItemList = [
//     { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
//     { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
//     { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
//   ]

  class CardItems extends Component {
    constructor(props){
        super(props);

        this.state = {

        }
    }


      render(){
          return (
<div className="container">
  <h1>Cart Items</h1>
  <div className="list-group">
    <div className="list-group-item">
      <div className="row">
        <div className="col-md-8">Product</div>
        <div className="col-md-2">Price</div>
        <div className="col-md-2">Quantity</div>
      </div>
    </div>
    {this.props.items.map(ele => {
        return <CartItem item = {ele} />
    })}
  </div>
</div>
          )
      }
  }

  export default CardItems