<template>
  <br />
  <div class="container-fluid card">
    <div class="row m-1">
      <div class="col">Dogodek: {{ dogodek.ime }}</div>
      <div class="col">Rok: {{ dogodek.rok }}</div>
      <div class="col-2">
        <button
          type="button"
          class="btn btn-primary"
          @click="this.$event.emit('uredi', dogodek.id)"
        >
          Uredi
        </button>
      </div>
    </div>

    <div class="row m-1">
      <div class="col">Opis: {{ dogodek.opis }}</div>
      <div class="col">Trajanje: {{ dogodek.trajanje }}</div>
      <div class="col-2">
        <button
          type="button"
          class="btn btn-secondary"
          @click="this.$event.emit('izbrisi', dogodek.id)"
        >
          Izbriši
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dogodekCard",
  props: {
    dogodek: Object,
  },
  emits: ["uredi", "izbrisi"],
}
</script>

<style scoped>
.card {
  margin-top: 0.5rem;
  border: 1px solid black;
}
</style>
