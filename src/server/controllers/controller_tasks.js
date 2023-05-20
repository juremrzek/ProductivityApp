const mongoose = require("mongoose")
const User = mongoose.model("User")
const Task = mongoose.model("Task")

const auth = require("./controller_auth")

const getTasks = async (req, res) => {
  try {
    let user_id = auth.getCurrentUserId();
    const user = await User.findById(user_id);
    const tasks = user.tasks;
    console.log(tasks);
    const completed_tasks = tasks.filter((t) => t.completed == false);
    res.status(200).json(completed_tasks);
  } catch (err) {
    res.status(400).json({
      message: err,
    })
  }
}

const addTask = async (req, res) => {
  try {
    let user_id = auth.getCurrentUserId()
    const user = await User.findById(user_id)
    if (!user) {
      res
        .status(400)
        .json({ message: "user with the id " + user_id + " does not exist." })
      return
    }
    if (!req.body.name) {
      res.status(400).json({
        message: "Body parameter 'name' is required.",
      })
      return
    }
    user.tasks.push({
      name: req.body.name,
      description: req.body.description,
      date: req.body.date,
    })
    await user.save()
    res.status(200).json(user)
    return
  } catch (err) {
    res.status(400).json({
      message: err,
    })
    return
  }
}

const editTask = async (req, res) => {
  try {
    let user_id = auth.getCurrentUserId()
    let task_id = req.body.task_id
    console.log(req.body)
    if (!task_id) {
      res.status(400).json({ message: "request has to contain task_id." })
      return
    }
    const user = await User.findById(user_id)
    if (!user) {
      res
        .status(400)
        .json({ message: "user with the id " + user_id + " does not exist." })
      return
    }
    if (!req.body.name && !req.body.description) {
      res.status(400).json({ message: "name or description required." })
      return
    }
    const task = await user.tasks.id(task_id);

    if (req.body.name) task.name = req.body.name;
    if (req.body.description) task.description = req.body.description;
    if (req.body.date) task.date = req.body.date;

    await user.save()
    res.status(200).json(user)
    return
  } catch (err) {
    res.status(400).json({
      message: err,
    })
    return
  }
}

const removeTask = async (req, res) => {
  try {
    let user_id = auth.getCurrentUserId()
    let task_id = req.body.task_id
    if (!task_id) {
      res.status(400).json({ message: "request has to contain task_id." });
      return;
    }
    const user = await User.findById(user_id);
    if (!user) {
      res
        .status(400)
        .json({ message: "user with the id " + user_id + " does not exist." });
      return;
    }
    const task = await user.tasks.id(task_id)
    if (!task) {
      res
        .status(400)
        .json({ message: "task with the id " + task_id + " does not exist." });
      return;
    }
    user.tasks = user.tasks.filter((t) => t !== task) //remove task from task array

    await user.save();
    res.status(200).json(user);
    return;
  } catch (err) {
    res.status(400).json({
      message: err,
    });
    return;
  }
}

const completeTask = async (req, res) => {
  try {
    let user_id = auth.getCurrentUserId();
    let task_id = req.body.task_id;
    if (!task_id) {
      res.status(400).json({ message: "request has to contain task_id." });
      return;
    }
    const user = await User.findById(user_id)
    if (!user) {
      res
        .status(400)
        .json({ message: "user with the id " + user_id + " does not exist." });
      return;
    }
    const task = await user.tasks.id(task_id)
    if (!task) {
      res
        .status(400)
        .json({ message: "task with the id " + task_id + " does not exist." });
      return;
    }
    task.completed = true;
    user.completedTasksCount += 1;

    await user.save();
    res.status(200).json(user);

    return;
  } catch (err) {
    res.status(400).json({
      message: err,
    });
    return;
  }
}

const getStatistics = async (req, res) => {
  try {
    let user_id = auth.getCurrentUserId();
    const user = await User.findById(user_id)
      if (!user) {
        res
          .status(400)
          .json({ message: "user with the id " + user_id + " does not exist." });
        return;
      }
      const completed_tasks = user.tasks.filter((t) => t.completed == true);
      const thisYear = new Date().getFullYear();
      const thisMonth = new Date().getMonth();
      const thisDay = new Date().getDay();

      console.log(thisYear, thisMonth, thisDay);
      
      tasks_year = completed_tasks.filter((t => new Date(t.date).getFullYear() == thisYear ));
      tasks_month = tasks_year.filter((t => new Date(t.date).getMonth() == thisMonth ));
      tasks_day = tasks_month.filter((t => new Date(t.date).getDay() == thisDay ));
      res.status(200).json({
        year: tasks_year.length,
        month: tasks_month.length,
        day: tasks_day.length
      });
    } catch (err) {
      res.status(400).json({
        message: err,
      });
    }

}

module.exports = {
  addTask,
  editTask,
  getTasks,
  removeTask,
  completeTask,
  getStatistics
}
