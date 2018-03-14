import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import bodyParser from "body-parser"
import jwt from "jsonwebtoken"
import morgan from "morgan"
import dotEnv from "dotenv"
dotEnv.config()
import connection from "./modules/connection/index"
import checkToken from "./modules/checkToken/index"
import auth from "./modules/auth/index"
import users from "./modules/users/index"
import messages from "./modules/messages/index"

let app = express();

app.use(morgan("dev"));

//Load database connection
connection();

app.use(cors());
// app.use(function (req, res, next) {
// 	res.header(`Access-Control-Allow-Origin`, `*`);
// 	res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
// 	res.header(`Access-Control-Allow-Headers`, `Content-Type`);
// 	next();});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/auth", auth);
app.use(checkToken);
app.use("/users", users);
app.use("/messages", messages);

let host = process.env.HOST;
let port = process.env.PORT || 8080;
app.listen(port, () => console.log("App listen on port: " + host + port));
