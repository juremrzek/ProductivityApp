const mongoose = require("mongoose");
const User = mongoose.model("User");
const Task = mongoose.model("Task");

async function getUserById(id, req, res) {
    try {
        const user = await User.findById(id);
        return user;
    } catch (error) {
        console.error(error);
        res.status(404).json({
            message: "User with the id " + id + " does not exist!"
        });
        return null
    }
}

const addTaskToUser = async (req, res) => {
    let userId = req.params.userId;
    if(userId){
        try{
            const user = await getUserById(userId, req, res);
            console.log("User: " + user);

            if (!req.params.name) {
                res.status(400).json({
                    message: "Body parameter 'name' is required.",
                });
            }
            else{
                console.log(user.select('tasks')) //?? al je sam user.tasks
                /*user.select('tasks').push({
                    name: req.params.name,
                    description: req.params.description
                });*/
            }


        }
        catch(err){
            res.status(400).json({
                message: err
            });
        }
    }
    else{
        res.status(400).json({
            message:
              "request params do not contain userId.",
          });
    }
};

module.exports = {
    addTaskToUser
}