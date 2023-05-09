<template>
  <br />
  <div class="container-fluid card">
    <div class="row m-1">
      <div class="col">Opravilo: {{ opravilo.ime }}</div>
      <div class="col">Rok: {{ opravilo.rok }}</div>
      <div class="col-2">
        <button
          type="button"
          class="btn btn-primary"
          @click="$emit('opravi', opravilo.id)"
        >
          Opravi
        </button>
      </div>
    </div>

    <div class="row m-1">
      <div class="col">Opis: {{ opravilo.opis }}</div>
      <div class="col-2">
        <button
          type="button"
          class="btn btn-secondary"
          @click="$emit('izbrisi', opravilo.id)"
        >
          Izbriši
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OpraviloCard",
  props: {
    opravilo: Object,
  },
  emits: ["opravi", "izbrisi"],
}
</script>

<style scoped>
.card {
  margin-top: 0.5rem;
  border: 1px solid black;
}
</style>
