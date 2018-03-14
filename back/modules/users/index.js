import express from 'express'
import connection from '../connection/index'
import User from './../../models/User'
let users = express.Router();

users.get('/' , (req, res) => {
	console.log('test')
	User.find({}, {password: 0} ,(err, usersList) => {
		if (err) res.status(500).json({success: false, message: 'test'})
			else res.status(200).json({success: true, message: 'Here is the list of users!', content: usersList});
	})
});

export default users ;
