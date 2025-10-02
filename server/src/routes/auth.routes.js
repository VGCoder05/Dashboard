const express = require("express");

// --- Middleware ---
const  auth  = require("../middleware/authMiddleware");

const {
  register,
  login,
  // user,
  test,
  logout,
} = require("../controllers/auth.controller");

const route = express.Router();

route.post("/register", register);

route.post("/login", login);



route.delete("/logout", logout);

module.exports = route;
