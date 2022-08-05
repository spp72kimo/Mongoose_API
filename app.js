require("dotenv").config();
const mongoose = require("mongoose");
const Comment = require("./models/comment");
const bodyParser = require("body-parser");
const express = require("express");
const app = new express();
const port = 3333;

// connect to mongoose
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to MongoDB."))
  .catch((err) => {
    console.log("Failed to connect MongoDB.");
    console.log(err);
  });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.get("/comment", (req, res) => {
  Comment.find()
    .then((data) => {
      res.set("Content-Type", "application/json");
      res.send(data);
    })
    .catch((err) => console.log(err));
});

app.post("/comment", (req, res) => {
  const data = req.body;
  console.log(data);
  res.send("get data");
});

app.listen(port, () => {
  console.log("Server is running on port: ", port);
});