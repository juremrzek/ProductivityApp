const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    id: { type: Number, required: false },
    name: { type: String, required: true },
    description: { type: String, required: false },
    date: { type: Date, default: Date.now },
});

//UnsignedUser in User združmo kr itak se unsigned userjem taski ne shranjo v bazo
const userSchema = new mongoose.Schema({
    id: { type: Number, required: false },
    name: { type: String, required: true },
    tasks: { type: [taskSchema], required: false},
    completedTasksCount: { type: Number, default: 0 },
    hash: { type: String, required: [true, "Hash is required!"] },
    salt: { type: String, required: [true, "Salt is required!"] },
});

mongoose.model("User", userSchema, "Users");
mongoose.model("Task", taskSchema, "Tasks");