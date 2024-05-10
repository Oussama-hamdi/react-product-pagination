import React from "react";
import "./Product.css";

function Product(props) {
  const { products } = props;

  return (
    <>
      {products.length > 0 ? (
        products.map((prod) => {
          return (
            <div className="product" key={prod.id}>
              <div className="image">
                <img src={prod.images[0]} alt={prod.title} />
              </div>
              <div className="info">
                <h2 className="title">{prod.title}</h2>
                <p className="description">{prod.description}</p>
                <div className="priceRate">
                  <p className="price">Price: ${prod.price}</p>
                  <p className="rate">Rate: {prod.rating}⭐️</p>
                </div>
                <button className="buy">Buy Now</button>
              </div>
            </div>
          );
        })
      ) : (
        <p>No products available</p>
      )}
    </>
  );
}

export default Product;
