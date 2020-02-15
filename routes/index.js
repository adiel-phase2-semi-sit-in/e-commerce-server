import express from "express";
import { addToCart, signUp, signIn, getUserCart } from "../controllers";
import { wrapExpress } from "../libs";
import { router as products } from "./product";
import { authentication } from "../middlewares";
const router = express.Router();

router.post("/signUp", wrapExpress(signUp));
router.post("/signIn", wrapExpress(signIn));
router.use(authentication);
router.post("/", wrapExpress(addToCart));
router.get("/", wrapExpress(getUserCart));
router.use("/products", products);

export { router };
