const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes");
const dotenv = require("dotenv");
const bodyparser = require("body-parser");
const morgan = require("morgan");
dotenv.config();
const app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(morgan("dev"));
app.use("/api", routes);
// app.use(express.json());

const URI = process.env.URI;
const PORT = process.env.PORT;

// app.get("/", (req, res) => {
//   return res.send("Hello World");
// });

mongoose
  .connect(URI)
  .then(() => console.log("Database connected"))
  .catch((err) => {
    console.log(err);
  });
app.listen(PORT | 3000, () => console.log("Server is on port 3000"));
