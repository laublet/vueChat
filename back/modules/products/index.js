import express from "express";
import connection from "../connection/index";
import User from "./../../models/User";
import Product from "./../../models/Product";

let products = express.Router();

products.get("/", (req, res) => {
	Product.find({}, (err, productList) => {
		if (err) res.status(500).json({ success: false, message: err.message });
		else
			res.status(200).json({
				success: true,
				message: "Here is the list of products!",
				content: productList
			});
	});
});

products.get("/:id", (req, res) => {
	Product.findOne({ _id: req.params.id }, (err, uniqueProduct) => {
		if (err) res.status(500).json({ success: false, message: err.message });
		else
			res.status(200).json({
				success: true,
				message: "Here is your product!",
				content: uniqueProduct
			});
	});
});

products.post("/", (req, res) => {
	console.log("Id:", req.decode.id);
	let newProduct = new Product(req.body);
	newProduct.userId = req.decode.id;
	newProduct.save(function(err, product) {
		if (err) {
			res.status(400).json({ success: false, message: err.message });
		} else {
			res.status(200).json({
				success: true,
				message: "Product created",
				content: product
			});
		}
	});
});
export default products;
