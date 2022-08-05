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
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("comment", commentSchema);
