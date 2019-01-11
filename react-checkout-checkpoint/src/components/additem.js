import React, { Component } from 'react';

class AddItem extends Component {
    constructor(props){
        super(props);

        
    }

    handleSubmit = (event) => {
        event.preventDefault()

        let quantity = event.target.quantity.value;
        let productValue = event.target.product.value;

        const productChosen = this.props.product.find(val => {
                return productValue ==  val.id
        })
        
        this.props.click(quantity, productChosen)
    }
    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>

                <div className="form-group">
                    <label for="exampleFormControlInput1">Quantity</label>
                    <input type="text" class="form-control " id="exampleFormControlInput1" name="quantity"/>
                </div>

                    <div className="form-group">

                        <label for="exampleFormControlSelect1">Example select</label>
                        <select name="product" className="form-control" id="exampleFormControlSelect1">
                           { this.props.product.map(prod => {
                               return <option value={prod.id}>{ prod.name }</option>
                            })}
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
         );
    }
}
 
export default AddItem;