const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

const response = require("./middlewares/response");

const app = express();

app.use(response);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect("mongodb://localhost:27017/links-manager", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

requireDir("./models");

app.use("/", require("./routes"));

app.listen(3002, () => {
  console.log("Starting api...");
});