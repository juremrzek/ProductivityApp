import { Task } from "../entities/Task.js"

export class EditTasks {
  static async getTasks() {
    return [
      new Task(1, "Task 1", "Description 1", new Date()),
      new Task(2, "Task 2", "Description 2", new Date()),
      new Task(3, "Task 3", "Description 3", new Date()),
    ]
  }
  static async addTask(user, task) {}
  // Vate lahko dam samo parameter task, ki je posodobljen taks
  // oz. dam objekt spremenjenih parametrov
  // in vsekakor nisi void return type
  static async editTask(user, taskId, name, description) {}
  static async removeTask(taskId) {}
  static async completeTask(taskId) {}
  // TODO kaj ti delas in zakaj si tukaj
  // notification bi mogel biti na windowu
  // notify()
}
