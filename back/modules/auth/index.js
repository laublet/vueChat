import express from 'express'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import Token from './../../models/Token'
import bcrypt from 'bcrypt'
import User from './../../models/User'

let auth = express.Router();

auth.post('/signup', (req, res) => {
  if (req.body.username && req.body.password) {
    User.findOne({ username: req.body.username}, function (err, bob) {
      if (bob === null) {
        let newUser = new User(req.body)
        newUser.password = bcrypt.hashSync(req.body.password, 10)
        newUser.save(function (err, lol) {
          if (err) {
            res.status(400).json({success: false, message: err.message})
          } else {
            lol.password = undefined
            res.status(200).json({success: true, message: 'Tadaaa ! New user registed', content: lol})
          }
        })
      } else {
        res.status(412).json({success: false, message: 'This username is already taken'})
      }
    })
  } else {
    res.status(412).json({success: false, message: 'You need to enter an username and a password !'})
  }
})

auth.post('/login', (req, res) => {
  if (req.body.username && req.body.password) {
    User.findOne({ username: req.body.username }, function (err, user) {
      if (err) res.status(500).json({success: false, message: err.message})
        if (!user) {
          res.status(401).json({success: false, message: 'User not found' })
        } else if (user) {
          if (!user.comparePasswords(req.body.password)) {
            res.status(401).json({success: false, message: 'Wrong password..' })
          } else {
            jwt.sign(
              { username: user.username,
                id: user._id
              },
                process.env.SECRETKEY,
                function (err, result) {
                  let newToken = new Token({token: result});
                  newToken.save(function (err, e) {
                    if (err) {
                      res.status(500).json({success: false, message: err.message})
                    } else {
                      res.status(200).json({success: true, message: 'Here is your AwesomeToken !', content: {token: process.env.AUTHBEARER + ' ' + result}})
                    }
                  })
                })
          }
        }
      })
  } else {
    res.status(412).json({success: false, message: 'Username and/or password are mising..'})
  }
})




export default auth ;