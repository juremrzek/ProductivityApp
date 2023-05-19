const mongoose = require("mongoose");
const User = mongoose.model("User");
const Issue = mongoose.model("Issue");

const auth = require("./controller_auth");

const addIssue = async (req, res) => {
    try{
        if (!req.body.title) {
            res.status(400).json({message: "field 'title' required."});
        }
        const user_id = auth.getCurrentUserId();
        const newIssue = new Issue({ title: req.body.title, description: req.body.description, user: user_id});
        newIssue.save().then((result) => {
            console.log('New issue added:', result);
            res.status(200).json(result);
        });
    }
    catch(err){
        res.status(400).json({message: err});
    }
};

const getUnsolvedIssues = async (req, res) => {
    try{
        const issues = await Issue.find();
        res.status(200).json(issues);
    }
    catch(err){
        res.status(400).json({message: err});
    }
};

module.exports = {
    addIssue,
    getUnsolvedIssues
}