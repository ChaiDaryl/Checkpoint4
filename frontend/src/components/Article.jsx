/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from "react";
import { Link } from "react-router-dom";

function Article({ product }) {
  return (
    <div className="flex flex-col flex-nowrap m-8 border justify-center rounded-[2rem] border-black w-[10rem] h-[16.7rem] p-4">
      <div>
        <div className="flex justify-center">
          <div className="flex justify-center mb-2">{product.prodname}</div>
          <Link to={`/products/${product.id}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="ml-4 w-6 h-6"
            >
              <path d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
            </svg>
          </Link>
        </div>
        <img src={product.imp_url} alt="légume" className="my-8" />
        <div className=" justify-center mx-4">
          <p className="mr-2 mt-2">{product.price} €</p>
          <div className="fex justify-center w-32 mt-4">
            <p>stock: {product.quantity}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
