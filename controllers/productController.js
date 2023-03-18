const asyncHandler = require('express-async-handler')
const Product = require('../models/productModel')

const getProducts = async (req, res) => {
    const products = await Product.find()
    res.json({"msg" : "All products found: ", products})
}

const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if(!product){
        res.status(404);
        throw new Error(`Product with id: ${req.params.id} not found`)
    }
    res.json({"msg" : "Product found by id: ", product})
})

const createProduct = asyncHandler(async(req, res) => {
    const {name, price} = req.body
    if(!name || !price) {
        res.status(400)
        throw new Error("All fields are required")
    }
    const product = await Product.create({name, price})
    res.status(200).json({"msg" : "New product was created", product})
})

const updateProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if(!product){
        res.status(404);
        throw new Error(`Product with id: ${req.params.id} not found`)
    }

    const {name, price} = req.body
    if(!name || !price) {
        res.status(400)
        throw new Error("All fields are required")
    }
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {name, price}, {new : true})
    res.json({"msg" : `Update product with id: ${req.params.id}`, "updatedProduct" : updatedProduct})
})

const deleteProduct = asyncHandler(async (req, res) => {
    await Product.findByIdAndDelete(req.params.id)
    res.json({"msg" : `Product with id: ${req.params.id} was deleted`})
})

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}