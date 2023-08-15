import React from 'react'
import Navbar from './Navbar'
import './../css/myaccount.css'

const MyAccount = () => {
  return (
    <div>
        <div>
            <Navbar />
        </div>
        <div className='helloName'>
            <h2>Hello, Yash!</h2>
            <p>Manage Your Account here</p>
        </div>
        <div className='mainBigDiv'>
            <div className='bigLeftDiv'>
                <p>My Orders</p>
                <p>Manage Payment Methods</p>
                <p>Update Profile</p>
                <p>My Wishlist</p>
                <p>My Coupons</p>
                <p>Ratings and Reviews</p>
            </div>
            <div className='bigRightDiv'>
                <p>Content Appears here</p>
            </div>
        </div>
    </div>
  )
}

export default MyAccount