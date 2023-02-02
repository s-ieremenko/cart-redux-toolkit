import React from 'react';
import { useDispatch } from "react-redux";
import { closeModal } from "../features/modal/modalSlice";
import { clearCart } from "../features/cart/cartSlice";

const Modal = () => {
    const dispatch = useDispatch()
    return (
        <aside className='modal-container'>
            <div className='modal'>
                <h3>Are you sure?</h3>
                <div className='modal-btn'>
                    <button className='confirm-btn' onClick={() => {
                        dispatch(clearCart())
                        dispatch(closeModal())
                    }}>confirm
                    </button>
                    <button className='cancel-btn' onClick={() => dispatch(closeModal())}>cancel</button>
                </div>

            </div>
        </aside>
    );
};

export default Modal;