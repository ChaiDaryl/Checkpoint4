import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Articles from "./pages/Product";
import AddProduct from "./pages/AddProduct";
import ModifProd from "./pages/ModifProd";
import Burger from "./components/MenuBurger";

import { CurrentUserContextProvider } from "./contexts/userContext";

function App() {
  return (
    <BrowserRouter>
      <CurrentUserContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/products" element={<Articles />} />
          <Route path="/add-products" element={<AddProduct />} />
          <Route path="/NavMenu" element={<Burger />} />
          <Route path="/products/:prodId" element={<ModifProd />} />
        </Routes>
      </CurrentUserContextProvider>
    </BrowserRouter>
  );
}

export default App;
