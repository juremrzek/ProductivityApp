const mongoose = require("mongoose");
const User = mongoose.model("User");
const Task = mongoose.model("Task");

const auth = require("./controller_auth");

const createUser = async (req, res) => {
    try{
        if (!req.body.name || !req.body.hash || !req.body.salt) {
            res.status(400).json({message: "fields 'name', 'hash' and 'salt' required."});
        }
        const newUser = new User({ name: req.body.name, tasks: [], following: [], hash: req.body.hash, salt: req.body.salt });
        newUser.save().then((result) => {
            console.log('New user created:', result);
            res.status(200).json(result);
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
        const user_id = auth.getCurrentUserId();
        const followed_id = req.query.followed_id; //whoever logged person is trying to follow
        if(!followed_id){
            res.status(400).json({message: "request has to contain followed_id."});
        }
        const user = await User.findById(user_id);
        user.following.push(followed_id);
        await user.save();
        res.status(200).json(user);
    }
    catch(err){
        res.status(400).json({message: err});
    }
};

const getFollowing = async (req, res) => {
    try{
        const user_id = auth.getCurrentUserId();
        const user = await User.findById(user_id);
        const following = user.following;
        //for each id in following, find the corresponding user in database
        const users = await User.find({ _id: { $in: following } });
        res.status(200).json(users);
    }
    catch(err){
        res.status(400).json({message: err});
    }
};

module.exports = {
    createUser,
    searchUsers,
    followUser,
    getFollowing,
};