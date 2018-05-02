import express from "express";
import multer from "multer";
import connection from "../connection/index";
import User from "./../../models/User";
import Product from "./../../models/Product";

let products = express.Router();

const storage = multer.diskStorage({
  destination: "./public/productImages/",
  filename: function(req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 9000000 }
  // fileFilter: function(req, file, cb){
  //   checkFileType(file, cb);
  // }
});

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

products.post("/", upload.single("picture"), (req, res) => {
  let newProduct = new Product(JSON.parse(req.body.product));
  console.log("ICI", req.file);
  if (req.file) newProduct.pictures = req.file.filename;
  newProduct.userId = req.decode.id;
  newProduct.username = req.decode.username;
  newProduct.save((err, product) => {
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
