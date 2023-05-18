const mongoose = require("mongoose");
const User = mongoose.model("User");
const Task = mongoose.model("Task");

const getAllUsers = async (req, res) => {
    try{
        const users = await User.find();
        res.status(200).json({message: users});
    }
    catch(err){
        res.status(400).json({message: err});
    }
}

const createUser = async (req, res) => {
    try{
        if (!req.body.name || !req.body.hash || !req.body.salt) {
            res.status(400).json({message: "fields 'name', 'hash' and 'salt' required."});
        }
        const newUser = new User({ name: req.body.name, tasks: [], hash: req.body.hash, salt: req.body.salt });
        newUser.save().then((result) => {
            console.log('New user created:', result);
            res.status(200).json({message: result});
        });
    }
    catch(err){
        res.status(400).json({message: err});
    }
}

module.exports = {
    getAllUsers,
    createUser
}