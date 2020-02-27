import React from 'react'
import PropTypes from 'prop-types'
import './ProductListItem.css'





const ProductListItem = ({
    image,
    name,
    description ="No description",
    type,
    capacity,
    price,
    
}) => {
    return (
        <div className="product-list-item">
            <div className="product-img">
                <img src={image} alt={description} title={name} />
            </div>
            <div className="product-title">{name}</div>
            <div className="product-description">{description}</div>
            <div className="product-features">Type: {type}</div>
            <div className="product-features">Capacity: {capacity}</div>
            <div className="product_quantity">
                <button>-</button>
                <input type="text" value="1"/>
                <button>+</button>
            </div>
            <div className="product-price">{price}$</div>
            <div className="btn-add-to-cart">Add to cart</div>
        </div>
    )
}

ProductListItem.propTypes = {
    name:PropTypes.string.isRequired,
    description:PropTypes.string,
    type:PropTypes.string.isRequired,
    capacity:PropTypes.number.isRequired,
    price:PropTypes.number.isRequired,
    image:PropTypes.string,
}

// ProductListItem.defaultProps = {
//     description: "No description ..."
// }

// ProductListItem.defaultProps = {
//     image: "/images/no-image.png"
// }


export default ProductListItem