<script setup>
import WindowManager from "../components/WindowManager.vue"
</script>

<template>
  <window-manager>
    <div class="container form">
      <h4 class="text-center">Vnesi zaposlenega</h4>
      <div class="form-group">
        <label for="exampleInputEmail1">Ime</label>
        <input class="form-control" />
      </div>
      <br />
      <div class="form-group">
        <label for="exampleInputEmail1">Priimek</label>
        <input class="form-control" />
      </div>
      <br />
      <div class="form-group">
        <label for="exampleInputEmail1">E-pošta</label>
        <input class="form-control" />
      </div>
      <br />
      <div class="form-group">
        <label for="exampleInputEmail1">Geslo</label>
        <input class="form-control" />
      </div>
      <br />
      <br />
      <br />
      <button type="submit" class="btn btn-secondary float-end">Vnesi</button>
      <br />
      <br />
    </div>
  </window-manager>
</template>

<style scoped>
.form {
  margin: 5%;
  padding: 2rem;
  border: 1px solid black;
}
</style>
