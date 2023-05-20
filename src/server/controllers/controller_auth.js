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
      const users = await User.find( { name: req.body.name } );
      if(users.length != 0){
        res.status(409).json({message: "User already exists."});
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
        const name = req.body.name;
        const password = req.body.password;
        if(!name || !password){
            res.json({message: "request body must contain name and password"});
            return;
        }
        console.log(name);
        const users = await User.find( { name: name } );
        if(users.length == 0){
            res.status(400).json({message: "This user does not exist."});
            return;
        }
        const user = users[0];
        console.log(user.salt);
        const hash = crypto.pbkdf2Sync(password, user.salt, 1000, 64, "sha512").toString("hex");
        if(user.hash != hash){
            res.status(401).json({message: "Wrong password."});
            return;
        }
        req.session.user_id = user._id;
        console.log("session is now set to", user._id);
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