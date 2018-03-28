import express from "express";
import mongoose from "mongoose";

let app = express();

mongoose.Promise = global.Promise;
//Connect to Database
let connection = () => {
	mongoose.connect(process.env.MONGOURL, {}, function(err) {
		if (err) {
			throw err;
		} else {
			console.log(
				"Connection to the Database etablished (" +
					process.env.MONGOURL +
					")..."
			);
		}
	});
};

// let connection = () => {
// 	mongoose.connect(process.env.MONGOURL,{}).then(
// 		() => {
// 				let host = process.env.HOST;
// let port = process.env.PORT || 8080;
// app.listen(port, () => console.log("App listen on port: " + host + port));
// 		},
// 		err => {

// 		}
// 		)
// };

export default connection;
