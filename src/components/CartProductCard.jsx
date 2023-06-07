import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../context/cart";

function CartProductCard({ data }) {
	const { addToCart, substractFromCart, removeFromCart } = useContext(CartContext)

	return (
		<article className="flex gap-2 rounded overflow-hidden">
			<img
				src={data.thumbnail}
				alt=""
				className="max-w-[10rem] rounded aspect-video"
			/>
			<div className="flex flex-col justify-between w-full">
				<div className="flex justify-between">
					<strong>{data.title}</strong>
					<div className="flex items-center bg-gray-300 h-fit min-w-fit rounded overflow-hidden">
						<button onClick={() => substractFromCart(data)} className="px-2 hover:bg-gray-400 transition-colors">
							<FontAwesomeIcon icon={faMinus} />
						</button>
						<span className="px-2 bg-white border-y border-gray-300">
							{data.quantity}
						</span>
						<button onClick={() => addToCart(data)} className="px-2 hover:bg-gray-400 transition-colors">
							<FontAwesomeIcon icon={faPlus} />
						</button>
					</div>
				</div>
				<div className="flex items-center justify-end gap-2">
					<span>${data.price}</span>
					<button onClick={() => removeFromCart(data)} className="text-lg hover:text-red-600 transition-colors">
						<FontAwesomeIcon icon={faClose} />
					</button>
				</div>
			</div>
		</article>
	);
}

export default CartProductCard;
