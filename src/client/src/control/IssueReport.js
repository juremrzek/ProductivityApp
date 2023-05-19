import { request } from "../utils/request"

export class IssueReport {
  static async addIssue(issue) {
    try {
      const res = await request.post("/addIssue", {
        title: issue.getTitle(),
        description: issue.getDescription(),
      })
      console.log(res.data)
    } catch (err) {
      return null
    }
  }
}
