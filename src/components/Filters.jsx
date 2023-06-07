import React, { useContext, useId } from "react";
import { FiltersContext } from "../context/filters";

function Filters() {
	const { filters, setFilters } = useContext(FiltersContext)
	const minPriceFilterId = useId();
	const categoryFilterId = useId();

	function handleChangePrice(e) {
		setFilters(prevState => ({
			...prevState,
			minPrice: e.target.value
		}));
	}

	function handleChangeCategory(e) {
		setFilters(prevState => ({
			...prevState,
			category: e.target.value
		}));
	}

	return (
			<div className="flex justify-between items-center gap-2 px-2">
				<div className="flex justify-center items-center gap-x-2 flex-col sm:flex-row font-medium">
					<label htmlFor={minPriceFilterId}>Filter by price: </label>
					<input
						type="range"
						name="price"
						id={minPriceFilterId}
						min={0}
						max={3000}
						value={filters.minPrice}
						onChange={handleChangePrice}
					/>
					<span>${filters.minPrice}</span>
				</div>
				<div
					onChange={handleChangeCategory}
					className="flex justify-center items-center gap-x-2 flex-col sm:flex-row font-medium"
				>
					<label htmlFor={categoryFilterId}>Filter by category: </label>
					<select
						name="category"
						id={categoryFilterId}
						className="bg-transparent p-1 rounded border-2 border-black/10 outline-none"
					>
						<option value="all">All</option>
						<option value="smartphones">Smartphones</option>
						<option value="laptops">Laptops</option>
						<option value="fragances">Fragances</option>
						<option value="skincare">Skincare</option>
						<option value="groceries">Groceries</option>
						<option value="home-decoration">Home Decoration</option>
						<option value="furniture">Furniture</option>
						<option value="tops">Tops</option>
						<option value="sunglasses">Sunglasses</option>
						<option value="automotive">Automotive</option>
						<option value="motorcycle">Motorcycle</option>
						<option value="lightning">Lightning</option>
						<optgroup label="Women">
							<option value="womens-dresses">Dresses</option>
							<option value="womens-shoes">Shoes</option>
							<option value="women-watches">Watches</option>
							<option value="womens-bags">Bags</option>
							<option value="womens-jewellery">Jewellery</option>
						</optgroup>
						<optgroup label="Men">
							<option value="mens-shirts">Shirts</option>
							<option value="mens-shoes">Shoes</option>
							<option value="mens-watches">Watches</option>
						</optgroup>
					</select>
				</div>
			</div>
	);
}

export default Filters;
