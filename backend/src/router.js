const express = require("express");

const router = express.Router();

// services d'auth
const {
  hashPassword,
  verifyPassword,
  verifyToken,
} = require("./services/auth");

const authControllers = require("./controllers/authControllers");
const productControllers = require("./controllers/productControllers");
const userControllers = require("./controllers/userControllers");

// Auth
router.post("/register", hashPassword, userControllers.add);
router.post(
  "/login",
  authControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

// Gestion des products
router.get("/api/products", productControllers.browse);
router.get("/api/products/:id", productControllers.read);
router.post("/api/products", productControllers.add);
router.put(
  "/api/products/:id",

  productControllers.edit
);
router.delete("/api/products/:id", productControllers.destroy);

// Gestion des users
router.get(
  "/users",
  verifyToken,
  authControllers.isUserAdmin,
  userControllers.browse
);
router.get(
  "/users/:id",
  verifyToken,
  authControllers.isUserAdmin,
  userControllers.read
);
router.post(
  "/users",

  hashPassword,
  userControllers.add
);
router.put(
  "/users/:id",
  verifyToken,
  authControllers.isUserAdmin,
  hashPassword,
  userControllers.edit
);
router.delete(
  "/users/:id",
  verifyToken,
  authControllers.isUserAdmin,
  userControllers.destroy
);

module.exports = router;
