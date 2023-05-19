const mongoose = require("mongoose");
const User = mongoose.model("User");
const Task = mongoose.model("Task");

const getTasks = async (req, res) => {
    let user_id = req.query.user_id;
    if(user_id){
        try{
            const user = await User.findById(user_id);
            const tasks = user.tasks;
            res.status(200).json(tasks);
        }
        catch(err){
            res.status(400).json({
                message: err
            });
        }
    }
    else{
        res.status(400).json({ message: "request does not contain user_id." });
    }
}

const addTask = async (req, res) => {
    let user_id = req.query.user_id;
    if(user_id){
        try{
            const user = await User.findById(user_id);

            if (!req.body.name) {
                res.status(400).json({
                    message: "Body parameter 'name' is required.",
                });
            }
            user.tasks.push({
                name: req.body.name,
                description: req.body.description,
                date: req.body.date
            });
            await user.save();
            res.status(200).json(user);
        }
        catch(err){
            res.status(400).json({
                message: err
            });
        }
    }
    else{
        res.status(400).json({ message: "request does not contain user_id." });
    }
};

const editTask = async (req, res) => {
    let user_id = req.query.user_id;
    let task_id = req.query.task_id
    if(user_id && task_id){
        try{
            const user = await User.findById(user_id);

            if(!req.body.name && !req.body.description){
                res.status(400).json({message: "name or description required."})
            }
            const task = await user.tasks.id(task_id);
            console.log(task);

            if(req.body.name)
                task.name = req.body.name;
            if(req.body.description)
                task.description = req.body.description;
            if(req.body.date)
                task.date = req.body.date;
            
            await user.save();
            res.status(200).json(user);
        }
        catch(err){
            res.status(400).json({
                message: err
            });
        }
    }
    else{
        res.status(400).json({ message: "request has to contain both user_id and task_id." });
    }
}

const removeTask = async (req, res) => {
    let user_id = req.query.user_id;
    let task_id = req.query.task_id
    if(user_id && task_id){
        try{
            const user = await User.findById(user_id);
            const task = await user.tasks.id(task_id);
            user.tasks = user.tasks.filter(t => t !== task); //remove task from task array
            
            await user.save();
            res.status(200).json(user);
        }
        catch(err){
            res.status(400).json({
                message: err
            });
        }
    }
    else{
        res.status(400).json({ message: "request has to contain both user_id and task_id." });
    }
}

const completeTask = async (req, res) => {
    let user_id = req.query.user_id;
    let task_id = req.query.task_id
    if(user_id && task_id){
        try{
            const user = await User.findById(user_id);
            const task = await user.tasks.id(task_id);
            user.tasks = user.tasks.filter(t => t !== task); //remove task from task array
            user.completedTasksCount += 1; //!

            await user.save();
            res.status(200).json(user);
        }
        catch(err){
            res.status(400).json({
                message: err
            });
        }
    }
    else{
        res.status(400).json({ message: "request has to contain both user_id and task_id." });
    }
}

module.exports = {
    addTask,
    editTask,
    getTasks,
    removeTask,
    completeTask
}