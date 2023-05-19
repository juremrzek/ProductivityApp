import { User } from "../entities/User.js"
import { request } from "../utils/request.js"

export class SearchUsers {
  static async findUsers(name) {
    try {
      const res = await request.get("/search", {
        params: { search_term: name },
      })

      const uporabniki = res.data.map((user) => new User(user._id, user.name))
      return uporabniki
    } catch (err) {
      return []
    }
  }
  static async followUser(id) {}
}
