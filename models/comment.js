const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  id: {
    type: String,
  },
  author: {
    type: String,
    require,
    minlength: 5,
    maxlength: 15,
  },
  content: {
    type: String,
    require,
    maxlength: 100,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("comment", commentSchema);
