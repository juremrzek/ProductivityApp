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
};

const createUser = async (req, res) => {
    try{
        if (!req.body.name || !req.body.hash || !req.body.salt) {
            res.status(400).json({message: "fields 'name', 'hash' and 'salt' required."});
        }
        const newUser = new User({ name: req.body.name, tasks: [], following: [], hash: req.body.hash, salt: req.body.salt });
        newUser.save().then((result) => {
            console.log('New user created:', result);
            res.status(200).json({message: result});
        });
    }
    catch(err){
        res.status(400).json({message: err});
    }
};

const searchUsers = async (req, res) => {
    try{
        const query = req.query.search_term;
        console.log("query:", query);
        if(!query){
            res.status(400).json({message: "request does not contain search_term."});
        }
        const users = await User.find({ name: { $regex: query, $options: 'i' } });
        res.status(200).json(users);
    }
    catch(err){
        res.status(400).json({message: err});
    }
};

const followUser = async (req, res) => {
    try{
        const user1 = req.body.follower; //current logged in user
        const user2 = req.body.followed; //whoever logged person is trying to follow
        if(!user1 || !user2){
            res.status(400).json({message: "request needs two parameters, follower and followed."});
        }
        const user = await User.findById(user1);
        user.following.push(user2);
        await user.save();
        res.status(200).json(user);
    }
    catch(err){
        res.status(400).json({message: err});
    }
};

const getFollowing = async (req, res) => {
    try{
        const user_id = req.query.user_id;
        if(!user_id){
            res.status(400).json({message: "request does not contain user_id."});
        }
        const user = await User.findById(user_id);
        const following = user.following;
        //lazy loading
        const users = await User.find({ _id: { $in: following } });
        res.status(200).json(users);
    }
    catch(err){
        res.status(400).json({message: err});
    }
};

module.exports = {
    getAllUsers,
    createUser,
    searchUsers,
    followUser,
    getFollowing
};