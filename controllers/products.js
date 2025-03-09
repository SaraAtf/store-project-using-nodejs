const productSchema = require("../models/product");

const getAllProductsController = (req, res, next) => {
	res.status(200).json({ data: "Get All Products" });
};
const getProductByIdController = (req, res, next) => {
	res.status(200).json({ data: `Get Product by Id ${req.params.id}` });
};
const createProductController = async (req, res, next) => {
	const newProduct = await productSchema.create(req.body);
	res.status(201).json({ data: `add new products ${newProduct.name}` });
};
const editProductController = (req, res, next) => {
	res.status(201).json({
		data: `Edit  product with id ${req.params.id} and name ${req.body.name}`,
	});
};
const deleteProductController = (req, res, next) => {
	res.status(200).json({ data: `Delete Product with Id ${req.params.id}` });
};

module.exports = {
	getAllProductsController,
	getProductByIdController,
	createProductController,
	editProductController,
	deleteProductController,
};
