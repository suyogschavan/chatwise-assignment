const mongoose = require("mongoose");

const Post = mongoose.Schema({
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  comments: [
    {
      commentId: { type: mongoose.Schema.Types.ObjectId, ref: "Comment" },
      //   authorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      //   content: String,
      //   createdAt: { type: Date, default: Date.now },
    },
  ],
});

module.exports = mongoose.model("Post", Post);
