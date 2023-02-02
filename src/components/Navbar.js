import React from 'react';
import { CartIcon } from "../icons";
import { useSelector } from "react-redux";

const Navbar = () => {
    const { totalAmount } = useSelector(store => store.cart)
    return (
        <nav>
            <div className='container nav-container'>
                <h3>Redux Toolkit</h3>
                <div className='nav-cart'>
                    <CartIcon/>
                    <div className='amount-container'>
                        <p>{totalAmount}</p>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;