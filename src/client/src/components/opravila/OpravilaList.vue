<script setup>
import OpraviloCard from "./OpraviloCard.vue"
</script>

<template>
  <h3 class="text-center">Opravila</h3>
  <template v-for="opravilo in opravila" :key="opravilo.id">
    <opravilo-card :opravilo="opravilo"></opravilo-card>
  </template>
</template>

<script>
export default {
  components: {
    OpraviloCard,
  },
  props: {
    opravila: {
      type: Array,
      required: true,
    },
  },
}
</script>
