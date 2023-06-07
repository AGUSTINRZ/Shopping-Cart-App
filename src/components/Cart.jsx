import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../context/cart";
import CartProductCard from "./CartProductCard";

function Cart() {
	const [isOpen, setIsOpen] = useState(false);
	const { cart, clearCart, prodsQuantity, totalPrice } = useContext(CartContext);

	function openAside() {
		setIsOpen(true);
	}

	function closeAside() {
		setIsOpen(false);
	}

	function handleClick() {
		if (cart.length === 0) return;
		clearCart();
	}

	return (
		<>
			<div>
				<button
					onClick={openAside}
					className="flex justify-center items-center absolute top-1 right-2 w-8 aspect-square text-white bg-green-400 rounded-full hover:bg-green-500 transition-colors"
				>
					<FontAwesomeIcon icon={faShoppingCart} />
				</button>
				<div
					className={`${
						cart.length > 0 ? "block" : "hidden"
					} flex justify-center items-center text-sm w-5 aspect-square bg-black text-white rounded-full absolute top-0 right-1`}
				>
					{cart.length}
				</div>
			</div>
			<aside
				className={`${
					isOpen ? "block" : "hidden"
				} fixed flex justify-end top-0 left-0 bg-black/50 w-screen h-screen`}
			>
				<div className="relative p-2 bg-white h-screen w-screen max-h-screen md:max-w-[30rem] overflow-y-auto pr-6">
					<div className="flex justify-between items-center relative">
						<h2 className="text-xl font-semibold">Cart</h2>
						<button
							onClick={closeAside}
							className="text-xl bg-black rounded-full w-7 aspect-square text-white"
						>
							<FontAwesomeIcon icon={faClose} />
						</button>
					</div>
					<section className="flex flex-col gap-2 mt-2">
						{cart &&
							cart.map((product) => (
								<CartProductCard key={product.id} data={product} />
							))}
					</section>
					<div className="flex flex-col items-center mt-2 border-t-2 border-green-400">
						<div className="flex justify-between items-center w-full">
							<span>Quantity: {prodsQuantity}</span>
							<span>Total: {totalPrice}</span>
						</div>
						<button
							onClick={handleClick}
							className={`${
								cart.length === 0
									? "bg-gray-400 cursor-default"
									: "bg-green-400 hover:bg-green-500"
							} text-white font-semibold px-2 py-1 rounded transition-colors`}
						>
							Clear cart
						</button>
					</div>
				</div>
			</aside>
		</>
	);
}

export default Cart;
