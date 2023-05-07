import User from "./User.js"

export class SignedUser extends User {
  constructor(id, name) {
    super(id, name)

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
