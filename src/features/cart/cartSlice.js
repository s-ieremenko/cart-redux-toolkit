import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


const url = 'https://course-api.com/react-useReducer-cart-project'

const initialState = {
    cartItems: [],
    totalAmount: 0,
    totalCost: 0,
    isLoading: false,
    error: ''
}

export const getCartItems = createAsyncThunk('cart/getCartItems', async (_, { rejectWithValue }) => {
    try {
        const res = await axios.get(url)
        return res.data
    } catch (err) {
        return rejectWithValue(err.response.data)
    }

})

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: state => {
            state.cartItems = []
        },
        toggle: (state, action) => {
            const { id, typeOfAction } = action.payload
            const cartItem = state.cartItems.find((item) => item.id === id)

            if (typeOfAction === 'inc') {
                cartItem.amount = cartItem.amount + 1
            } else if (typeOfAction === 'dec') {
                cartItem.amount = cartItem.amount - 1
            }
        },
        remove: (state, action) => {
            const productId = action.payload
            state.cartItems = state.cartItems.filter(item => item.id !== productId)
        },
        getTotals: (state) => {
            const { totalCost, totalAmount } = state.cartItems.reduce((acc, item) => {
                const itemTotal = item.amount * item.price
                acc.totalCost = acc.totalCost + itemTotal
                acc.totalAmount = acc.totalAmount + item.amount
                return acc
            }, { totalCost: 0, totalAmount: 0 })
            state.totalCost = +totalCost.toFixed(2)
            state.totalAmount = totalAmount
        }
    },
    extraReducers: {
        [getCartItems.pending]: (state) => {
            state.isLoading = true
        },
        [getCartItems.fulfilled]: (state, action) => {
            state.isLoading = false
            state.cartItems = action.payload
        },
        [getCartItems.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },
    }

})

export const { clearCart, remove, toggle, getTotals } = cartSlice.actions
export default cartSlice.reducer