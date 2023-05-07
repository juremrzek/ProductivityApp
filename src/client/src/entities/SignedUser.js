import User from "./User.js"
import { UnsignedUser } from "./UnsignedUser.js"

export class SignedUser extends User {
  constructor(id, name) {
    super(id, name)

    // TODO
    // tebe moram narediti s kompozicijo,
    // ker ES6 ne podpira multiple inheritance
    this.unsigneduser = new UnsignedUser()

    // TODO
    // Tukaj bom mogel verjetno brati iz baze
    // oz. vsakic na novo bere followerje
    this.following = []
  }

  async getFollowing() {}
  // TODO
  // Ta metoda tudi manjka
  async getFollowers() {}
}
