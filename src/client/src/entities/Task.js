export class Task {
  constructor(id, name, description, date) {
    this.id = id
    this.name = name
    this.description = description
    this.date = date
  }

  setName(name) {
    this.name = name
  }

  setDescription(description) {
    this.description = description
  }

  getName() {
    return this.name
  }

  getDescription() {
    return this.description
  }

  //   TODO
  // getDate()
  // getId()
}
