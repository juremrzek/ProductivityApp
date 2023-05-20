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

  static async followUser(id) {
    try {
      const res = await request.put("/followUser", { followed_id: id })
      return res.data
    } catch (err) {
      return null
    }
  }

  static async getFollowing() {
    try {
      const res = await request.get("/getFollowing")
      return res.data.map((user) => new User(user._id, user.name))
    } catch (err) {
      return []
    }
  }
  static async getFollowers() {}

  static async unfollowUser(id) {
    try {
      const res = await request.patch("/unfollowUser", { unfollowed_id: id })
      console.log(res.data)
    } catch (err) {
      return null
    }
  }
}
