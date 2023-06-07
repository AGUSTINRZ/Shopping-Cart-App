import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import { FiltersContext } from "../context/filters";

function Products({ products }) {
	const { setLimit } = useContext(FiltersContext)

  function handleClick() {
    setLimit(prevLimit => prevLimit + 15)
  }

	return (
		<main className="py-2">
			<div className="max-w-screen-2xl mx-auto px-2">
				<section className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 center">
					{products.length > 0 ? (
						products.map((product) => (
							<ProductCard key={product.id} data={product} />
						))
					) : (
						<p>No item found</p>
					)}
				</section>
				<div className="text-center pt-2">
					<button onClick={handleClick} className="px-2 py-1 rounded bg-green-400 text-white font-semibold hover:bg-green-600 transition-colors">
						Load more
					</button>
				</div>
			</div>
		</main>
	);
}

export default Products;
