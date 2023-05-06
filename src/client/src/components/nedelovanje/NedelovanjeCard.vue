<template>
  <br />
  <div class="container-fluid card">
    <div class="row m-1">
      <div class="col">Napaka: {{ napaka.ime }}</div>
      <div class="col">
        Uporabnik: <a href="#"> {{ napaka.upime }} </a>
      </div>
      <div class="col-2">
        <button
          type="button"
          class="btn btn-primary"
          @click="this.$event.emit('potrdi', napaka.id)"
        >
          Opravi
        </button>
      </div>
    </div>

    <div class="row m-1">
      <div class="col">Opis: {{ napaka.opis }}</div>
      <div class="col-2">
        <button
          type="button"
          class="btn btn-secondary"
          @click="this.$event.emit('zavrni', napaka.id)"
        >
          Izbriši
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "napakaCard",
  props: {
    napaka: Object,
  },
  emits: ["potrdi", "zavrni"],
}
</script>

<style scoped>
.card {
  margin-top: 0.5rem;
  border: 1px solid black;
}
</style>
