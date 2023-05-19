const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    id: { type: Number, required: false },
    name: { type: String, required: true },
    description: { type: String, required: false },
    date: { type: String, required: true },
});

//UnsignedUser in User združmo kr itak se unsigned userjem taski ne shranjo v bazo
const userSchema = new mongoose.Schema({
    id: { type: Number, required: false },
    name: { type: String, required: true },
    tasks: { type: [taskSchema], required: false },
    completedTasksCount: { type: Number, default: 0 },
    following: { type: [mongoose.Schema.Types.ObjectId], required: false }, //store ids of followed users
    hash: { type: String, required: [true, "Hash is required!"] },
    salt: { type: String, required: [true, "Salt is required!"] },
});

const issueSchema = new mongoose.Schema({
    id: { type: Number, required: false },
    title: { type: String, required: true },
    description: { type: String, required: false},
    date: { type: String, required: false },
    user: { type: mongoose.Schema.Types.ObjectId, required: true },
    solved: { type: Boolean, default: false }
})

mongoose.model("User", userSchema, "Users");
mongoose.model("Task", taskSchema, "Tasks");
mongoose.model("Issue", issueSchema, "Issues");