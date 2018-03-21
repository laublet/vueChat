import express from "express";
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
			newMessage.save(function(err, naming) {
				if (err) {
					res
						.status(400)
						.json({ sucees: false, message: err.message });
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
			res
				.status(200)
				.json({
					success: true,
					message: "Here are your message!",
					content: usersMessages
				});
		}
	});
});

export default messages;
