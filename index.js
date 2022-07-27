require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const helmet = require("helmet");
const Routers = require("./routes/index.routes");
const app = express();
const port = process.env.PORT || 8080;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

// middleware :
app.use(express.json());
app.use(morgan("common"));
app.use(helmet());

app.use("/api/v1/", Routers);

app.listen(port, () => {
  console.log("App is running on PORT:" + port);
});
