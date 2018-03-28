import express from "express";
import connection from "../connection/index";
import User from "./../../models/User";
import Product from "./../../models/Product";
let profile = express.Router();

profile.get("/", (req, res) => {
	// console.log("Here", req.decode.username);
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
	console.log(req.body);
	let toUpdate = {
		password: req.body.password,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		lastUpdateDate: Date.now()
	};

	User.findOneAndUpdate(
		{ username: req.decode.username },
		{
			$set: toUpdate
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
