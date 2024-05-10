import React, { useEffect, useState } from "react";
import "./App.css";
import Product from "./components/product/Product";

function App() {
  const API_URL = "https://dummyjson.com/products?limit=100";

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const productsPerPage = 12;

  const fetchProducts = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleGoUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
    handleGoUp();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const totalPages = Math.ceil(products.length / productsPerPage);
  const visibleProducts = products.slice(
    (page - 1) * productsPerPage,
    page * productsPerPage
  );

  return (
    <div className="App">
      <h2>Products List</h2>
      <div className="products-parent">
        <Product products={visibleProducts} />
      </div>
      <div className="pagination">
        <span
          onClick={() => handlePageChange(page - 1)}
          className={page === 1 ? "disabled" : ""}
        >
          ⬅️
        </span>
        {[...Array(totalPages)].map((_, i) => (
          <span
            onClick={() => handlePageChange(i + 1)}
            className={page === i + 1 ? "active" : ""}
            key={i + 1}
          >
            {i + 1}
          </span>
        ))}
        <span
          onClick={() => handlePageChange(page + 1)}
          className={page === totalPages ? "disabled" : ""}
        >
          ➡️
        </span>
      </div>
    </div>
  );
}

export default App;
