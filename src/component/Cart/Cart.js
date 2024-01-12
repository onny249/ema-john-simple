import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart);
    // const total = cart.reduce((total, prd)=> total+prd.price ,0);
    // const totalshipping = Math.round(cart.reduce((total, prd)=> total+prd.shipping ,0));
    // const totals = Math.round(total+totalshipping);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = Math.round(total + product.price);
    }
    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 12.99;
    }
    const tax = Math.round(total / 10);
    const AllCost = Math.round(total+shipping+tax);
    return (
        <div className='Cost-details'>
            <h3>Order Summary </h3>
            <div className='total-cost'>
                <h4>Items Ordered: {cart.length}</h4>
                <h3>Product price: {total}</h3>
                <h3>Shipping Cost: {shipping}</h3>
                <h4>Tax+vet: {tax}</h4>
                <h4>Total: {total + shipping + tax}</h4>
            </div>
            {/* <h3>All Cost: {totals}</h3> */}

        </div>
    );
};

export default Cart;