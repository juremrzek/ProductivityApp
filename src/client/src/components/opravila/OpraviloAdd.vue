<template>
  <div class="container form">
    <h4 class="text-center">Novo opravilo</h4>
    <div class="form-group">
      <label for="exampleInputEmail1">Opravilo</label>
      <input type="email" class="form-control" />
    </div>
    <br />
    <div class="form-group">
      <label for="exampleFormControlTextarea1">Opis</label>
      <textarea class="form-control" rows="3"></textarea>
    </div>
    <br />
    <div class="form-group">
      <label for="exampleInputEmail1">Rok</label>
      <input
        type="date"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter email"
      />
    </div>
    <br />
    <button type="submit" class="btn btn-secondary">Submit</button>
  </div>
</template>

<style scoped>
.form {
  margin-top: 0.5rem;
  padding: 2rem;
  border: 1px solid black;
}
</style>
