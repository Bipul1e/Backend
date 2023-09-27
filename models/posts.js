const mongoose = require("mongoose");

const post = mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    image: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    publishDate: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", post);

module.exports = Post;
