import '../App.css';
import CartContainer from "./CartContainer";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTotals, getCartItems } from "../features/cart/cartSlice";
import Modal from "./Modal";
import { Link } from "react-router-dom";

function Home() {
    const { cartItems, isLoading, error } = useSelector(store => store.cart)
    const { isOpen } = useSelector(store => store.modal)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getTotals())
    }, [cartItems])

    useEffect(() => {
        dispatch(getCartItems())
    }, [])

    if (isLoading) {
        return <div className='loading'>
            <h4> ...Loading</h4>
        </div>
    }
    if (error) {
        return <div className='error'>
            <h4> Ooops, {error}</h4>
        </div>
    }
    return (
        <main>
            {isOpen && <Modal/>}
            <Navbar/>
            <CartContainer/>
            <Footer/>
        </main>
    );
}

export default Home;
