import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import Token from "./../../models/Token";
import bcrypt from "bcrypt";
import User from "./../../models/User";

let auth = express.Router();

auth.post("/signup", (req, res) => {
  if (req.body.username && req.body.password) {
    User.findOne({ username: req.body.username }, function(err, user) {
      if (user === null) {
        let newUser = new User(req.body);
        newUser.password = bcrypt.hashSync(req.body.password, 11);
        newUser.save(function(err, nUser) {
          if (err) {
            res.status(400).json({ success: false, message: err.message });
          } else {
            nUser.password = undefined;
            res.status(200).json({
              success: true,
              message: "Tadaaa ! New user registed",
              content: nUser
            });
          }
        });
      } else {
        res
          .status(412)
          .json({ success: false, message: "This username is already taken" });
      }
    });
  } else {
    res.status(412).json({
      success: false,
      message: "You need to enter an username and a password !"
    });
  }
});

auth.post("/login", (req, res) => {
  console.log("login se lance");
  if (req.body.username && req.body.password) {
    User.findOne({ username: req.body.username }, function(err, user) {
      if (err) res.status(500).json({ success: false, message: err.message });
      if (!user) {
        res.status(401).json({ success: false, message: "User not found" });
      } else if (user) {
        if (!user.comparePasswords(req.body.password)) {
          res.status(401).json({ success: false, message: "Wrong password.." });
        } else {
          jwt.sign(
            {
              username: user.username,
              id: user._id
            },
            process.env.SECRETKEY,
            function(err, result) {
              // console.log("HERE");
              let newToken = new Token({ token: result });
              // console.log(newToken);
              // newToken.save(function(err, ntoken) {
              if (err) {
                res.status(500).json({ success: false, message: err.message });
              } else {
                res.status(200).json({
                  success: true,
                  message: "Here is your AwesomeToken !",
                  content: { token: process.env.AUTHBEARER + " " + result }
                });
              }
              // });
            }
          );
        }
      }
    });
  } else {
    res.status(412).json({
      success: false,
      message: "Username and/or password are missing.."
    });
  }
});

export default auth;
