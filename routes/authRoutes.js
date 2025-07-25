const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");


router.get("/", (req, res) => {
  res.render("home", { title: "Home" });
});


router.get("/register", (req, res) => {
  res.render("register", { title: "Register" });
});
router.post("/register", authController.register);


router.get("/login", (req, res) => {
  res.render("login", { title: "Login" });
});
router.post("/login", authController.login);


router.get("/logout", authController.logout);

module.exports = router;
