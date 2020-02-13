const router = require("express").Router();
const { signUp, signIn } = require("../controllers");
const { wrapExpress } = require("../libs");

router.post("/signUp", wrapExpress(signUp));
router.post("/signIn", wrapExpress(signIn));

module.exports = router;
