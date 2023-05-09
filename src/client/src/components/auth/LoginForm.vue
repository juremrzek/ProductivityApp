<template>
  <div class="container form">
    <h4 class="text-center">Prijava</h4>
    <div class="form-group">
      <label for="exampleInputEmail1">Uporabniško ime</label>
      <input class="form-control" v-model="name" />
    </div>
    <br />
    <div class="form-group">
      <label for="exampleInputEmail1">Geslo</label>
      <input type="password" class="form-control" v-model="password" />
    </div>
    <br />
    <br />
    <button
      type="submit"
      class="btn btn-secondary float-end"
      @click.prevent="$emit('prijava', name, password)"
    >
      Prijavi se
    </button>
    <br />
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      password: "",
    }
  },
  emits: ["prijava"],
}
</script>

<style scoped>
.form {
  margin-top: 0.5rem;
  padding: 2rem;
  border: 1px solid black;
}
</style>
