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
        res.status(200).json(result)
        return
      })
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: "Server error" })
      return
    }
  }

const login = (req, res) => {
    const user_id = req.body.user_id;
    if(!user_id){
        res.json({message: "request body does not contain user_id"});
        return;
    }
    req.session.user_id = user_id;
    console.log("session is now set to", user_id);
    res.json({message: user_id});
};

module.exports = {
    getCurrentUserId,
    setCurrentUserId,
    login,
    register
};