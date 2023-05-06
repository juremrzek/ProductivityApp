<script setup>
import SledilecCard from "./SledilecCard.vue"
</script>

<template>
  <template v-for="sledilec in sledilci" :key="sledilec.id">
    <sledilec-card :sledilec="sledilec"></sledilec-card>
  </template>
</template>

<script>
export default {
  props: {
    sledilci: {
      type: Array,
      required: true,
    },
  },
}
</script>
