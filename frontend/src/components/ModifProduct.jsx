/* eslint-disable camelcase */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCurrentUserContext } from "../contexts/userContext";

const backURL = import.meta.env.VITE_BACKEND_URL;

function FormModifProd() {
  const { token } = useCurrentUserContext();
  const [products, setProducts] = useState([]);
  const [imp_url, setImp_Url] = useState(products.imp_url);
  const [prodname, setProdname] = useState(products.prodname);
  const [price, setPrice] = useState(products.price);
  const [quantity, setQuantity] = useState(products.quantity);
  const { prodId } = useParams();

  const myHeaders = new Headers({
    Authorization: `Bearer ${token}`,
  });
  myHeaders.append("Content-Type", "application/json");

  const GETrequestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  const DELETErequestOptions = {
    method: "DELETE",
    headers: myHeaders,
  };

  // Request options pour la mise à jour de la bdd
  const body = JSON.stringify({
    imp_url,
    prodname,
    price,
    quantity,
  });

  const PUTrequestOptions = {
    method: "PUT",
    headers: myHeaders,
    body,
  };

  // fonction qui met à jour le status de l'utilisateur avec les PUT options ci-dessus

  const handleForm = (e) => {
    e.preventDefault();

    fetch(`${backURL}/api/products/${prodId}`, PUTrequestOptions).catch(
      console.error
    );
  };

  useEffect(() => {
    fetch(`${backURL}/api/products/${prodId}`, GETrequestOptions)
      .then((result) => result.json())
      .then((result) => {
        setProducts(result);
      });
  }, []);

  const handleDelete = () => {
    fetch(`${backURL}/api/products/${prodId}`, DELETErequestOptions);
  };

  return (
    <div className="mt-[25vh]">
      <form
        onSubmit={handleForm}
        style={{ width: "18rem" }}
        className="m-auto mt-5 border p-3 bg-main rounded-[0.75rem]"
      >
        <div className="mb-3">
          <label htmlFor="firstname" className="form-label">
            URL de l'image
          </label>
          <input
            onChange={(e) => setImp_Url(e.target.value)}
            type="url"
            defaultValue={products.imp_url}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nom du produit
          </label>
          <input
            onChange={(e) => setProdname(e.target.value)}
            type="name"
            defaultValue={products.prodname}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="prix" className="form-label">
            Prix en €
          </label>
          <input
            onChange={(e) => setPrice(e.target.value)}
            type="prix"
            defaultValue={products.price}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="quantité" className="form-label">
            la quantité
          </label>
          <input
            onChange={(e) => setQuantity(e.target.value)}
            type="text"
            defaultValue={products.quantity}
          />
        </div>
        <button
          onClick={handleForm}
          type="submit"
          className="btn border bg-white focus:bg-main"
        >
          Modifier
        </button>
        <button
          onClick={() => {
            handleDelete();
          }}
          type="submit"
          className="btn border ml-16 bg-red-800 "
        >
          Supprimé
        </button>
      </form>
    </div>
  );
}

export default FormModifProd;
