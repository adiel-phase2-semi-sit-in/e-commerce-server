import express from "express";
import { wrapExpress } from "../libs";
import {
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct
} from "../controllers";
import { permit } from "../middlewares";
const router = express.Router();

router.post("/", permit, wrapExpress(createProduct));
router.put("/:id", permit, wrapExpress(updateProduct));
router.delete("/:id", permit, wrapExpress(deleteProduct));
router.get("/", wrapExpress(getProduct));
export { router };
