import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCurrentUserContext } from "../contexts/userContext";

function Header() {
  const { setUser } = useCurrentUserContext();

  const navigate = useNavigate();

  const [width, setWidth] = useState(window.innerWidth);

  const handleDisconnection = () => {
    // gestion de la deconnexion
    localStorage.clear();
    setUser({});
    navigate("/");
  };

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex justify-evenly bg-main">
      {width < 450 ? (
        <div className="sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
            onClick={() => navigate("/NavMenu")}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </div>
      ) : null}

      {width > 450 ? (
        <div className="flex justify-evenly mx-8">
          <button
            className="mr-4"
            type="button"
            onClick={() => {
              navigate("/");
            }}
          >
            Accueil
          </button>
          <button
            className="mr-4"
            type="button"
            onClick={() => {
              navigate("/login");
            }}
          >
            Connexion
          </button>
          <button
            className="mr-4"
            type="button"
            onClick={() => {
              navigate("/signUp");
            }}
          >
            S'inscrire
          </button>
          <button
            className="mr-4"
            type="button"
            onClick={() => {
              navigate("/products");
            }}
          >
            Nos produits
          </button>
          <button
            className="border border-red-600 bg-red-600 text-white rounded-[2rem] p-2 my-2"
            type="button"
            onClick={handleDisconnection}
          >
            Déconnexion
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default Header;
