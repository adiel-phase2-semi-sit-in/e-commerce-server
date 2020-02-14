const router = require("express").Router();
const { wrapExpress } = require("../libs");
const { createProduct } = require("../controllers");
const { authentication } = require("../middlewares");

router.use(authentication);
router.post("/", wrapExpress(createProduct));

module.exports = router;
