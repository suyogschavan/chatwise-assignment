const mongoose = require("mongoose");

const User = mongoose.Schema({
  userName: String,
  email: String,
  password: String,
  profilePic: String,
  bio: String,
  fullName: String,
  friends: [
    {
      friendId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      addedAt: { type: Date, default: Date.now },
    },
  ],
  requestSent: [
    {
      recipientId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      sentAt: { type: Date, default: Date.now },
      status: {
        type: String,
        enum: ["pending", "accepted", "rejected"],
        default: "pending",
      },
    },
  ],
  requestReceived: [
    {
      senderId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      receivedAt: { type: Date, default: Date.now },
      status: {
        type: String,
        enum: ["pending", "accepted", "rejected"],
        default: "pending",
      },
    },
  ],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", User);
