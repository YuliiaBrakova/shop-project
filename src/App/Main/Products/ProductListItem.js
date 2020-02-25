import React from 'react'
import './ProductListItem.css'



const ProductListItem = (props) => {
    return (
        <div className="product-list-item">
            <div className="product-title">{props.name}</div>
            <div className="product-description">{props.description}</div>
            <div className="product-features">Type: {props.type}</div>
            <div className="product-features">Capacity: {props.capacity}</div>
            <div className="product-price">{props.price}$</div>
            <div className="btn-add-to-cart">Add to cart</div>
        </div>
    )
}
export default ProductListItem