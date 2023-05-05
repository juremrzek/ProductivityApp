<script setup>
import AppLayout from "../components/AppLayout.vue"
</script>

<template>
  <AppLayout>
    <div class="container form">
      <h4 class="text-center">Prijavi napako</h4>
      <div class="form-group">
        <label for="exampleInputEmail1">Ime napake</label>
        <input type="email" class="form-control" />
      </div>
      <br />
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Opis napake</label>
        <textarea class="form-control" rows="3"></textarea>
      </div>
      <br />
      <button type="submit" class="btn btn-secondary float-end">Prijavi</button>
      <br />
      <br />
    </div>
  </AppLayout>
</template>

<script>
export default {}
</script>

<style scoped>
.form {
  margin-top: 0.5rem;
  margin: 2rem;
  padding: 2rem;
  border: 1px solid black;
}
</style>
