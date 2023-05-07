export class User {
  constructor(id, name) {
    this.id = id
    this.name = name
    // TODO
    // js nimam entitija hash in salt
    // ker ju pac ne rabim in ni varno da se to posilja na odjemalca
  }

  getName() {
    return this.name
  }

  // Ti si malce redundanten, huh?
  // lahko te dam v konstruktor
  setName(name) {
    this.name = name
  }

  getId() {
    return this.id
  }

  // TODO
  // Vaju dva ne bom rabil
  //   setPassword()
  //   isPasswordCorrect()
}
