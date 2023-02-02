import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { openModal } from "../features/modal/modalSlice";

const Footer = () => {
    const { totalCost } = useSelector(store => store.cart)
    const dispatch = useDispatch()

    if (totalCost > 0) {
        return (
            <footer className='container'>
                <div className='footer-content'>
                    <p>Total</p>
                    <p>{totalCost}</p>
                </div>
                <div className='clearAll-btn'>
                    <button onClick={() => {
                        dispatch(openModal())
                    }}>clear all
                    </button>
                </div>

            </footer>

        );
    }

};

export default Footer;