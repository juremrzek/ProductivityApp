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

  getDate() {
    return this.date
  }

  getDescription() {
    return this.description
  }

  getId() {
    return this.id
  }
}
