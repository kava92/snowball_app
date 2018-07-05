import React from 'react';
import '../css/Product.css';

class Product extends React.Component{
    render(){
        const name = this.props.details.name;
        const image = this.props.details.product_image;
        const price = this.props.details.price;
        return(
            <li className="product-container">
                <img className="img" src={image} />
                    <h3 className="product-name">{name}</h3>
                    <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget diam in purus vehicula laoreet. Suspendisse nibh purus, pellentesque eu.</p>
                    <p className="product-price">{price} $</p>
                    <button className="add-button"> Add to Cart </button>
            </li>
        )
    }
}

export default Product;