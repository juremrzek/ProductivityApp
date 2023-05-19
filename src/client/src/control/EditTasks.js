import { Task } from "../entities/Task.js"
import { request } from "../utils/request.js"

export class EditTasks {
  static async getTasks() {
    const res = await request.get("/getTasks")
    console.log(res.data[0])

    return res.data.map(
      (task) =>
        new Task(
          task._id,
          task.name,
          task.description,
          new Date(task.date).toLocaleDateString("sl-SI")
        )
    )
  }
  static async completeTask(taskId) {
    await request.patch("/completeTask", { task_id: taskId })
  }
  static async removeTask(taskId) {
    await request.patch("/removeTask", { task_id: taskId })
  }

  static async addTask(task) {
    const res = await request.post("/addTask", { ...task })
  }

  static async editTask(task) {
    const res = await request.put("/editTask", { ...task, task_id: task.id })
  }
}
