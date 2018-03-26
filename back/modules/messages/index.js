import express from "express";
import mongoose from "mongoose";
import connection from "../connection/index";
import User from "./../../models/User";
import Message from "./../../models/Message";

let messages = express.Router();

messages.post("/", (req, res) => {
	User.find({ username: req.body.receiverId }, (err, usersMessages) => {
		if (err) {
			res.status(500).json({ success: false, message: err.message });
		} else {
			let newMessage = new Message(req.body);
			newMessage.senderId = req.decode.username;
			newMessage.receiverId = req.body.userID;
			newMessage.save(function(err, naming) {
				if (err) {
					res
						.status(400)
						.json({ success: false, message: err.message });
				} else {
					res
						.status(200)
						.json({ success: true, message: "Message posted" });
				}
			});
		}
	});
});

messages.get("/", (req, res) => {
	Message.find({ receiverId: req.decode.username }, (err, usersMessages) => {
		// Message.findAndUpdate({receiverId: req.decode.username}, {read: true}, {new: true} ,(err, usersMessages) => {
		if (err) {
			res.status(500).json({ success: false, message: err.message });
		} else {
			res.status(200).json({
				success: true,
				message: "Here are your message!",
				content: usersMessages
			});
		}
	});
});

messages.put("/:messageId", (req, res) => {
	console.log("HERE", req.body);
	if (mongoose.Types.ObjectId.isValid(req.params.messageId)) {
		Message.findByIdAndUpdate(
			req.params.messageId,
			{
				$set: {
					read: true,
					readDate: req.body._readDate
				}
			},
			function(err, doc) {
				if (err) {
					console.log(err.message);
					res
						.status(500)
						.json({ success: false, message: err.message });
				} else {
					res.status(200).json({
						success: true,
						message: "Message Updated !"
					});
				}
			}
		);
	} else {
		res.status(400).json({
			success: false,
			message: "Id not valid !"
		});
	}
	// Message.findOneAndUpdate({ receiverId: req.decode.username }, (err, usersMessages) => {
	// 	// Message.findAndUpdate({receiverId: req.decode.username}, {read: true}, {new: true} ,(err, usersMessages) => {
	// 	if (err) {
	// 		res.status(500).json({ success: false, message: err.message });
	// 	} else {

	// 		res.status(200).json({
	// 			success: true,
	// 			message: "Here are your message!",
	// 			content: usersMessages
	// 		});

	// 	}
	// });
});

export default messages;
