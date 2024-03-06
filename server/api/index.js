/** @format */

const express = require("express");
const app = express();
require("dotenv").config();
const passport = require("passport");
require("express-async-errors");
const connect = require("./db/db");
const authRouter = require("./routes/auth-route");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");
const protectedRoute = require("./routes/protected-route");
require("./middleware/passport");

app.use(express.json());

app.use("/api/v1", authRouter);
app.use(
  "/api/v1/protected",
  passport.authenticate("jwt", { session: false }),
  protectedRoute
);
app.use(errorHandler);
app.use(notFound);

const connectToDb = async () => {
  try {
    console.log(process.env.MONGO_URI);
    await connect(process.env.MONGO_URI);

    app.listen(5000, console.log("server is listening on port 5000..."));
  } catch (error) {
    console.log(error);
  }
};

connectToDb();
