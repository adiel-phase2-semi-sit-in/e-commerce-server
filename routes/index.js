import express from "express";
import { signUp, signIn } from "../controllers";
import { wrapExpress } from "../libs";
import { router as products } from "./product";

const routes = express.Router();

routes.post("/signUp", wrapExpress(signUp));
routes.post("/signIn", wrapExpress(signIn));

routes.use("/products", products);

export { routes };
