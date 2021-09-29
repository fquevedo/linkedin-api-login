const express = require("express");
const passport = require("passport");
const { isUserAuthenticated } = require("../middlewares/auth");

const router = express.Router();

const successLoginUrl = "http://localhost:3000/login/success";
const errorLoginUrl = "http://localhost:3000/login/error";

router.get(
  "/auth/linkedin",
    passport.authenticate("linkedin"),
    (req, res) => {
        console.log("User: ", req.user);
    }
);

router.get(
    "/auth/linkedin/callback",
    passport.authenticate("linkedin", {
        failureMessage: "Cannot login to Linkedin",
        failureRedirect: errorLoginUrl,
        successRedirect: successLoginUrl,
    }),
    (req, res) => {
        console.log("User: ", req.user);
    }
);

module.exports = router;