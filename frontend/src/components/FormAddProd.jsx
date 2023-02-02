/* eslint-disable camelcase */
import { useState } from "react";

function FormAddProd() {
  const [imp_url, setImp_Url] = useState("");
  const [prodname, setProdname] = useState("");
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();

  const handleForm = (e) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      imp_url,
      prodname,
      price,
      quantity,
    });

    const requestOptions = {
      method: "put",
      headers: myHeaders,
      body,
    };
    e.preventDefault();
    // on créé et on redirige
    fetch("http://localhost:5000/api/products", requestOptions).catch(
      console.error
    );
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
            className="form-control"
            id="url"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nom du produit
          </label>
          <input
            onChange={(e) => setProdname(e.target.value)}
            type="name"
            className="form-control"
            id="lastname"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="prix" className="form-label">
            Prix en €
          </label>
          <input
            onChange={(e) => setPrice(e.target.value)}
            type="prix"
            className="form-control"
            id="prix"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="quantité" className="form-label">
            la quantité
          </label>
          <input
            onChange={(e) => setQuantity(e.target.value)}
            type="text"
            className="form-control"
            id="quantité"
          />
        </div>
        <button type="submit" className="btn border bg-white focus:bg-main">
          Ajouté
        </button>
      </form>
    </div>
  );
}

export default FormAddProd;
