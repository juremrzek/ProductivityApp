import { User } from "../entities/User.js"

export class SearchUsers {
  static async findUsers(name) {
    return [new User(1, "Janez"), new User(2, "Micka"), new User(3, "Franci")]
  }
  static async followUser(id) {}
}
