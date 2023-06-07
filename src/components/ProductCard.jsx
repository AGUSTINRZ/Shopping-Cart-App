import React, { useContext } from "react";
import { CartContext } from "../context/cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

function ProductCard({ data }) {
	const { addToCart } = useContext(CartContext);

	function handleClick() {
		addToCart(data)
	}

	return (
		<div className="rounded overflow-hidden shadow-md w-full h-auto">
			<div className="bg-gray-300">
				<img
					src={data.thumbnail}
					alt={`${data.title} thumbnail`}
					className="w-full h-full min-h-[18rem] max-h-[18rem] object-cover object-center"
				/>
			</div>
			<div className="p-2">
				<div className="flex justify-between items-center">
					<div>
						<strong>{data.title}</strong> - ${data.price}
					</div>
					<button
						onClick={handleClick}
						className="bg-green-400 hover:bg-green-500 transition-colors text-white px-2 py-1 rounded"
					>
						<FontAwesomeIcon icon={faCartPlus} />
					</button>
				</div>
				<div className="flex justify-between">
					<span>
						<strong>Stock:</strong> {data.stock}
					</span>
				</div>
			</div>
		</div>
	);
}

export default ProductCard;
