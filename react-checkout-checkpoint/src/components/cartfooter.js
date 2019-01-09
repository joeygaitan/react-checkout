import React from 'react';

function CartFooter(props){
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                <span className="navbar-brand">&copy; {props.year}</span>
                </nav>
            </div>
        );
}

export default CartFooter;