const jwt = require("jsonwebtoken");
const User = require("../models/User");
const requireAuth = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.redirect("/login");

  try {
    const decoded = jwt.verify(token, "raisahab");
    req.user = await User.findById(decoded.id);
    next();
  } catch (err) {
    res.redirect("/login");
  }
};

module.exports = { requireAuth };