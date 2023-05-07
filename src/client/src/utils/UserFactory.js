// TODO
// manjkas v UserFactory pri grafih
import { UnsignedUser } from "../entities/UnsignedUser"
import { SignedUser } from "../entities/SignedUser"
import { Admin } from "../entities/Admin"
import { Developer } from "../entities/Developer"
import { Analyst } from "../entities/Analyst"

// TODO
// Kako naj tebe naredim lol
// nacrt ni niti malo logicen
export class UserFactory {
  static createUser(user, id = null, name = null, mail = null) {
    if (user == 0 && id && name) {
      return new UnsignedUser()
    }
    if (user == 1 && id && name) {
      return new SignedUser(id, name)
    }
    if (user == 2 && id && name && mail) {
      return new Admin(id, name, mail)
    }
    if (user == 3 && id && name) {
      return new Developer(id, name)
    }
    if (user == 4 && id && name) {
      return new Analyst(id, name)
    }

    return null
  }
}
