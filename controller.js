const User = require("./models/User");
const Post = require("./models/Post");
const bcrypt = require("bcrypt");

exports.createUser = async (req, res) => {
  try {
    console.log(req.body);
    const { userName, email, password, fullName, profilePic, bio } = req.body;
    if (!email || !password)
      return res
        .status(400)
        .send({ message: "email and password are required" });
    const already = await User.findOne({ email });
    console.log("Already: ", already);
    if (already)
      return res.status(400).send({ message: "User already exists" });
    const newPass = await bcrypt.hash(password, 10);
    const user = new User({
      userName,
      email,
      password: newPass,
      fullName,
      profilePic,
      bio,
    });
    await user.save();
    console.log("User created: ", user);
    res.status(201).send({ message: `User created: ${user.userName}` });
  } catch (error) {
    console.error("Error creating the user");

    res
      .status(400)
      .send({ message: "Error creating user", error: error.message });
  }
};
