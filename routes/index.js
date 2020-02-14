const router = require("express").Router();
const { signUp, signIn } = require("../controllers");
const { wrapExpress } = require("../libs");
const products = require("./product");

router.post("/signUp", wrapExpress(signUp));
router.post("/signIn", wrapExpress(signIn));

router.use("/products", products);

module.exports = router;
