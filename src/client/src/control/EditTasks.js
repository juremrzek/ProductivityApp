export class EditTasks {
  static async getTasks() {}
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
