import React from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import useProducts from "./hooks/useProducts";
import { CartProvider } from "./context/cart";

function App() {
	const { filteredProducts } = useProducts();

	return (
		<CartProvider>
			{filteredProducts && (
				<>
					<Header />
					<Products products={filteredProducts} />
				</>
			)}
		</CartProvider>
	);
}

export default App;
