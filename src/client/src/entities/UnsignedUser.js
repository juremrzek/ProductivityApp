import User from "./User.js"

export class UnsignedUser extends User {
  constructor(id, name) {
    super(id, name)

    this.tasks = []
  }

  async getTasks() {}
  async addTask(task) {}
  async editTask(taskId, name, description) {}
  async removeTask(taskId) {}
}
