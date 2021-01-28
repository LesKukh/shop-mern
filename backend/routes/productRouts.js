import express from 'express'
import asyncHandler from 'expressAsyncHandler'
const router = express.Router()
import Product from "../models/productModel"


//@desc Fetch all producs
//@route GET /api/products
//@access public
router.get("/", asyncHandler( async(req, res) => {
    const products = await Product.fimd({})
    res.json(products)
}));

//@desc Fetch single producs
//@route GET /api/products/:id
//@access public
router.get("/:id", asyncHandler(async(req, res) => {
    const product = await products.findById(req.params.id)
    if (product) {
        res.json(product)
    } else {
        res.status(404).json({ message: "Product not found!" })
    }
    
}))

export default router