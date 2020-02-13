const router = require("express").Router();
const { UserController } = require("../controllers");
const { wrapExpress } = require("../libs");

router.post("/register", wrapExpress(UserController.register));

module.exports = router;
