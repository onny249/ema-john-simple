import React, { useState } from 'react';
import fakeData from '../../fakeData'
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    console.log(fakeData);
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([])//useState e shudu number add hobe..product er aro kichu info jabe tai eikhane array nite hobe.
    // console.log(first10);
    const handleAddProduct = (product) => {
        console.log('product added', product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                <ul>
                    
                    {
                        products.map(allProduct =>
                            <Product
                                handleAddProduct={handleAddProduct}
                                product={allProduct}>
                            </Product>)
                    }
                </ul>
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;