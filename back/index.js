import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";
import morgan from "morgan";
import dotEnv from "dotenv";
// import multer from "multer"
import path from "path";
dotEnv.config();
import connection from "./modules/connection/index";
import checkToken from "./modules/checkToken/index";
import auth from "./modules/auth/index";
import users from "./modules/users/index";
import messages from "./modules/messages/index";
import profile from "./modules/profile/index";
import products from "./modules/products/index";

let app = express();
app.use(express.static("public"));

app.use(morgan("dev"));

//Load database connection
connection();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/auth", auth);
app.use(checkToken);
app.use("/users", users);
app.use("/messages", messages);
app.use("/profile", profile);
app.use("/products", products);

process.on("uncaughtException", err => {
	console.log("\u0007");
	console.error(err, "Uncaught Exception thrown");
	process.exit(1);
});
app.use((err, req, res, next) => {
	if (err) {
		console.log("\u0007");
		console.error(err, "Unhandled Exception thrown");
		res
			.status(500)
			.json({ success: false, message: "An unexpected error occured.." });
	}
});

let host = process.env.HOST;
let port = process.env.PORT || 8080;

// app.use('/static')
app.listen(port, () => console.log("App listen on port: " + host + port));
