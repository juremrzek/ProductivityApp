import { request } from "../utils/request"

export class Activity {
  static async getUserInfo(id) {
    const res = await request.get("/getStatistics", { params: { user_id: id } })

    console.log(res)
    return res.data
  }
}
