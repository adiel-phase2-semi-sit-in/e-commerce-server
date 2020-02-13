const router = require("express").Router();
const { signUp } = require("../controllers");
const { wrapExpress } = require("../libs");

router.post("/register", wrapExpress(signUp));

module.exports = router;
