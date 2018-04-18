import express from "express";
import multer from "multer"
import connection from "../connection/index";
import User from "./../../models/User";
import Product from "./../../models/Product";

let products = express.Router();

const storage = multer.diskStorage({
	destination: './public/productImages/',
	filename: function (req, file, cb) {
		cb(null,file.fieldname + '-' + Date.now());
		// cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
	}
});

const upload = multer({
	storage: storage,
  // limits:{fileSize: 9000000}
  // fileFilter: function(req, file, cb){
  //   checkFileType(file, cb);
  // }
})

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

products.post('/images', upload.single('picture') ,(req, res) => {
	console.log("Ici: " , req.file)
	if (!req.file) {
		console.log("No file received");
		return res.send({
			success: false
		});

	} else {
		console.log('file received');
		return res.send({
			success: true
		})
	}
});

export default products;
