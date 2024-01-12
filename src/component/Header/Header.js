import React from 'react';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Header.css';
//rsc
const Header = () => {
    return (
        <div>
            <img src={logo} alt="" />
           <nav>
            <a href="/shop">Shop</a>
            <a href="/review">Order Review</a>
            <a href="/Manage">Manage Inventory</a>
            </nav>
            <div className='search'>
            
            <input type="text" placeholder='type here to text'/>
            <FontAwesomeIcon className='cart-icon' icon={faShoppingCart} />
            </div>
            

        </div>
    );
};

export default Header;