import React from 'react';
import './../css/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div className='div1'>
            <div className='div2'>
                <h1><span className='Buy'>Buy</span>It.com</h1>
                <input className='searchBar' placeholder='Search for products...' />
                <div className='div3'>
                    <Link className='link' to='/' >My Account</Link>
                    <Link className='link' to='/' >More</Link>
                    <Link className='link' to='/' >My Cart</Link>
                </div>
            </div>

        </div>
    );
}

export default Navbar;