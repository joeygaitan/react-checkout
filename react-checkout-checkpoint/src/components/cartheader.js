import React, { Component } from 'react';


class CartHeader extends Component{
    render(){
        return (
        <div>
            <nav className="navbar navbar-dark bg-primary">
                <span className="navbar-brand h1">Shopping Cart</span>
            </nav>
        </div>
        );
        }
}

export default CartHeader