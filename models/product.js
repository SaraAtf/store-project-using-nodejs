const mongoose = require("mongoose");

let productSchema = new mongoose.Schema({
	name: { type: String, required: [true, "Product Name must be provided"] },
	price: { type: Number, required: [true, "Product Price must be provided"] },
	featured: { type: Boolean, default: false },
	rating: { type: Number, default: 4.5 },
	createdAt: { type: Date, default: Date.now() },
	company: {
		type: String,
		enum: {
			values: ["Ikea", "Zaraa", "Channel", "Dior"],
			message: `{VALUE} is not supported`,
		},
	},
});

module.exports = mongoose.model("product", productSchema);
