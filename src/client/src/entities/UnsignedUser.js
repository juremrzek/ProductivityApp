export class UnsignedUser {
  constructor() {
    this.tasks = []
  }

  static async getTasks() {
    return [
      new Task(1, "Task 1", "Description 1", new Date()),
      new Task(2, "Task 2", "Description 2", new Date()),
      new Task(3, "Task 3", "Description 3", new Date()),
    ]
  }
  // async addTask(task) {}
  // async editTask(taskId, name, description) {}
  // async removeTask(taskId) {}
}
