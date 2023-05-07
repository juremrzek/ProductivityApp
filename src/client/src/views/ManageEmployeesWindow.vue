<script setup>
import AppLayout from "../components/AppLayout.vue"
</script>

<template>
  <app-layout>
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
  </app-layout>
</template>

<style scoped>
.form {
  margin: 5%;
  padding: 2rem;
  border: 1px solid black;
}
</style>
