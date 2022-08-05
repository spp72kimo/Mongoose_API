const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  id: {
    type: String,
  },
  author: {
    type: String,
    required: true,
    maxlength: 15,
  },
  content: {
    type: String,
    required: true,
    maxlength: 100,
  },
  updated: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("comment", commentSchema);
