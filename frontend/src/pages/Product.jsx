import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCurrentUserContext } from "../contexts/userContext";

import Article from "../components/Article";

function Products() {
  const { token } = useCurrentUserContext();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const myHeader = new Headers();
    myHeader.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      headers: myHeader,
    };

    fetch("http://localhost:5000/api/products", requestOptions)
      .then((response) => response.json())
      .then((productList) => setProducts(productList))
      .catch(() => {
        navigate("/login");
      });
  }, []);

  return (
    <div className="relative">
      <h1 className="text-center my-3">Nos Produits</h1>
      <button
        className="absolute flex items-center justify-center border border-blue-800 rounded-full bg-blue-800  text-white right-7 h-6 w-6"
        type="button"
        onClick={() => {
          navigate("/add-products");
        }}
      >
        +
      </button>
      <div className="flex flex-wrap">
        {products.map((product) => (
          <Article key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
