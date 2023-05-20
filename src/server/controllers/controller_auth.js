const crypto = require("crypto");
const mongoose = require("mongoose");
const User = mongoose.model("User")

const getCurrentUserId = () => {
    return currentUserId;
}

const setCurrentUserId = (user_id) => {
    currentUserId = user_id;
}

const register = async (req, res) => {
    try {
      if (!req.body.name || !req.body.password) {
        res
          .status(400)
          .json({ message: "fields 'name' and 'password' required." })
        return
      }
      const salt = crypto.randomBytes(16).toString("hex");
      const hash = crypto.pbkdf2Sync(req.body.password, salt, 1000, 64, "sha512").toString("hex");
      
      const newUser = new User({
        name: req.body.name,
        tasks: [],
        following: [],
        hash: hash,
        salt: salt
      })
      newUser.save().then((result) => {
        console.log("New user created:", result)
        res.status(200).json({message: "ok"});
        return
      })
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: "Server error" })
      return
    }
  }

const login = async (req, res) => {
    try{
        const user_id = req.body.user_id;
        const password = req.body.password;
        if(!user_id || !password){
            res.json({message: "request body must contain user_id and password"});
            return;
        }
        const user = await User.findById(user_id)
        if(!user){
            res.status(400).json({message: "This user does not exist."});
            return;
        }
        const hash = crypto.pbkdf2Sync(password, user.salt, 1000, 64, "sha512").toString("hex");
        if(user.hash != hash){
            res.status(401).json({message: "Wrong password."});
            return;
        }
        req.session.user_id = user_id;
        console.log("session is now set to", user_id);
        res.json({message: "Successfully logged in."});
    } catch(err) {
        console.log(err)
        res.status(500).json({message: "Server error"});
    }
};

module.exports = {
    getCurrentUserId,
    setCurrentUserId,
    login,
    register
};