import express from "express";
import { wrapExpress } from "../libs";
import { createProduct } from "../controllers";
import { authentication } from "../middlewares";
const router = express.Router();

router.use(authentication);
router.post("/", wrapExpress(createProduct));

export { router };
