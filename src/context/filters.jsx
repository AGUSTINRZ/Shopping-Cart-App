import React, { createContext, useState } from "react";

export const FiltersContext = createContext();

export function FiltersProvider({ children }) {
	const [filters, setFilters] = useState({
		category: "all",
		minPrice: 0,
	});
	const [limit, setLimit] = useState(30)

	return (
		<FiltersContext.Provider
			value={{
				filters,
				setFilters,
				limit,
				setLimit
			}}
		>
			{children}
		</FiltersContext.Provider>
	);
}
