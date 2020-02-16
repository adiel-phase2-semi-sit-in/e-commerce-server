import express from "express";
import { signUp, signIn } from "../controllers";
import { wrapExpress } from "../libs";
import { router as product } from "./product";
import { router as cart } from "./cart";
import { authentication } from "../middlewares";
const router = express.Router();

router.post("/signUp", wrapExpress(signUp));
router.post("/signIn", wrapExpress(signIn));
router.use(authentication);
router.use("/products", product);
router.use("/cart", cart);

export { router };
