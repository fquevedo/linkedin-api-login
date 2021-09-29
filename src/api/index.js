const express = require("express");
const loginWithLinkedinApi = require("./loginWithLinkedin");
const userApi = require("./user");

const router = express.Router();

router.use(loginWithLinkedinApi);
router.use(userApi);

module.exports = router;