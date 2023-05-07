<script setup>
import WindowManager from "../components/WindowManager.vue"
</script>

<template>
  <window-manager>
    <h3 class="text-center">Uporabnik {{ $route.params.id }}</h3>
    <div class="container form">
      <h4 class="text-center">Statistike</h4>

      <br />
      <br />
      <div class="row">
        <div class="col-2 font-weight-bold"><b> Dan </b></div>
        <div class="col">{{ statistike.dan }}</div>
      </div>
      <br />
      <br />
      <div class="row">
        <div class="col-2 font-weight-bold"><b> Mesec </b></div>
        <div class="col">{{ statistike.mesec }}</div>
      </div>
      <br />
      <br />
      <div class="row">
        <div class="col-2 font-weight-bold"><b> Leto </b></div>
        <div class="col">{{ statistike.leto }}</div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  </window-manager>
</template>

<script>
export default {
  data() {
    return {
      statistike: {
        dan: 12,
        mesec: 33,
        leto: 1337,
      },
    }
  },
}
</script>

<style scoped>
.form {
  margin: 5%;
  padding: 2rem;
  border: 1px solid black;
}
</style>
