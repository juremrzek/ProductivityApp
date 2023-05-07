<script setup>
import WindowManager from "../components/WindowManager.vue"
</script>

<template>
  <window-manager>
    <div class="container form">
      <h4 class="text-center">Prenos podatkov v podatkovno skladišče</h4>
      <br />
      <div class="form-group">
        <label for="exampleInputEmail1">Začetni datum</label>
        <input type="date" class="form-control" />
      </div>
      <br />
      <div class="form-group">
        <label for="exampleInputEmail1">Končni datum</label>
        <input type="date" class="form-control" />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <button type="submit" class="btn btn-secondary float-end">Prenesi</button>
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
