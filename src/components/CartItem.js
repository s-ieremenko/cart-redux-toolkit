import React from 'react';
import { ArrowDownIcon, ArrowUpIcon } from "../icons";
import { useDispatch } from "react-redux";
import { remove, toggle } from "../features/cart/cartSlice";

const CartItem = ({ item }) => {
    const { id, img, title, price, amount } = item
    const dispatch = useDispatch()
    return (
        <article className='cart-item'>

            <img src={img} alt="title"/>
            <div className='cart-item-content'>
                <h3>   {title}</h3>
                <h3>${price}</h3>
                <button onClick={() => dispatch(remove(id))}>remove</button>
            </div>
            <div className='amount'>
                <button onClick={() => dispatch(toggle({ id, typeOfAction: 'inc' }))}>
                    <ArrowUpIcon/>
                </button>


                <p>{amount}</p>
                <button onClick={() => {
                    if (amount === 1) {
                        dispatch(remove(id))
                    } else {
                        dispatch(toggle({ id, typeOfAction: 'dec' }))
                    }
                }}>
                    <ArrowDownIcon/>
                </button>

            </div>
        </article>
    );
};

export default CartItem;