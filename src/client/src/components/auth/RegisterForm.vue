<template>
  <div class="container form">
    <h4 class="text-center">Registracija</h4>

    <div class="form-group">
      <label for="exampleInputEmail1">Uporabniško ime</label>
      <input class="form-control" v-model="uporabnik.uporabniskoIme" />
    </div>
    <br />
    <div class="form-group">
      <label for="exampleInputEmail1">Geslo</label>
      <input type="password" class="form-control" v-model="uporabnik.geslo" />
    </div>
    <br />
    <button
      type="submit"
      class="btn btn-secondary float-end"
      @click="$emit('registracija', uporabnik)"
    >
      Registriraj se
    </button>
    <br />
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      uporabnik: {
        ime: "",
        priimek: "",
        uporabniskoIme: "",
        geslo: "",
        ponoviGeslo: "",
      },
    }
  },
  emits: ["registracija"],
}
</script>

<style scoped>
.form {
  margin-top: 0.5rem;
  padding: 2rem;
  border: 1px solid black;
}
</style>
