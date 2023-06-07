import { useContext, useEffect, useState } from "react";
import { MAIN_ENDPOINT } from "../services/endpoint";
import { FiltersContext } from "../context/filters";

function useProducts() {
	const [data, setData] = useState();
	const [filteredProducts, setFilteredProducts] = useState([]);
	const { filters, limit } = useContext(FiltersContext)

	useEffect(() => {
		async function getData() {
			const res = await fetch(`${MAIN_ENDPOINT}?limit=${limit}`);
			const json = await res.json();
			setData(json)
		}
		getData();
	}, [limit]);

	useEffect(() => {
		async function filterProducts() {
			if (data && data.products) {
				const prodsToFilter = data.products;
				const filtered = await prodsToFilter.filter((product) => {
					return (
						product.price >= filters.minPrice &&
						(filters.category === "all" ||
							product.category === filters.category)
					);
				});
				setFilteredProducts(filtered);
			}
		}
		filterProducts();
	}, [data, filters]);

	return { filteredProducts };
}

export default useProducts;