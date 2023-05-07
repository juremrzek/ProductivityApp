import { User } from "./User.js"

export class Admin extends User {
  constructor(id, name, mail) {
    super(id, name)

    this.mail = mail
  }
}
