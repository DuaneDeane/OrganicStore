import React, { Component } from "react";
import "./product.css";
import QuantityPicker from "../quantityPicker/quantityPicker";

class Product extends Component {
    state = {};

    render() {
        return( 
        <div class="product">
            <img src="https://picsum.photos/150/200"></img>

            <h4>Product Name</h4>

            <div className="prices">
                <h6>Price:$xxx</h6>
                <h5>Total:$xxx</h5>
            </div>

            <div className="controls">
                <QuantityPicker></QuantityPicker>
                <button className="btn btn-sm btn-info">Add</button>
            </div>

        </div>
        );
    }
}

export default Product;
