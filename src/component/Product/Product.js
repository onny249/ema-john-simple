import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faStar, faStarHalf, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    // console.log(props.product.name);
    const { img, name, seller, wholePrice, stock } = props.product;
    return (
        <div className='product'>
            <div className='product-image'>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className='product-name'>{name}</h4>
                <br />
                <h3><small>by: {seller}</small></h3>
                <div className='rate'>
                    <p>${wholePrice}</p>
                    <span className='rating'>
                        {<FontAwesomeIcon icon={faStar} />}
                        {<FontAwesomeIcon icon={faStar} />}
                        {<FontAwesomeIcon icon={faStar} />}
                        {<FontAwesomeIcon icon={faStar} />}
                        {<FontAwesomeIcon icon={faStarHalfStroke} />}
                    </span>
                </div>
                <p>Only {stock} left in stock</p>
                {/* click handler add korte hoy and parameter pass korte hoy tahole 1st e ekta arrow function add korte hobe. ar eita korar karon holo add cart e click single product er e cost show kore. or shob gula product show nah kore.
                    jodi arrow function chara parameter pass korle protita product show korbe and individually kuno product e cost ber kora jabe nah. */}
                <button onClick={() => props.handleAddProduct(props.product)} className='main-button'>

                    {<FontAwesomeIcon className='cart-icon-btn' icon={faShoppingCart} />} add to cart</button>

            </div>

        </div>
    );
};

export default Product;