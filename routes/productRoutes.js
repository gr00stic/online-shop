const express = require('express')
const {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} = require("../controllers/productController")

const router = express.Router()

router.route("/").get(getProducts)

router.route("/:id").get(getProductById)

router.route("/").post(createProduct)

router.route("/:id").put(updateProduct)

router.route("/:id").delete(deleteProduct)



module.exports = router