<template>
  <div class="row sledilec-card">
    <div class="col-9">
      Uporabniško ime:
      <a
        href="#"
        @click="
          this.$router.push({ name: 'uporabnik', params: { id: sledilec.id } })
        "
        >{{ sledilec.ime }}</a
      >
    </div>
    <div class="col-3">
      <button
        class="btn btn-secondary"
        @click="$emit(label.toLowerCase(), sledilec.id)"
      >
        {{ label }}
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
    label: {
      type: String,
      default: "Odstrani",
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
