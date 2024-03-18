const express = require("express");
const userRouter = require("./src/routes/api");
require("dotenv").config();

const app = express();

app.use("/", userRouter);

module.exports = app;
