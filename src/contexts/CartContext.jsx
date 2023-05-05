import React, { useState, createContext } from 'react'

export const CartContext = createContext();
const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addToCart = (product, id) => {
        const newItem = { ...product, amount: 1 }
        const cartItem = cart.find(item => {
            return item.id === id
        })
        // If item already in cart
        if (cartItem) {
            const newCart = [...cart].map(item => {
                if (item.id === id) {
                    return { ...item, amount: cartItem.amount + 1 }
                } else {
                    return item;
                }
            });
            setCart(newCart);
        } else {
            setCart([...cart, newItem]);
        }
        console.log(cart);
    }

    const removeFromCart = (id) => {
        const newCart = cart.filter(item => {
            return item.id !== id;
        })
        setCart(newCart);
    }
    const clearCart = () => {
        setCart([]);
    }

    const increaseAmount = (id) => {
        const cartItem = cart.find(item => {
            return item.id === id
        })
        addToCart(cartItem, id)
    }
    const decreaseAmount = (id) => {
        const cartItem = cart.find(item => {
            return item.id === id
        })
        if (cartItem) {
            const newCart = cart.map(item => {
                if (item.id === id) {
                    return { ...item, amount: cartItem.amount - 1 }
                } else {
                    return item;
                }
            });
            setCart(newCart);
        }
        if (cartItem.amount < 2) {
            removeFromCart(id)
        }
    }
    return (
        <CartContext.Provider value={{
            clearCart,
            cart,
            addToCart,
            removeFromCart,
            increaseAmount,
            decreaseAmount
        }} >
            {children}
        </CartContext.Provider >
    )
}

export default CartProvider