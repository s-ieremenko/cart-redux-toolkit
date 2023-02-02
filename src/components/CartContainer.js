import React from 'react';
import CartItem from "./CartItem";
import { useSelector } from "react-redux";


const CartContainer = () => {
    const { cartItems, totalAmount } = useSelector(store => store.cart)
    return (
        <section className='container cart-container'>
            <header>
                <h2>Your bag</h2>
            </header>
            <div>
                {totalAmount > 1 ? cartItems.map(item => <CartItem key={item.id} item={item}/>) :
                    <div className='empty-bag'>is currently empty</div>}
            </div>

        </section>
    );
};

export default CartContainer;