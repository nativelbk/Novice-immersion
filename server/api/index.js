/** @format */

const express = require("express");
const app = express();
require("dotenv").config();
const passport = require("passport");
require("express-async-errors");
const connect = require("./db/db");
const authRouter = require("./routes/auth-route");
const routePub = require("./routes/pub-route");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");
const protectedRoute = require("./routes/protected-route");
require("./middleware/passport");
const { createServer } = require("http");
const { Server } = require("socket.io");

const server = createServer(app);
const io = new Server(server);

app.use(express.json());
app.use("/api/v1", authRouter);
app.use("/api", routePub);

app.use(
  "/api/v1/protected",
  passport.authenticate("jwt", { session: false }),
  protectedRoute
);
app.use(errorHandler);
app.use(notFound);

const connectToDb = async () => {
  try {
    io.on("connection", (socket) => {
      console.log("a user connected" + socket.id);
    });
    await connect(process.env.MONGO_URI);

    server.listen(5000, console.log("server is listening on port 5000..."));
  } catch (error) {
    console.log(error);
  }
};

connectToDb();
