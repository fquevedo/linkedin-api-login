
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieSession = require("cookie-session");
require("dotenv").config();

require("./auth/passportLinkedin");

const middlewares = require("./middlewares");
const api = require("./api");
const passport = require("passport");


const app = express();


app.use(cors({
  origin: 'http://localhost:3000', 
  credentials: true
}));
app.use(morgan("dev"));
app.use(express.json());

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000*10,
    keys: ["keyboardCat"],
  })
);

app.use(passport.initialize());
app.use(passport.session());



app.get("/", (req, res) => {
  res.json({
    message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
  });
});


app.use("/api/v1", api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
