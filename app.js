require("dotenv").config();
const mongoose = require("mongoose");
const Comment = require("./models/comment");
const bodyParser = require("body-parser");
const cors = require("cors");
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

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({
    message: "This is json response.",
  });
});

app.get("/comment", (req, res) => {
  Comment.find()
    .then((data) => {
      res.set("Content-Type", "application/json");
      res.send(data);
    })
    .catch((err) => console.log(err));
});

app.post("/comment", (req, res, next) => {
  res.json({
    message: "test post route.",
  });
  // const data = req.body;
  // new Comment({ ...data })
  //   .save()
  //   .then(() => {
  //     res.status(200).json({
  //       ...data,
  //       saveStatus: "True",
  //     });
  //   })
  //   .catch((err) => {
  //     res.json({
  //       ...data,
  //       saveStatus: "False",
  //       errorMessage: err,
  //     });
  //   });
});

app.listen(port, () => {
  console.log("Server is running on port: ", port);
});
