import React from 'react';
import './../css/navbar.css';
import { Link } from 'react-router-dom';
import { UserCircle2, MoreHorizontal, ShoppingCart, Search } from 'lucide-react';

const Navbar = () => {

    return (
        <div className='div1'>
            <div className='div2'>
                <h1><span className='Buy'>Buy</span>It.com</h1>
                <div className='searchDiv'>
                    <input className='searchBar' placeholder='Search for products...' />
                    <Search className='searchBtn' />
                </div>
                <div className='div3'>
                    <div className='iconsDiv'>
                        <UserCircle2 />
                        <Link className='link' to='/' >My Account</Link>
                    </div>
                    <div className='iconsDiv'>
                        <MoreHorizontal />
                        <Link className='link' to='/' >More</Link>
                    </div>
                    <div className='iconsDiv'>
                        <ShoppingCart />
                        <Link className='link' to='/' >My Cart</Link>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Navbar;