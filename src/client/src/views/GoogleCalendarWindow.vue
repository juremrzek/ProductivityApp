<script setup>
import WindowManager from "../components/WindowManager.vue"
import KoledarUredi from "../components/koledar/KoledarUredi.vue"
import KoledarCard from "../components/koledar/KoledarCard.vue"
</script>

<template>
  <WindowManager>
    <template v-slot:default>
      <h3 class="text-center">Koledar</h3>
      <template v-for="dogodek in dogodki" :key="dogodek.id">
        <koledar-card :dogodek="dogodek"></koledar-card>
      </template>
    </template>
    <template v-slot:secondary> <koledar-uredi></koledar-uredi> </template>
  </WindowManager>
</template>

<script>
export default {
  data() {
    return {
      dogodki: [
        {
          id: 123,
          ime: "aa",
          rok: "dons",
          opis: "kr neki za solo ne da se mi delat",
          trajanje: 12,
        },
        {
          id: 123,
          ime: "aa",
          rok: "dons",
          opis: "kr neki za solo ne da se mi delat",
          trajanje: 12,
        },
      ],
    }
  },
}
</script>
