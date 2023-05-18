const mongoose = require("mongoose");
const User = mongoose.model("User");
const Task = mongoose.model("Task");

const getAllUsers = async (req, res) => {
    try{
        const users = await User.find();
        res.status(200).json(users);
    }
    catch(err){
        res.status(400).json({message: err});
    }
}

module.exports = {
    getAllUsers
}