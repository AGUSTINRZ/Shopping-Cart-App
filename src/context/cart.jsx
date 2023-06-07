import React, { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
	const [cart, setCart] = useState([]);
	const [prodsQuantity, setProdsQuantity] = useState(0)
	const [totalPrice, setTotalPrice] = useState(0)

	function addToCart(product) {
		const productInCartIndex = cart.findIndex((item) => item.id === product.id);
		if (productInCartIndex >= 0) {
			const newCart = structuredClone(cart);
			newCart[productInCartIndex].quantity += 1;
			setProdsQuantity(prevQuantity => prevQuantity + 1)
			setTotalPrice(prevPrice => prevPrice + newCart[productInCartIndex].price)
			return setCart(newCart);
		}
		setCart((prevState) => [
			...prevState,
			{
				...product,
				quantity: 1,
			},
		]);
		setProdsQuantity(prevQuantity => prevQuantity + 1)
		setTotalPrice(prevPrice => prevPrice + product.price)
	}

	function substractFromCart(product) {
		const productCardIndex = cart.findIndex((item) => item.id === product.id);
		if (productCardIndex >= 0) {
			const newCart = structuredClone(cart);
			if (newCart[productCardIndex].quantity > 1) {
				newCart[productCardIndex].quantity -= 1;
				setProdsQuantity(prevQuantity => prevQuantity - 1)
				setTotalPrice(prevPrice => prevPrice - product.price)
				return setCart(newCart);
			} else {
        newCart.splice(productCardIndex, 1)
				setProdsQuantity(prevQuantity => prevQuantity - 1)
				setTotalPrice(prevPrice => prevPrice - product.price)
        setCart(newCart)
      }
		}
	}

  function removeFromCart(product) {
    const productCardIndex = cart.findIndex((item) => item.id === product.id);
    if (productCardIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart.splice(productCardIndex, 1)
			setProdsQuantity(prevQuantity => prevQuantity - product.quantity)
			setTotalPrice(prevPrice => prevPrice - (product.price * product.quantity))
      setCart(newCart)
    }
  }

	function clearCart() {
		setCart([]);
		setProdsQuantity(0);
		setTotalPrice(0);
	}

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				substractFromCart,
        removeFromCart,
				clearCart,
				prodsQuantity,
				totalPrice
			}}
		>
			{children}
		</CartContext.Provider>
	);
}
