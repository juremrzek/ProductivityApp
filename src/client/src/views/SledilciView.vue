<script setup>
import AppLayout from "../components/AppLayout.vue"
import SledilciGrid from "../components/sledilci/SledilciGrid.vue"
</script>

<template>
  <app-layout>
    <sledilci-grid :sledilci="sledilci"></sledilci-grid>
  </app-layout>
</template>

<script>
export default {
  data() {
    return {
      sledilci: [
        { id: 1, ime: "Janez" },
        { id: 2, ime: "Micka" },
        { id: 3, ime: "Miha" },
      ],
    }
  },
}
</script>
