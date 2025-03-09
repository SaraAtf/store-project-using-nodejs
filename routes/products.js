const express = require("express");
const {
	getAllProductsController,
	editProductController,
	createProductController,
	getProductByIdController,
	deleteProductController,
} = require("../controllers/products");
const router = express.Router();

router
	.route("/api/v1/products")
	.get(getAllProductsController)
	.post(createProductController);

router
	.route("/api/v1/products/:id")
	.get(getProductByIdController)
	.patch(editProductController)
	.delete(deleteProductController);
module.exports = router;
