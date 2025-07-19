const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const path = require("path");
const app = express();
const db = require("./config/db");
db();

const authRoutes = require("./routes/authRoutes");
const resumeRoutes = require("./routes/resumeRoutes");



app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));


app.use("/", authRoutes);               
app.use("/resumes", resumeRoutes);



app.listen(3000);

