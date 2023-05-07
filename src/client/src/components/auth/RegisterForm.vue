<template>
  <div class="container form">
    <h4 class="text-center">Registracija</h4>
    <div class="form-group">
      <label for="exampleInputEmail1">Opravilo</label>
      <input class="form-control" />
    </div>
    <br />
    <div class="form-group">
      <label for="exampleInputEmail1">Ime </label>
      <input class="form-control" />
    </div>
    <br />
    <div class="form-group">
      <label for="exampleInputEmail1">Priimek</label>
      <input class="form-control" />
    </div>
    <br />
    <div class="form-group">
      <label for="exampleInputEmail1">Uporabniško ime</label>
      <input class="form-control" />
    </div>
    <br />
    <div class="form-group">
      <label for="exampleInputEmail1">Geslo</label>
      <input type="password" class="form-control" />
    </div>
    <br />
    <div class="form-group">
      <label for="exampleInputEmail1">Ponovi geslo</label>
      <input type="password" class="form-control" />
    </div>
    <br />
    <button type="submit" class="btn btn-secondary float-end">
      Registriraj se
    </button>
    <br />
    <br />
  </div>
</template>

<style scoped>
.form {
  margin-top: 0.5rem;
  padding: 2rem;
  border: 1px solid black;
}
</style>
