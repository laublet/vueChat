import express from "express";
import connection from "../connection/index";
import User from "./../../models/User";
import Product from "./../../models/Product";
import bcrypt from "bcrypt";
let profile = express.Router();

profile.get("/", (req, res) => {
	User.find(
		{ username: req.decode.username },
		{ password: 0 },
		(err, userProfile) => {
			if (err)
				res.status(500).json({ success: false, message: err.message });
			else
				res.status(200).json({
					success: true,
					message: "Here is the user!",
					content: userProfile
				});
		}
	);
});

profile.get("/products", (req, res) => {
	Product.find({ userId: req.decode.id }, (err, uniqueProduct) => {
		if (err) res.status(500).json({ success: false, message: err.message });
		else
			res.status(200).json({
				success: true,
				message: "Here are your product!",
				content: uniqueProduct
			});
	});
});

profile.put("/", (req, res) => {
	console.log(req.body)
	if (req.body.password)
		req.body.password = bcrypt.hashSync(req.body.password, 11);
	req.body.lastUpdateDate = Date.now();
	const updateOps = {};
	for (const key of Object.keys(req.body)) {
		if (req.body[key]) updateOps[key] = req.body[key];
	}
	User.findOneAndUpdate(
		{ username: req.decode.username },
		{
			$set: updateOps
		},
		{ new: true },
		(err, user) => {
			if (err) res.status(500).json({ success: false, message: "test" });
			else
				res.status(200).json({
					success: true,
					message: "Profile updated !",
					content: user
				});
		}
	);
});

export default profile;
