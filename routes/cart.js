import express from "express";
import { addToCart } from "../controllers";
import { wrapExpress } from "../libs";
const router = express();

router.post("/:productId", wrapExpress(addToCart));

export { router };
