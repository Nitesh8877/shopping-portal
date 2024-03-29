const express = require('express');

const ProductRouter = express.Router(); // Added parentheses to call express.Router()
const { addProduct, updateProduct, deleteProduct, getProduct, listing } = require('../controller/product');
const { addProductValidation } = require('../validation/product');

ProductRouter.get("/get",listing)
ProductRouter.post('/add',addProductValidation, addProduct);
ProductRouter.put('/update/:id',addProductValidation, updateProduct);
ProductRouter.delete("/delete/:id",deleteProduct)
ProductRouter.get("/get/:id",getProduct)

module.exports = ProductRouter;