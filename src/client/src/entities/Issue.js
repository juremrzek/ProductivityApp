export class Issue {
  constructor(
    id,
    title,
    description,
    date,
    user,
    solved = false,
    solvedBy = null
  ) {
    // TODO
    // Manjka ID
    this.id = id
    this.title = title
    this.description = description
    this.date = date
    this.user = user
    this.solved = solved
    this.solvedBy = solvedBy
  }

  solve(developer) {
    this.solved = true
    this.solvedBy = developer
    // TODO
    // Send to backend I guess
  }

  getTitle() {
    return this.title
  }

  getDescription() {
    return this.description
  }
  // TODO
  // getId()
  // getDate()
  // getUser()
  // getSolved()
}
