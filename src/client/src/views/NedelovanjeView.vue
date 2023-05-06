<script setup>
import AppLayout from "../components/AppLayout.vue"
import NedelovanjeCard from "../components/nedelovanje/NedelovanjeCard.vue"
</script>

<template>
  <AppLayout>
    <h3 class="text-center">Poročila o nedelovanju</h3>
    <!--  -->
    <template v-for="napaka in napake" :key="napaka.id">
      <nedelovanje-card :napaka="napaka"></nedelovanje-card>
    </template>
    <!--  -->
  </AppLayout>
</template>

<script>
export default {
  components: {
    NedelovanjeCard,
  },
  data() {
    return {
      napake: [
        {
          id: 1,
          ime: "Napaka 1",
          opis: "Opis napake 1",
          upime: "Uporabnik 1",
        },
        {
          id: 2,
          ime: "Napaka 2",
          opis: "Opis napake 2",
          upime: "Uporabnik 2",
        },
        {
          id: 3,
          ime: "Napaka 3",
          opis: "Opis napake 3",
          upime: "Uporabnik 3",
        },
      ],
    }
  },
}
</script>
