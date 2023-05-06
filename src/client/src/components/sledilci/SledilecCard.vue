<template>
  <div class="row sledilec-card">
    <div class="col-10">
      Uporabniško ime:
      <a href="#" @click="this.$event.emit('odpri', sledilec.id)">{{
        sledilec.ime
      }}</a>
    </div>
    <div class="col-2">
      <button
        class="btn btn-secondary"
        @click="this.$event.emit('odstrani', sledilec.id)"
      >
        Izbriši
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SledilecCard",
  props: {
    sledilec: {
      type: Object,
      required: true,
    },
  },
  emits: ["odstrani", "odpri"],
}
</script>

<style scoped>
.sledilec-card {
  margin-top: 0.5rem;
  margin: 2rem;
  padding: 1rem;
  border: 1px solid black;
}
</style>
