import express from "express";
import { getProducts, createProduct, updateProduct, deleteProduct } from "../Controllers/products.js";

const router = express.Router()

router.get("/", getProducts)
router.post("/add", createProduct)
router.put("/edit/:id", updateProduct)
router.delete("/delete/:id", deleteProduct)

export default router