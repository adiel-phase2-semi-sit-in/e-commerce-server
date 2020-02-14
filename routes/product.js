const router = require("express").Router();
const { wrapExpress } = require("../libs");
const { createProduct } = require("../controllers");

router.post("/", wrapExpress(createProduct));
