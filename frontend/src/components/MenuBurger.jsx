import React from "react";
import { useNavigate } from "react-router-dom";
import { useCurrentUserContext } from "../contexts/userContext";

function Burger() {
  const { setUser } = useCurrentUserContext();

  const navigate = useNavigate();

  const handleDisconnection = () => {
    // gestion de la deconnexion
    localStorage.clear();
    setUser({});
    navigate("/");
  };

  return (
    <div className="flex flex-col justify-evenly bg-main h-screen w-screen">
      <button
        type="button"
        onClick={() => {
          navigate("/");
        }}
      >
        Accueil
      </button>
      <button
        type="button"
        onClick={() => {
          navigate("/login");
        }}
      >
        Connexion
      </button>
      <button
        type="button"
        onClick={() => {
          navigate("/signUp");
        }}
      >
        S'inscrire
      </button>
      <button
        type="button"
        onClick={() => {
          navigate("/products");
        }}
      >
        Nos produits
      </button>
      <button
        className="border border-red-600 bg-red-600 text-white rounded-[2rem] p-2 my-6 mx-6"
        type="button"
        onClick={handleDisconnection}
      >
        Déconnexion
      </button>
    </div>
  );
}

export default Burger;
